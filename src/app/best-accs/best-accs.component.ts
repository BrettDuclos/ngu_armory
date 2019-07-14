import {Component, OnDestroy, OnInit} from '@angular/core';
import {InventoryService} from '../servises/inventory.service';
import {getAllAccessories, Item} from '../servises/items';
import {CombinationsService, combinationType} from '../servises/combination.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-best-accs',
  templateUrl: './best-accs.component.html',
  styleUrls: ['./best-accs.component.css'],
})
export class BestAccsComponent implements OnInit, OnDestroy {

  allItems: Item[];
  bestENGUAccs: {items: Item[], value: number}[] = [];
  bestMNGUAccs: {items: Item[], value: number}[] = [];
  bestCombinedAccs: {items: Item[], value: number}[] = [];
  bestHackAccs: {items: Item[], value: number}[] = [];
  bestWishAccs: {items: Item[], value: number}[] = [];
  equippedAccs: Item[] = [];
  equippedAccsSubscription: Subscription;
  inputs: string[] = [];
  defaultAccsSlots = "6";

  constructor(private service: InventoryService, private combinationsService: CombinationsService) {
  }

  ngOnInit() {
    this.equippedAccsSubscription = this.service.equippedAccsChanged.subscribe((items)=> {
      this.equippedAccs = items;
    });
    this.allItems = getAllAccessories();
    this.equippedAccs = this.service.equippedAccs;
    //What kind of hack is it?
    for (let i = 0; i < 50; i++) {
      this.inputs.push('100');
    }
  }


  public inventoryTooltip(item: Item) {
    return this.service.inventoryTooltip(item);
  }

  public equipAcc(item: Item) {
    this.service.equipAcc(item);

  }


  public calculate(slotsAmount) {
    if (slotsAmount >= this.equippedAccs.length) return;
    this.bestENGUAccs = [];
    this.bestMNGUAccs = [];
    this.bestCombinedAccs = [];
    this.bestHackAccs = [];
    this.bestWishAccs = [];
    let nguAccs: {combination: number[]; value: number; energyOrMagic: combinationType}[]
      = this.combinationsService.findBestAccsNGU(this.equippedAccs, parseInt(slotsAmount));
    for (let i = 0; i < nguAccs.length; i++) {
      let items: Item[] = [];
      for (let num of nguAccs[i].combination) {
        items.push(this.equippedAccs[num]);
      }
      switch (nguAccs[i].energyOrMagic) {
        case 'magic':
          this.bestMNGUAccs.push({items: items, value: nguAccs[i].value});
          break;
        case 'energy':
          this.bestENGUAccs.push({items: items, value: nguAccs[i].value});
          break;
        case 'energy_and_magic':
          this.bestCombinedAccs.push({items: items, value: nguAccs[i].value});
          break;
        case 'hack':
          this.bestHackAccs.push({items: items, value: nguAccs[i].value});
          break;
        case 'wish':
          this.bestWishAccs.push({items: items, value: nguAccs[i].value});
          break;
      }

    }

    this.bestENGUAccs.sort((a, b) => {
      return b.value - a.value;
    });
    this.bestMNGUAccs.sort((a, b) => {
      return b.value - a.value;
    });
    this.bestCombinedAccs.sort((a, b) => {
      return b.value - a.value;
    });
    this.bestHackAccs.sort((a, b) => {
      return b.value - a.value;
    });
    this.bestWishAccs.sort((a, b) => {
      return b.value - a.value;
    });
  }

  public unequipAcc(item: Item) {
    this.service.unequipAcc(item);

  }

  public onChangeInputValue(event, index) {
    this.equippedAccs[index].itemLevel = parseInt(event.target.value);
  }

  public ngOnDestroy(): void {
    this.equippedAccsSubscription.unsubscribe();
  }
}
