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
  savedTotalSpeed = {
    energy: 0,
    magic: 0,
    hack: 0
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
    this.savedTotalSpeed.energy = this.energyNgu();
    this.savedTotalSpeed.magic = this.magicNgu();
    this.savedTotalSpeed.hack = this.hackSpeed();
    this.inventoryService.saveEquipment();
  }

  public statDif(stat: SingleStat) {
    return this.inventoryService.statDif(stat);
  }

  public textColor(value: number) {
    return Utils.textColor(value);
  }

  public statDifMNGU() {
    if (this.savedTotalSpeed.magic == 0) {
      return 100;
    }
    const diff = this.magicNgu() / this.savedTotalSpeed.magic;
    return (diff - 1) * 100;
  }


  public statDifENGU() {
    if (this.savedTotalSpeed.energy == 0) {
      return 100;
    }
    const diff = this.energyNgu() / this.savedTotalSpeed.energy;
    return (diff - 1) * 100;
  }

  public statDifHack() {
    if (this.savedTotalSpeed.hack == 0) {
      return 100;
    }
    const diff = this.hackSpeed() / this.savedTotalSpeed.hack;
    return (diff - 1) * 100;
  }

  public energyNgu() {
    let ePower = this.totalStats.find((stat) => stat.stat === Stat.ENERGY_POWER).amount;
    let eCap = this.totalStats.find((stat) => stat.stat === Stat.ENERGY_CAP).amount;
    return this.speedModifier(Stat.NGU_SPEED) * Utils.getValue(ePower) * Utils.getValue(eCap);
  }

  public magicNgu() {
    let mPower = this.totalStats.find((stat) => stat.stat === Stat.MAGIC_POWER).amount;
    let mCap = this.totalStats.find((stat) => stat.stat === Stat.MAGIC_CAP).amount;
    return this.speedModifier(Stat.NGU_SPEED) * Utils.getValue(mPower) * Utils.getValue(mCap);
  }

  public hackSpeed() {
    let power = this.totalStats.find((stat) => stat.stat === Stat.RES3_POWER).amount;
    let cap = this.totalStats.find((stat) => stat.stat === Stat.RES3_CAP).amount;
    return this.speedModifier(Stat.HACK_SPEED) * Utils.getValue(power) * Utils.getValue(cap);
  }

  private speedModifier(stat: Stat) {
    const speed = this.totalStats.find((fstat) => fstat.stat === stat);
    return speed.amount === 0 ? 1 : 1 + speed.amount / 100;
  }

  public ngOnDestroy(): void {
    this.equippedItemSubscription.unsubscribe();
    this.totalStatsSubscription.unsubscribe();

  }
}
