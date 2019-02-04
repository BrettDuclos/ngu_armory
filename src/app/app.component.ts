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
  equippedItems;
  headIsEmpty = false;

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
    this.equippedItems = this.inventoryService.eqItems;
  }

  equipItem(item: Item) {
    this.inventoryService.equipItem(item);
    this.calculateSlots();
  }

  unequipItem(item: Item) {
    this.inventoryService.unequipSlot(item);
  }

  equippedItemTooltip(item: Item) {
    let tooltip = item.name + '\n\n';
    item.stats.forEach((stat) => {
      tooltip += stat.stat + ': ' + stat.value + '\n';
    });
    return tooltip;
  }

  inventoryTooltip(item: Item): string {
    let tooltip = item.name + '\n\n';
    item.stats.forEach((itemStat) => {
      tooltip += itemStat.stat + ': ' + itemStat.value + '\n';
    });
    return tooltip;
  }

  isMainStat(stat: Stat) {
    return stat === Stat.POWER || stat === Stat.TOUGHNESS;
  }

  slotIsEmpty(slot: Slot) {
    return this.inventoryService.slotIsEmpty(slot);
  }

  calculateSlots() {
    this.headIsEmpty = this.slotIsEmpty(Slot.HEAD);
  }

}
