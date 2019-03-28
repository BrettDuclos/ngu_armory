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
  savedStats: {stat: Stat, amount: number}[];
  totalNguSpeed = {
    energy: 0,
    magic: 0,
  };
  emptyItemIcons;
  inventoryItems;
  inventoryItemsBySlot;
  equippedItems;
  groupBySet = false;

  constructor(private inventoryService: InventoryService) {

  }

  ngOnInit() {
    this.totalStats = this.inventoryService.totalStats;
    this.savedStats = this.inventoryService.savedStats;
    this.emptyItemIcons = this.inventoryService.emptyItemIcons;
    this.inventoryService.equippedItemChanged.subscribe((items: Item[]) => {
      this.equippedItems = items;
    });
    this.inventoryService.totalStatsChanges.subscribe((stats) => {
      this.totalStats = stats;
    });
    this.inventoryItems = itemList;
    this.inventoryItemsBySlot = this.groupItemsBySlot();
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

  isMainStat(stat: Stat): boolean {
    return stat === Stat.POWER || stat === Stat.TOUGHNESS;
  }

  isStatPresented(stat: Stat): boolean {
    const savedStat = this.savedStats.find(fStat => fStat.stat === stat);
    const totalStat = this.totalStats.find(fStat => fStat.stat === stat);
    return savedStat.amount != 0 || totalStat.amount != 0;
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

  public saveEquipment() {
    this.totalNguSpeed.energy = this.energyNgu();
    this.totalNguSpeed.magic = this.magicNgu();
    this.inventoryService.saveEquipment();
  }

  public statDif(stat: {stat: Stat, amount: number}) {
    const foundStat = this.savedStats.find((foundStat) => foundStat.stat === stat.stat);
    if (foundStat) {
      return stat.amount - foundStat.amount;
    }
    return 0;
  }

  public textColor(value: number) {
    if (value > 0) {
      return 'green';
    } else if (value < 0) {
      return 'red';
    }
    return '';
  }

  public statDifMNGU() {
    return this.magicNgu() - this.totalNguSpeed.magic;
  }


  public statDifENGU() {
    return this.energyNgu() - this.totalNguSpeed.energy;
  }

  public energyNgu() {
    let ePower = this.totalStats.find((stat) => stat.stat === Stat.ENERGY_POWER).amount;
    if (ePower == 0) {
      ePower = 1;
    }
    return this.nguSpeed() * ePower;
  }

  public magicNgu() {
    let mPower = this.totalStats.find((stat) => stat.stat === Stat.MAGIC_POWER).amount;
    if (mPower == 0) {
      mPower = 1;
    }
    return this.nguSpeed() * mPower;
  }

  private nguSpeed() {
    const stat = this.totalStats.find((stat) => stat.stat === Stat.NGU_SPEED);
    return stat.amount === 0 ? 1 : stat.amount / 100;
  }
}
