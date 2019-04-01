import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Item, Slot, Stat} from './items';
import {AngularFireStorage} from '@angular/fire/storage';


@Injectable()
export class InventoryService {
  equippedItemChanged = new Subject<Item[]>();
  totalStatsChanges = new Subject<{stat: Stat, amount: number}[]>();
  savedStats: {stat: Stat, amount: number}[];
  totalStats: {stat: Stat, amount: number}[];
  emptyItemIcons = {
    weapon: null,
    head: null,
    chest: null,
    pants: null,
    boots: null,
    accessory: null,
  };
  emptySlot = {
    emptyWeapon: {slot: Slot.WEAPON, stats: []},
    emptyChest: {slot: Slot.CHEST, stats: []},
    emptyBoots: {slot: Slot.BOOTS, stats: []},
    emptyHead: {slot: Slot.HEAD, stats: []},
    emptyPants: {slot: Slot.PANTS, stats: []},
    emptyAccessory: {slot: Slot.ACCESSORY, stats: [], name: null},
  };

  eqItems = {
    weapon: this.emptySlot.emptyWeapon,
    chest: this.emptySlot.emptyChest,
    boots: this.emptySlot.emptyBoots,
    head: this.emptySlot.emptyHead,
    pants: this.emptySlot.emptyPants,
    accessory1: this.emptySlot.emptyAccessory,
    accessory2: this.emptySlot.emptyAccessory,
    accessory3: this.emptySlot.emptyAccessory,
    accessory4: this.emptySlot.emptyAccessory,
    accessory5: this.emptySlot.emptyAccessory,
    accessory6: this.emptySlot.emptyAccessory,
    accessory7: this.emptySlot.emptyAccessory,
    accessory8: this.emptySlot.emptyAccessory,
    accessory9: this.emptySlot.emptyAccessory,
    accessory10: this.emptySlot.emptyAccessory,
    accessory11: this.emptySlot.emptyAccessory,
  };

  private initStats() {
    return [
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
      {stat: Stat.AUGMENT_SPEED, amount: 0},
      {stat: Stat.GOLD_DROP, amount: 0},
      {stat: Stat.BEARD_SPEED, amount: 0},
      {stat: Stat.SEED_DROP, amount: 0},
      {stat: Stat.DROP_CHANCE, amount: 0},
      {stat: Stat.EXPERIENCE, amount: 0},
      {stat: Stat.RESPAWN, amount: 0},
      {stat: Stat.AP, amount: 0},
      {stat: Stat.QUEST_DROP, amount: 0},
      {stat: Stat.MAGIC_SPEED, amount: 0},
      {stat: Stat.ENERGY_SPEED, amount: 0},
      {stat: Stat.MOVE_COOLDOWN, amount: 0},
      {stat: Stat.YGGDRASIL_YIELD, amount: 0},
      {stat: Stat.DAYCARE_SPEED, amount: 0},
    ]
  }

  constructor(private storage: AngularFireStorage) {
    this.totalStats = this.initStats();
    this.savedStats = this.initStats();
    const emptySlotRef = this.storage.ref('empty_slot');
    this.emptyItemIcons.weapon = emptySlotRef.child('weapon.png').getDownloadURL();
    this.emptyItemIcons.accessory = emptySlotRef.child('accessory.png').getDownloadURL();
    this.emptyItemIcons.head = emptySlotRef.child('head.png').getDownloadURL();
    this.emptyItemIcons.chest = emptySlotRef.child('chest.png').getDownloadURL();
    this.emptyItemIcons.pants = emptySlotRef.child('pants.png').getDownloadURL();
    this.emptyItemIcons.boots = emptySlotRef.child('boots.png').getDownloadURL();
  }

  equipItem(item: Item) {
    if (this.findEquippedSlot(item) != null) {
      return;
    }
    switch (item.slot) {
      case Slot.WEAPON:
        this.eqItems.weapon = item;
        break;
      case Slot.HEAD:
        this.eqItems.head = item;
        break;
      case Slot.CHEST:
        this.eqItems.chest = item;
        break;
      case Slot.PANTS:
        this.eqItems.pants = item;
        break;
      case Slot.BOOTS:
        this.eqItems.boots = item;
        break;
      case Slot.ACCESSORY:
        this.equipAccessory(item);
        break;
    }
    this.equippedChanged();
  }

  unequipItem(item: Item) {
    switch (this.findEquippedSlot(item)) {
      case 'weapon':
        this.eqItems[this.findEquippedSlot(item)] = this.emptySlot.emptyWeapon;
        break;
      case 'head':
        this.eqItems[this.findEquippedSlot(item)] = this.emptySlot.emptyHead;
        break;
      case 'chest':
        this.eqItems[this.findEquippedSlot(item)] = this.emptySlot.emptyChest;
        break;
      case 'pants':
        this.eqItems[this.findEquippedSlot(item)] = this.emptySlot.emptyPants;
        break;
      case 'boots':
        this.eqItems[this.findEquippedSlot(item)] = this.emptySlot.emptyBoots;
        break;
      default:
        this.eqItems[this.findEquippedSlot(item)] = this.emptySlot.emptyAccessory;
        break;
    }
    this.equippedChanged();
  }

  equippedChanged() {
    this.totalStats.forEach((stat) => {
      stat.amount = 0;
    });
    Object.keys(this.eqItems)
      .forEach((item) => {
        this.eqItems[item].stats.forEach((stat) => {
          this.totalStats.find((fStat) => stat.stat === fStat.stat).amount += stat.value;
        });
      });
    this.totalStatsChanges.next(this.totalStats);
  }


  saveEquipment() {
    this.savedStats.forEach((stat) => {
      stat.amount = 0;
    });
    Object.keys(this.eqItems)
      .forEach((item) => {
        this.eqItems[item].stats.forEach((stat) => {
          this.savedStats.find((fStat) => stat.stat === fStat.stat).amount += stat.value;
        });
      });
  }


  equipAccessory(item: Item): Item {
    if (!this.eqItems.accessory1.name) {
      return this.eqItems.accessory1 = item;
    } else if (!this.eqItems.accessory2.name) {
      return this.eqItems.accessory2 = item;
    } else if (!this.eqItems.accessory3.name) {
      return this.eqItems.accessory3 = item;
    } else if (!this.eqItems.accessory4.name) {
      return this.eqItems.accessory4 = item;
    } else if (!this.eqItems.accessory5.name) {
      return this.eqItems.accessory5 = item;
    } else if (!this.eqItems.accessory6.name) {
      return this.eqItems.accessory6 = item;
    } else if (!this.eqItems.accessory7.name) {
      return this.eqItems.accessory7 = item;
    } else if (!this.eqItems.accessory8.name) {
      return this.eqItems.accessory8 = item;
    } else if (!this.eqItems.accessory9.name) {
      return this.eqItems.accessory9 = item;
    } else if (!this.eqItems.accessory10.name) {
      return this.eqItems.accessory10 = item;
    }
    return this.eqItems.accessory11 = item;
  }

  findEquippedSlot(item: Item) {
    return Object.keys(this.eqItems).find((fItem) => {
      return this.eqItems[fItem] === item;
    });
  }
}

