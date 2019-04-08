import {Injectable, OnDestroy} from '@angular/core';
import {Item, Stat} from './items';
import {Utils} from './utils';
import {InventoryService, SingleStat} from './inventory.service';
import {Subscription} from 'rxjs';

export type energyOrMagic = 'magic' | 'energy' | 'both'

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

  public findBestAccsNGU(accs: Item[], slotAmount: number): {combination: number[], value: number, energyOrMagic: energyOrMagic}[] {
    let combinations: number[][] = this.generateCombinations(accs.length, slotAmount);
    let result: {combination: number[], value: number, energyOrMagic: energyOrMagic}[] = [];
    for (let combination of combinations) {
      let magicNguSpeed = this.calculateNguSpeed(combination, accs, 'magic');
      let energyNguSpeed = this.calculateNguSpeed(combination, accs, 'energy');
      let combinedCombinationNguSpeed = this.calculateCombinedNguSpeed(combination, accs);
      result.push({combination: combination, value: magicNguSpeed, energyOrMagic: 'magic'});
      result.push({combination: combination, value: energyNguSpeed, energyOrMagic: 'energy'});
      result.push({combination: combination, value: combinedCombinationNguSpeed, energyOrMagic: 'both'});
    }
    return result;
  }

  calculateNguSpeed(combination, accs: Item[], energyOrMagic: energyOrMagic): number {
    let power = Stat.ENERGY_POWER;
    let cap = Stat.ENERGY_CAP;


    let ePower = this.getAccsStat(Stat.ENERGY_POWER);
    let eCap = this.getAccsStat(Stat.ENERGY_CAP);
    let nguSpeed = this.getAccsStat(Stat.NGU_SPEED);

    let equipmentCap = eCap;
    let equipmentPower = ePower;
    if (energyOrMagic === 'magic') {
      power = Stat.MAGIC_POWER;
      cap = Stat.MAGIC_CAP;

      equipmentPower = this.getAccsStat(Stat.MAGIC_POWER);
      equipmentCap = this.getAccsStat(Stat.MAGIC_CAP);
    }

    let combinationPower = equipmentPower;
    let combinationCap = equipmentCap;
    let combinationNgu = nguSpeed;
    for (let accessory of combination) {
      combinationPower += this.getCombinationStat(accs, accessory, power);
      combinationCap += this.getCombinationStat(accs, accessory, cap);
      combinationNgu += this.getCombinationStat(accs, accessory, Stat.NGU_SPEED);
    }
    return Utils.getValue(combinationCap) * Utils.getValue(combinationPower) * Utils.getValue(combinationNgu / 100 + 1);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
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

  private calculateCombinedNguSpeed(combination, accs: Item[]): number {
    return this.calculateNguSpeed(combination, accs, 'magic') + this.calculateNguSpeed(combination, accs, 'energy');
  }

  private getCombinationStat(accs: Item[], accessory, stat) {
    return Utils.getNullableValue(accs[accessory - 1].stats.find(fStat => fStat.stat == stat)) /
      2 *
      (accs[accessory - 1].itemLevel / 100 + 1);
  }

  private initCombination(value: number): number[] {
    let result = [];
    for (let i = 1; i <= value; i++) {
      result.push(i);
    }
    return result;
  }

  private generateCombinations(totalAccs: number, slotAmount: number) {
    let result: number[][] = [];
    result.push(this.initCombination(slotAmount));
    let arr: number[] = null;
    while ((arr = this.generateCombination(arr, totalAccs, slotAmount)) != null) {
      result.push([...arr]);
    }
    return result;
  }

  private generateCombination(arr: number[], totalAccs, slotAmount) {
    if (arr == null) {
      arr = [];
      for (let i = 0; i < slotAmount; i++) {
        arr[i] = i + 1;
      }
    }
    for (let i = slotAmount - 1; i >= 0; i--) {
      if (arr[i] < totalAccs - slotAmount + i + 1) {
        arr[i]++;
        for (let j = i; j < slotAmount - 1; j++) {
          arr[j + 1] = arr[j] + 1;
        }
        return arr;
      }
    }
    return null;
  }
}

