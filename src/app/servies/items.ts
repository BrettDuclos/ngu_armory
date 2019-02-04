export interface Item {
  name?: string;
  stats: ItemStat[];
  slot: Slot;
  setName?: SetName;
  img?: string;
}

export interface ItemStat {
  stat: Stat;
  value: number;
}

export enum Slot {
  WEAPON = 'Weapon',
  HEAD = 'Head',
  CHEST = 'Armor',
  PANTS = 'Pants',
  LEGS = 'Legs',
  BOOTS = 'Boots',
  ACCESSORY = 'Accessory',
  // ACCESSORY_2 = 'Accessory_2',
  // ACCESSORY_3 = 'Accessory_3',
  // ACCESSORY_4 = 'Accessory_4',
  // ACCESSORY_5 = 'Accessory_5',
  // ACCESSORY_6 = 'Accessory_6',
  // ACCESSORY_7 = 'Accessory_7',
  // ACCESSORY_8 = 'Accessory_8',
  // ACCESSORY_9 = 'Accessory_9',
  // ACCESSORY_10 = 'Accessory_10',
}

export enum Stat {
  POWER = 'Power',
  TOUGHNESS = 'Toughness',
  ENERGY_POWER = 'Energy power',
  ENERGY_BARS = 'Energy bars',
  ENERGY_CAP = 'Energy cap',
  MAGIC_POWER = 'Magic power',
  MAGIC_BARS = 'Magic bars',
  MAGIC_CAP = 'Magic cap',
  NGU_SPEED = 'NGU speed',
  WANDOOS_SPEED = 'Wandoos speed',
  ADVANCE_TRAINING = 'Advance Training'
}

export enum SetName {
  TWO_D,
  BADLY_DRAWN,
  BEARDVERSE,
  CAVE,
  CHOCO,
  CLOCK,
  FOREST,
  GAUDY,
  GRB,
  HSB,
  JAKE,
  MEGA,
  WANDERER,
  TEMPLATE,
  SEWERS,
  SLIMY,
  SPOOPY,
  STEALTH,
  TRAINING,
  WANDERER2,
  UUG_RINGS,
  HEARTS
}

export const itemList = {
  two_d: [
    {
      name: 'A triangle', setName: SetName.TWO_D, slot: Slot.WEAPON, stats: [
        {stat: Stat.ENERGY_BARS, value: 100},
        {stat: Stat.ENERGY_POWER, value: 90},
      ],
      img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/99_-_A_Triangle.png',
    },
    {
      name: 'Circle Helmet', setName: SetName.TWO_D, slot: Slot.HEAD, stats: [
        {stat: Stat.ENERGY_BARS, value: 60},
        {stat: Stat.ENERGY_POWER, value: 190},
        {stat: Stat.WANDOOS_SPEED, value: 20},
      ],
      img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/95_-_Circle_Helmet.png',
    },
    {
      name: 'Square Chestpiece', setName: SetName.TWO_D, slot: Slot.CHEST, stats: [
        {stat: Stat.ENERGY_BARS, value: 100},
        {stat: Stat.ENERGY_POWER, value: 100},
        {stat: Stat.MAGIC_POWER, value: 80},
      ],
      img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/21/96_-_Square_Chestpiece.png',
    },
    {
      name: 'Rectangle Pants', setName: SetName.TWO_D, slot: Slot.PANTS, stats: [
        {stat: Stat.ENERGY_CAP, value: 14},
        {stat: Stat.ENERGY_POWER, value: 100},
      ],
      img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/97/97_-_Rectangle_Pants.png',
    },
    {
      name: 'Polygon Boots', setName: SetName.TWO_D, slot: Slot.BOOTS, stats: [
        {stat: Stat.ENERGY_BARS, value: 140},
        {stat: Stat.ENERGY_CAP, value: 10},
        {stat: Stat.ENERGY_POWER, value: 100},
      ],
      img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/62/98_-_Polygon_Boots.png',
    },
    {
      name: 'THE CUBE', setName: SetName.TWO_D, slot: Slot.ACCESSORY, stats: [
        {stat: Stat.POWER, value: 1300},
        {stat: Stat.TOUGHNESS, value: 1300},
      ],
      img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/91/100_-_THE_CUBE.png',
    },
    {
      name: 'King Circle\'s Amulet of Helping Random Stuff', setName: SetName.TWO_D, slot: Slot.HEAD, stats: [
        {stat: Stat.ADVANCE_TRAINING, value: 80},
        {stat: Stat.WANDOOS_SPEED, value: 60},
      ],
      img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ed/101_-_King_Circle%27s_Amulet_of_Helping_Random_Stuff.png',
    },
  ],
};
