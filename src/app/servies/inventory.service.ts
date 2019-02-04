import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Item, Slot, Stat} from './items';
import {AngularFireStorage} from '@angular/fire/storage';


@Injectable()
export class InventoryService {
  equippedItemChanged = new Subject<Item[]>();
  totalStatsChanges = new Subject<{stat: Stat, amount: number}[]>();
  totalStats: {stat: Stat, amount: number}[] = [
    {stat: Stat.POWER, amount: 0},
    {stat: Stat.TOUGHNESS, amount: 0},
    {stat: Stat.ENERGY_POWER, amount: 0},
    {stat: Stat.ENERGY_CAP, amount: 0},
    {stat: Stat.ENERGY_BARS, amount: 0},
    {stat: Stat.MAGIC_POWER, amount: 0},
    {stat: Stat.MAGIC_CAP, amount: 0},
    {stat: Stat.MAGIC_BARS, amount: 0},
    {stat: Stat.WANDOOS_SPEED, amount: 0},
    {stat: Stat.ADVANCE_TRAINING, amount: 0},
    {stat: Stat.NGU_SPEED, amount: 0},
  ];
  emptyItemIcons = {
    weapon: null,
    head: null,
    chest: null,
    pants: null,
    boots: null,
    accessory: null,
  };
  eqItems = {
    weapon: {slot: Slot.WEAPON, stats: []},
    chest: {slot: Slot.CHEST, stats: []},
    boots: {slot: Slot.BOOTS, stats: []},
    head: {slot: Slot.HEAD, stats: []},
    pants: {slot: Slot.PANTS, stats: []},
    accessory1: {slot: Slot.ACCESSORY, stats: []},
    accessory2: {slot: Slot.ACCESSORY, stats: []},
    accessory3: {slot: Slot.ACCESSORY, stats: []},
    accessory4: {slot: Slot.ACCESSORY, stats: []},
    accessory5: {slot: Slot.ACCESSORY, stats: []},
    accessory6: {slot: Slot.ACCESSORY, stats: []},
    accessory7: {slot: Slot.ACCESSORY, stats: []},
    accessory8: {slot: Slot.ACCESSORY, stats: []},
    accessory9: {slot: Slot.ACCESSORY, stats: []},
    accessory10: {slot: Slot.ACCESSORY, stats: []},
    accessory11: {slot: Slot.ACCESSORY, stats: []},
    accessory12: {slot: Slot.ACCESSORY, stats: []},
  };
  equippedItems: Item[] = [
    {slot: Slot.CHEST, stats: []},
    {slot: Slot.WEAPON, stats: []},
    {slot: Slot.BOOTS, stats: []},
    {slot: Slot.HEAD, stats: []},
    {slot: Slot.PANTS, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
    {slot: Slot.ACCESSORY, stats: []},
  ];

  constructor(private storage: AngularFireStorage) {
    const emptySlotRef = this.storage.ref('empty_slot');
    this.emptyItemIcons.weapon = emptySlotRef.child('weapon.png').getDownloadURL();
    this.emptyItemIcons.accessory = emptySlotRef.child('accessory.png').getDownloadURL();
    this.emptyItemIcons.head = emptySlotRef.child('head.png').getDownloadURL();
    this.emptyItemIcons.chest = emptySlotRef.child('chest.png').getDownloadURL();
    this.emptyItemIcons.pants = emptySlotRef.child('pants.png').getDownloadURL();
    this.emptyItemIcons.boots = emptySlotRef.child('boots.png').getDownloadURL();
  }

  equipItem(item: Item) {
    const equippedSlotItem = this.getEquippedSlotItem(item.slot);
    const equippedItemIndex = this.equippedItems.indexOf(equippedSlotItem);
    this.equippedItems.splice(equippedItemIndex, 1, item);
    console.log(this.equippedItems);
    this.equippedChanged();
  }

  unequipSlot(item: Item) {
    const equippedSlotItem = this.getEquippedSlotItem(item.slot);
    const index = this.equippedItems.indexOf(equippedSlotItem);
    this.equippedItems.splice(index, 1, {slot: item.slot, stats: []});
    this.equippedChanged();
  }

  getEquippedSlotItem(slot: Slot): Item {
    return this.equippedItems.find((item: Item) => item.slot === slot);
  }

  equippedChanged() {
    this.equippedItemChanged.next(this.equippedItems);
    this.totalStats.forEach((stat) => {
      stat.amount = 0;
    });
    this.equippedItems.forEach((item) => {
      item.stats.forEach((stat) => {
        this.totalStats.find((fStat) => stat.stat === fStat.stat).amount += stat.value;
      });
    });
    this.totalStatsChanges.next(this.totalStats);
  }

  slotIsEmpty(slot: Slot) {
    return this.equippedItems.find((item) => {
      return item.slot === slot;
    }) != null;
  }

}
