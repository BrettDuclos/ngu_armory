import {Injectable, OnDestroy} from '@angular/core';
import {Item, Stat} from './items';
import {Utils} from './utils';
import {InventoryService, SingleStat} from './inventory.service';
import {Subscription} from 'rxjs';

export type combinationType = 'magic' | 'energy' | 'energy_and_magic' | 'hack'
type CombinationResult = {combination: number[], value: number, energyOrMagic: combinationType};

@Injectable()
export class CombinationsService implements OnDestroy {

  totalStatsForAccs: SingleStat[] = [];
  subscription: Subscription;

  constructor(private inventoryService: InventoryService) {
    this.subscription = this.inventoryService.totalStatsForAccsChanges.subscribe(stats => {
        this.totalStatsForAccs = stats;
      },
    );
  }

  public findBestAccsNGU(accs: Item[], slotAmount: number): CombinationResult[] {
    let combinations: number[][] = [...this.generateCombinations(accs.length, slotAmount)];
    let result: CombinationResult[] = [];
    let magicNguSpeedMaximum: number = 0;
    let energyNguSpeedMaximum: number = 0;
    let hackSpeedMaximum: number = 0;
    let combinedCombinationNguSpeedMaximum: number = 0;


    for (let currentCombination of combinations) {
      let magicNguSpeed = this.calculateNguSpeed(currentCombination, accs, 'magic');
      if (magicNguSpeed > magicNguSpeedMaximum) {
        magicNguSpeedMaximum = magicNguSpeed;
        result.push({combination: currentCombination, value: magicNguSpeedMaximum, energyOrMagic: 'magic'});
      }

      let energyNguSpeed = this.calculateNguSpeed(currentCombination, accs, 'energy');
      if (energyNguSpeed > energyNguSpeedMaximum) {
        energyNguSpeedMaximum = energyNguSpeed;
        result.push({combination: currentCombination, value: energyNguSpeedMaximum, energyOrMagic: 'energy'});
      }

      let hackSpeed = this.calculateNguSpeed(currentCombination, accs, 'hack');
      if (hackSpeed > hackSpeedMaximum) {
        hackSpeedMaximum = hackSpeed;
        result.push({combination: currentCombination, value: hackSpeedMaximum, energyOrMagic: 'hack'});
      }

      let combinedCombinationNguSpeed = magicNguSpeed + energyNguSpeed;
      if (combinedCombinationNguSpeed > combinedCombinationNguSpeedMaximum) {
        combinedCombinationNguSpeedMaximum = combinedCombinationNguSpeed;
        result.push({combination: currentCombination, value: combinedCombinationNguSpeedMaximum, energyOrMagic: 'energy_and_magic'});
      }
    }
    return result;
  }

  calculateNguSpeed(combination, accs: Item[], energyOrMagic: combinationType): number {
    let power = Stat.ENERGY_POWER;
    let cap = Stat.ENERGY_CAP;
    let speed = Stat.NGU_SPEED;

    if (energyOrMagic === 'magic') {
      power = Stat.MAGIC_POWER;
      cap = Stat.MAGIC_CAP;
    } else if (energyOrMagic === 'hack') {
      power = Stat.RES3_POWER;
      cap = Stat.RES3_CAP;
      speed = Stat.HACK_SPEED;
    }
    let combinationPower = this.getAccsStat(power);
    let combinationCap = this.getAccsStat(cap);
    let combinationSpeed = this.getAccsStat(speed);

    for (let accessory of combination) {
      combinationPower += this.getCombinationStat(accs, accessory, power);
      combinationCap += this.getCombinationStat(accs, accessory, cap);
      combinationSpeed += this.getCombinationStat(accs, accessory, speed);
    }
    return Utils.getValue(combinationCap) * Utils.getValue(combinationPower) * Utils.getValue(combinationSpeed / 100 + 1);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private* generateCombination(M, N, options = {mode: 'index'}) {
    const defaultOptions = {
      mode: 'index',
    };
    options = Object.assign({}, defaultOptions, options);
    var a = new Array(N);
    var c = new Array(M);
    var b = new Array(N);
    var p = new Array(N + 2);
    var x, y, z;

    // init a and b
    for (var i = 0; i < N; i++) {
      a[i] = i;
      if (i < N - M) {
        b[i] = 0;
      } else {
        b[i] = 1;
      }
    }

    // init c
    for (i = 0; i < M; i++) {
      c[i] = N - M + i;
    }

    // init p
    for (i = 0; i < p.length; i++) {
      if (i === 0) {
        p[i] = N + 1;
      } else if (i <= N - M) {
        p[i] = 0;
      } else if (i <= N) {
        p[i] = i - N + M;
      } else {
        p[i] = -2;
      }
    }

    function twiddle() {
      var i, j, k;
      j = 1;
      while (p[j] <= 0) {
        j++;
      }
      if (p[j - 1] === 0) {
        for (i = j - 1; i !== 1; i--) {
          p[i] = -1;
        }
        p[j] = 0;
        x = z = 0;
        p[1] = 1;
        y = j - 1;
      } else {
        if (j > 1) {
          p[j - 1] = 0;
        }
        do {
          j++;
        }
        while (p[j] > 0);
        k = j - 1;
        i = j;
        while (p[i] === 0) {
          p[i++] = -1;
        }
        if (p[i] === -1) {
          p[i] = p[k];
          z = p[k] - 1;
          x = i - 1;
          y = k - 1;
          p[k] = -1;
        } else {
          if (i === p[0]) {
            return 0;
          } else {
            p[j] = p[i];
            z = p[i] - 1;
            p[i] = 0;
            x = j - 1;
            y = i - 1;
          }
        }
      }
      return 1;
    }

    if (options.mode === 'index') {
      yield c.slice();
      while (twiddle()) {
        c[z] = a[x];
        yield c.slice();
      }
    } else if (options.mode === 'mask') {
      yield b.slice();
      while (twiddle()) {
        b[x] = 1;
        b[y] = 0;
        yield b.slice();
      }
    } else {
      throw new Error('Invalid mode');
    }
  }

  private generateCombinations(totalAccs: number, slotAmount: number) {
    return this.generateCombination(slotAmount, totalAccs);

  }

  private getAccsStat(stat: Stat): number {
    const fStat = this.totalStatsForAccs.find(_stat => {
      return _stat.stat == stat;
    });
    if (fStat) {
      return fStat.amount;
    }
    return 0;
  }

  private getCombinationStat(accs: Item[], accessory, stat) {
    return Utils.getNullableValue(accs[accessory].stats.find(fStat => fStat.stat == stat)) /
      2 *
      (accs[accessory].itemLevel / 100 + 1);
  }
}

