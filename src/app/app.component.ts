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
  savedTotalNguSpeed = {
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
    this.savedTotalNguSpeed.energy = this.energyNgu();
    this.savedTotalNguSpeed.magic = this.magicNgu();
    this.inventoryService.saveEquipment();
  }

  public statDif(stat: {stat: Stat, amount: number}) {
    const foundStat = this.savedStats.find((foundStat) => foundStat.stat === stat.stat);
    if (foundStat && foundStat.amount != 0) {
      const diff = stat.amount / foundStat.amount;
      return (diff - 1) * 100;
    } else if (foundStat.amount == 0) {
      return 100;
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
    const diff = this.magicNgu() / this.savedTotalNguSpeed.magic;
    if (this.savedTotalNguSpeed.magic == 0) {
      return 100;
    }
    return (diff - 1) * 100;
  }


  public statDifENGU() {
    const diff = this.energyNgu() / this.savedTotalNguSpeed.energy;
    if (this.savedTotalNguSpeed.energy == 0) {
      return 100;
    }
    return (diff - 1) * 100;
  }

  public energyNgu() {
    let ePower = this.totalStats.find((stat) => stat.stat === Stat.ENERGY_POWER).amount;
    let eCap = this.totalStats.find((stat) => stat.stat === Stat.ENERGY_CAP).amount;
    return this.nguSpeed() * ePower * eCap;
  }

  public magicNgu() {
    let mPower = this.totalStats.find((stat) => stat.stat === Stat.MAGIC_POWER).amount;
    let mCap = this.totalStats.find((stat) => stat.stat === Stat.MAGIC_CAP).amount;
    return this.nguSpeed() * mPower * mCap;
  }

  private nguSpeed() {
    const stat = this.totalStats.find((stat) => stat.stat === Stat.NGU_SPEED);
    return stat.amount === 0 ? 1 : stat.amount / 100;
  }
}
