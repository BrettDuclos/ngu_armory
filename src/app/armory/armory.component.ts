import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item, itemList, SetName, Slot, Stat} from '../servises/items';
import {InventoryService, SingleStat} from '../servises/inventory.service';
import {Utils} from '../servises/utils';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-armory',
  templateUrl: './armory.component.html',
  styleUrls: ['./armory.component.css'],
})
export class ArmoryComponent implements OnInit, OnDestroy {
  totalStats: SingleStat[];
  savedStats: SingleStat[];
  savedTotalNguSpeed = {
    energy: 0,
    magic: 0,
  };
  emptyItemIcons;
  inventoryItems: {setName: SetName, items: Item[]}[];
  inventoryItemsBySlot: {slot: Slot; items: Item[]}[];
  equippedItems;
  groupBySet = false;

  equippedItemSubscription: Subscription;
  totalStatsSubscription: Subscription;

  constructor(private inventoryService: InventoryService) {

  }

  ngOnInit() {
    this.totalStats = this.inventoryService.totalStats;
    this.savedStats = this.inventoryService.savedStats;
    this.emptyItemIcons = this.inventoryService.emptyItemIcons;
    this.equippedItemSubscription = this.inventoryService.equippedItemChanged.subscribe((items: Item[]) => {
      this.equippedItems = items;
    });
    this.totalStatsSubscription = this.inventoryService.totalStatsChanges.subscribe((stats) => {
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
    return this.inventoryService.inventoryTooltip(item);
  }

  isMainStat(stat: Stat): boolean {
    return stat === Stat.POWER || stat === Stat.TOUGHNESS;
  }

  isStatPresented(stat: Stat): boolean {
    const savedStat = this.savedStats.find(fStat => fStat.stat === stat);
    const totalStat = this.totalStats.find(fStat => fStat.stat === stat);
    return savedStat.amount != 0 || totalStat.amount != 0;
  }

  groupItemsBySlot(): {slot: Slot; items: any[]}[] {
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

  public statDif(stat: SingleStat) {
    return this.inventoryService.statDif(stat);
  }

  public textColor(value: number) {
    return Utils.textColor(value);
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
    return this.nguSpeed() * Utils.getValue(ePower) * Utils.getValue(eCap);
  }

  public magicNgu() {
    let mPower = this.totalStats.find((stat) => stat.stat === Stat.MAGIC_POWER).amount;
    let mCap = this.totalStats.find((stat) => stat.stat === Stat.MAGIC_CAP).amount;
    return this.nguSpeed() * Utils.getValue(mPower) * Utils.getValue(mCap);
  }

  private nguSpeed() {
    const stat = this.totalStats.find((stat) => stat.stat === Stat.NGU_SPEED);
    return stat.amount === 0 ? 1 : 1 + stat.amount / 100;
  }

  public ngOnDestroy(): void {
    this.equippedItemSubscription.unsubscribe();
    this.totalStatsSubscription.unsubscribe();

  }
}
