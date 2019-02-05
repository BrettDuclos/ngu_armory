import {Component, OnInit} from '@angular/core';
import {Item, itemList, Slot, Stat} from './servies/items';
import {InventoryService} from './servies/inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  totalStats: {stat: Stat, amount: number}[];
  emptyItemIcons;
  inventoryItems;
  inventoryItemsBySlot;
  equippedItems;
  groupBySet: false;

  constructor(private inventoryService: InventoryService) {

  }

  ngOnInit() {
    this.emptyItemIcons = this.inventoryService.emptyItemIcons;
    this.inventoryService.equippedItemChanged.subscribe((items: Item[]) => {
      this.equippedItems = items;
    });
    this.inventoryService.totalStatsChanges.subscribe((stats) => {
      this.totalStats = stats;
    });
    this.inventoryItems = itemList;
    this.inventoryItemsBySlot = this.groupItemsBySlot();
    console.log(this.inventoryItemsBySlot)
    this.equippedItems = this.inventoryService.eqItems;
  }

  unequip(item: Item) {
    this.inventoryService.unequipItem(item);
  }

  equipItem(item: Item) {
    this.inventoryService.equipItem(item);
  }

  inventoryTooltip(item: Item): string {
    let tooltip = item.name + '\n\n';
    item.stats.forEach((itemStat) => {
      tooltip += itemStat.stat + ': ' + itemStat.value + '\n';
      if (itemStat.stat === 'Toughness' && item.stats.indexOf(itemStat) !== item.stats.length - 1) {
        tooltip += '____________\n';
      }
    });
    return tooltip;
  }

  isMainStat(stat: Stat) {
    return stat === Stat.POWER || stat === Stat.TOUGHNESS;
  }

  groupItemsBySlot() {
    const items = [
      {slot: Slot.HEAD, items: []},
      {slot: Slot.CHEST, items: []},
      {slot: Slot.PANTS, items: []},
      {slot: Slot.BOOTS, items: []},
      {slot: Slot.WEAPON, items: []},
      {slot: Slot.ACCESSORY, items: []},
    ];
    this.inventoryItems.forEach(itemSet => {
      itemSet.items.forEach(item => {
        items.find(slot => {
          return slot.slot === item.slot;
        }).items.push(item);
      });
    });
    return items;
  }

}
