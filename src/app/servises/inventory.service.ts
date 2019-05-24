import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Item, Slot, Stat} from './items';
import {AngularFireStorage} from '@angular/fire/storage';


export interface SingleStat {
  stat: Stat;
  amount: number;
}

@Injectable()
export class InventoryService {
  equippedItemChanged = new Subject<Item[]>();
  totalStatsChanges = new Subject<SingleStat[]>();
  totalStatsForAccsChanges = new Subject<SingleStat[]>();
  equippedAccsChanged = new Subject<Item[]>();

  statsForAccs: Stat[] = [
    Stat.MAGIC_CAP,
    Stat.MAGIC_POWER,
    Stat.ENERGY_CAP,
    Stat.ENERGY_POWER,
    Stat.NGU_SPEED,
  ];
  savedStats: SingleStat[];
  totalStats: SingleStat[];
  totalStatsForAccs: SingleStat[];
  equippedAccs: Item[] = [];
  emptyItemIcons = {
    weapon: null,
    head: null,
    chest: null,
    pants: null,
    boots: null,
    accessory: null,
  };
  emptyWeapon: Item = {slot: Slot.WEAPON, stats: [], name: null};
  emptyChest: Item = {slot: Slot.CHEST, stats: [], name: null};
  emptyBoots: Item = {slot: Slot.BOOTS, stats: [], name: null};
  emptyHead: Item = {slot: Slot.HEAD, stats: [], name: null};
  emptyPants: Item = {slot: Slot.PANTS, stats: [], name: null};
  emptyAccessory: Item = {slot: Slot.ACCESSORY, stats: [], name: null};

  eqItems = {
    weapon: this.emptyWeapon,
    chest: this.emptyChest,
    boots: this.emptyBoots,
    head: this.emptyHead,
    pants: this.emptyPants,
    accessory1: this.emptyAccessory,
    accessory2: this.emptyAccessory,
    accessory3: this.emptyAccessory,
    accessory4: this.emptyAccessory,
    accessory5: this.emptyAccessory,
    accessory6: this.emptyAccessory,
    accessory7: this.emptyAccessory,
    accessory8: this.emptyAccessory,
    accessory9: this.emptyAccessory,
    accessory10: this.emptyAccessory,
    accessory11: this.emptyAccessory,
    accessory12: this.emptyAccessory,
  };

  constructor(private storage: AngularFireStorage) {
    this.totalStats = InventoryService.initStats();
    this.savedStats = InventoryService.initStats();
    this.totalStatsForAccs = InventoryService.initBaseStats();
    const emptySlotRef = this.storage.ref('empty_slot');
    this.emptyItemIcons.weapon = emptySlotRef.child('weapon.png').getDownloadURL();
    this.emptyItemIcons.accessory = emptySlotRef.child('accessory.png').getDownloadURL();
    this.emptyItemIcons.head = emptySlotRef.child('head.png').getDownloadURL();
    this.emptyItemIcons.chest = emptySlotRef.child('chest.png').getDownloadURL();
    this.emptyItemIcons.pants = emptySlotRef.child('pants.png').getDownloadURL();
    this.emptyItemIcons.boots = emptySlotRef.child('boots.png').getDownloadURL();
  }

  equipItem(item: Item) {
    item.isEquippedInArmory = true;
    if (this.findEquippedSlot(item) != null) {
      return;
    }
    switch (item.slot) {
      case Slot.WEAPON:
        this.eqItems.weapon.isEquippedInArmory = false;
        this.eqItems.weapon = item;
        break;
      case Slot.HEAD:
        this.eqItems.head.isEquippedInArmory = false;
        this.eqItems.head = item;
        break;
      case Slot.CHEST:
        this.eqItems.chest.isEquippedInArmory = false;
        this.eqItems.chest = item;
        break;
      case Slot.PANTS:
        this.eqItems.pants.isEquippedInArmory = false;
        this.eqItems.pants = item;
        break;
      case Slot.BOOTS:
        this.eqItems.boots.isEquippedInArmory = false;
        this.eqItems.boots = item;
        break;
      case Slot.ACCESSORY:
        this.equipAccessory(item);
        break;
    }
    this.equippedChanged();
  }

  unequipItem(item: Item) {
    item.isEquippedInArmory = false;
    switch (this.findEquippedSlot(item)) {
      case 'weapon':
        this.eqItems[this.findEquippedSlot(item)] = this.emptyWeapon;
        break;
      case 'head':
        this.eqItems[this.findEquippedSlot(item)] = this.emptyHead;
        break;
      case 'chest':
        this.eqItems[this.findEquippedSlot(item)] = this.emptyChest;
        break;
      case 'pants':
        this.eqItems[this.findEquippedSlot(item)] = this.emptyPants;
        break;
      case 'boots':
        this.eqItems[this.findEquippedSlot(item)] = this.emptyBoots;
        break;
      default:
        this.eqItems[this.findEquippedSlot(item)] = this.emptyAccessory;
        break;
    }
    this.equippedChanged();
  }

  equippedChanged() {
    this.totalStats.forEach((stat) => {
      stat.amount = 0;
    });
    this.totalStatsForAccs.forEach((stat) => {
      stat.amount = 0;
    });
    Object.keys(this.eqItems)
      .forEach((item) => {
        this.eqItems[item].stats.forEach((stat) => {
          this.totalStats.find((fStat) => stat.stat === fStat.stat).amount += stat.value;
        });
      });

    Object.keys(this.eqItems)
      .forEach(item => {
        this.eqItems[item].stats.forEach((stat) => {
          if (this.statsForAccs.indexOf(stat.stat) != -1) {
            this.totalStatsForAccs.find((fStat) => stat.stat === fStat.stat).amount += stat.value;
          }
        });
      });

    this.totalStatsForAccsChanges.next(this.totalStatsForAccs);
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
      this.eqItems.accessory1.isEquippedInArmory = false;
      return this.eqItems.accessory1 = item;
    } else if (!this.eqItems.accessory2.name) {
      this.eqItems.accessory2.isEquippedInArmory = false;
      return this.eqItems.accessory2 = item;
    } else if (!this.eqItems.accessory3.name) {
      this.eqItems.accessory3.isEquippedInArmory = false;
      return this.eqItems.accessory3 = item;
    } else if (!this.eqItems.accessory4.name) {
      this.eqItems.accessory4.isEquippedInArmory = false;
      return this.eqItems.accessory4 = item;
    } else if (!this.eqItems.accessory5.name) {
      this.eqItems.accessory5.isEquippedInArmory = false;
      return this.eqItems.accessory5 = item;
    } else if (!this.eqItems.accessory6.name) {
      this.eqItems.accessory6.isEquippedInArmory = false;
      return this.eqItems.accessory6 = item;
    } else if (!this.eqItems.accessory7.name) {
      this.eqItems.accessory7.isEquippedInArmory = false;
      return this.eqItems.accessory7 = item;
    } else if (!this.eqItems.accessory8.name) {
      this.eqItems.accessory8.isEquippedInArmory = false;
      return this.eqItems.accessory8 = item;
    } else if (!this.eqItems.accessory9.name) {
      this.eqItems.accessory9.isEquippedInArmory = false;
      return this.eqItems.accessory9 = item;
    } else if (!this.eqItems.accessory10.name) {
      this.eqItems.accessory10.isEquippedInArmory = false;
      return this.eqItems.accessory10 = item;
    } else if (!this.eqItems.accessory11.name) {
      this.eqItems.accessory11.isEquippedInArmory = false;
      return this.eqItems.accessory11 = item;
    }
    this.eqItems.accessory12.isEquippedInArmory = false;
    return this.eqItems.accessory12 = item;
  }

  findEquippedSlot(item: Item) {
    return Object.keys(this.eqItems).find((fItem) => {
      return this.eqItems[fItem] === item;
    });
  }

  public statDif(stat: SingleStat) {
    const foundStat = this.savedStats.find((foundStat) => foundStat.stat === stat.stat);
    if (foundStat && foundStat.amount != 0) {
      const diff = stat.amount / foundStat.amount;
      return (diff - 1) * 100;
    } else if (foundStat.amount == 0) {
      return 100;
    }
    return 0;
  }

  public inventoryTooltip(item: Item): string {
    let tooltip = item.name + '\n\n';
    item.stats.forEach((itemStat) => {
      tooltip += itemStat.stat + ': ' + itemStat.value.toLocaleString() + '\n';
      if (itemStat.stat === 'Toughness' && item.stats.indexOf(itemStat) !== item.stats.length - 1) {
        tooltip += '____________\n';
      }
    });
    return tooltip;
  }

  public equipAcc(item: Item) {
    if (!this.equippedAccs.find(acc => item === acc)) {
      this.equippedAccs.push(item);
      item.isEquippedInAccs = true;
      this.equippedAccsChanged.next(this.equippedAccs);
    }
  }

  public unequipAcc(item: Item) {
    item.isEquippedInAccs = false;
    let index = this.equippedAccs.indexOf(item);
    this.equippedAccs.splice(index, 1);
    this.equippedAccsChanged.next(this.equippedAccs);
  }

  private static initBaseStats() {
    return [
      {stat: Stat.ENERGY_POWER, amount: 0},
      {stat: Stat.ENERGY_CAP, amount: 0},
      {stat: Stat.MAGIC_POWER, amount: 0},
      {stat: Stat.MAGIC_CAP, amount: 0},
      {stat: Stat.NGU_SPEED, amount: 0},
    ];
  }

  private static initStats() {
    return [
      ...InventoryService.initBaseStats(),
      {stat: Stat.POWER, amount: 0},
      {stat: Stat.TOUGHNESS, amount: 0},
      {stat: Stat.ENERGY_BARS, amount: 0},
      {stat: Stat.MAGIC_BARS, amount: 0},
      {stat: Stat.WANDOOS_SPEED, amount: 0},
      {stat: Stat.ADVANCE_TRAINING, amount: 0},
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
      {stat: Stat.HACK_SPEED, amount: 0},
      {stat: Stat.COOKING, amount: 0},
      {stat: Stat.RES3_POWER, amount: 0},
      {stat: Stat.RES3_CAP, amount: 0},
      {stat: Stat.RES3_BARS, amount: 0},
      {stat: Stat.WISH_SPEED, amount: 0},
    ];
  }
}

