export interface Item {
  name: string;
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
  BOOTS = 'Boots',
  ACCESSORY = 'Accessory',
}

export enum Stat {
  DAYCARE_SPEED = 'Daycare Speed',
  YGGDRASIL_YIELD = 'Yggdrassil Yeild',
  MOVE_COOLDOWN = 'Move Cooldown',
  MAGIC_SPEED = 'Magic Speed',
  ENERGY_SPEED = 'Energy Speed',
  QUEST_DROP = 'Quest Drops',
  AP = 'AP',
  EXPERIENCE = 'Experience',
  RESPAWN = 'Respawn',
  GOLD_DROP = 'Gold Drops',
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
  ADVANCE_TRAINING = 'Advance Training',
  AUGMENT_SPEED = 'Augment Speed',
  BEARD_SPEED = 'Beard Speed',
  SEED_DROP = 'Seed Gain',
  DROP_CHANCE = 'Drop Chance'
}

export enum SetName {
  TWO_D = '2D Set',
  BADLY_DRAWN = 'Badly Drawn Set',
  BEARDVERSE = 'Beardverse Set',
  CAVE = 'Cave Set',
  CHOCO = 'Choco Set',
  CLOCK = 'Clock Set',
  FOREST = 'Forest Set',
  GAUDY = 'Gaudy Set',
  GRB = 'GRB Set',
  HSB = 'HSB Set',
  JAKE = 'Jake Set',
  MEGA = 'Mega Set',
  SEWERS = 'Sewers Set',
  SLIMY = 'Slimy Set',
  SPOOPY = 'Spoopy Set',
  STEALTH = 'Stealth Set',
  TRAINING = 'Training Set',
  WANDERER = 'Wanderer\'s Set',
  WANDERER2 = 's\'reredneW Set',
  UUG_RINGS = 'UUG Rings',
  HEART = 'Hearts',
  FOREST_PENDANT = 'Forest Pendants',
  LOOTY = 'Looty',
  OTHER = 'Other',
  EDGY = 'Edgy Set',
  PINK = 'Pretty Pink Princess Set',
  NERD = 'Greasy Nerd Set',
  META = 'Meta Set'
}


export const itemList = [

  {
    setName: SetName.TWO_D,
    items: [
      {
        name: 'A triangle', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 9200},
          {stat: Stat.TOUGHNESS, value: 600},
          {stat: Stat.ENERGY_BARS, value: 100},
          {stat: Stat.ENERGY_POWER, value: 90},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/99_-_A_Triangle.png',
      },
      {
        name: 'Circle Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 100},
          {stat: Stat.TOUGHNESS, value: 1200},
          {stat: Stat.ENERGY_BARS, value: 60},
          {stat: Stat.ENERGY_POWER, value: 190},
          {stat: Stat.WANDOOS_SPEED, value: 20},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/95_-_Circle_Helmet.png',
      },
      {
        name: 'Square Chestpiece', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 100},
          {stat: Stat.TOUGHNESS, value: 1290},
          {stat: Stat.ENERGY_BARS, value: 100},
          {stat: Stat.ENERGY_POWER, value: 100},
          {stat: Stat.MAGIC_POWER, value: 80},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/21/96_-_Square_Chestpiece.png',
      },
      {
        name: 'Rectangle Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 140},
          {stat: Stat.TOUGHNESS, value: 1520},
          {stat: Stat.ENERGY_CAP, value: 14},
          {stat: Stat.ENERGY_POWER, value: 100},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/97/97_-_Rectangle_Pants.png',
      },
      {
        name: 'Polygon Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 120},
          {stat: Stat.TOUGHNESS, value: 1400},
          {stat: Stat.ENERGY_BARS, value: 140},
          {stat: Stat.ENERGY_CAP, value: 10},
          {stat: Stat.ENERGY_POWER, value: 100},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/62/98_-_Polygon_Boots.png',
      },
      {
        name: 'THE CUBE', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 1300},
          {stat: Stat.TOUGHNESS, value: 1300},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/91/100_-_THE_CUBE.png',
      },
      {
        name: 'King Circle\'s Amulet of Helping Random Stuff', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.ADVANCE_TRAINING, value: 80},
          {stat: Stat.WANDOOS_SPEED, value: 60},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ed/101_-_King_Circle%27s_Amulet_of_Helping_Random_Stuff.png',
      },
    ],
  },
  {
    setName: SetName.BADLY_DRAWN,
    items: [
      {
        name: 'Badly Drawn Gun',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d8/168_-_Badly_Drawn_Gun.png/',
        stats: [
          {stat: Stat.POWER, value: 1000000},
          {stat: Stat.TOUGHNESS, value: 50000},
          {stat: Stat.AUGMENT_SPEED, value: 240},
          {stat: Stat.ENERGY_CAP, value: 120},
          {stat: Stat.MAGIC_CAP, value: 120},
          {stat: Stat.ENERGY_POWER, value: 1200},
          {stat: Stat.MAGIC_POWER, value: 1200},
        ],
      },
      {
        name: 'Badly Drawn Smiley Face',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3f/164_-_Badly_Drawn_Smiley_Face.png/',
        stats: [
          {stat: Stat.TOUGHNESS, value: 120000},
          {stat: Stat.ADVANCE_TRAINING, value: 320},
          {stat: Stat.ENERGY_BARS, value: 900},
          {stat: Stat.MAGIC_BARS, value: 900},
          {stat: Stat.GOLD_DROP, value: 1200},
        ],
      },
      {
        name: 'Badly Drawn Chest',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/76/165_-_Badly_Drawn_Chest.png/',
        stats: [
          {stat: Stat.TOUGHNESS, value: 120000},
          {stat: Stat.ENERGY_BARS, value: 900},
          {stat: Stat.MAGIC_BARS, value: 900},
          {stat: Stat.ENERGY_POWER, value: 2800},
          {stat: Stat.MAGIC_CAP, value: 270},
        ],
      },
      {
        name: 'Badly Drawn Pants',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/09/166_-_Badly_Drawn_Pants.png/',
        stats: [
          {stat: Stat.TOUGHNESS, value: 120000},
          {stat: Stat.ENERGY_CAP, value: 260},
          {stat: Stat.ENERGY_POWER, value: 800},
          {stat: Stat.MAGIC_BARS, value: 2800},
          {stat: Stat.MAGIC_POWER, value: 800},
        ],
      },
      {
        name: 'Badly Drawn Foot',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/17/167_-_Badly_Drawn_Foot.png/',
        stats: [
          {stat: Stat.TOUGHNESS, value: 120000},
          {stat: Stat.ENERGY_BARS, value: 2400},
          {stat: Stat.ENERGY_CAP, value: 80},
          {stat: Stat.MAGIC_CAP, value: 80},
          {stat: Stat.MAGIC_POWER, value: 2400},
        ],
      },

    ],
  },
  {
    setName: SetName.BEARDVERSE,
    items: [
      {
        name: 'Bearded Axe', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 140000},
          {stat: Stat.TOUGHNESS, value: 10000},
          {stat: Stat.BEARD_SPEED, value: 20},
          {stat: Stat.ENERGY_BARS, value: 440},
          {stat: Stat.MAGIC_BARS, value: 440},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/92/147_-_Bearded_Axe.png/',
      },
      {
        name: 'Groucho Marx Disguise', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 22000},
          {stat: Stat.ENERGY_POWER, value: 360},
          {stat: Stat.MAGIC_BARS, value: 480},
          {stat: Stat.MAGIC_CAP, value: 96},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c6/143_-_Groucho_Marx_Disguise.png/',
      },
      {
        name: 'Gossamer Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 22000},
          {stat: Stat.ENERGY_CAP, value: 120},
          {stat: Stat.MAGIC_CAP, value: 100},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/77/144_-_Gossamer_Chest.png/',
      },
      {
        name: 'Braided Beard Legs', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 22000},
          {stat: Stat.MAGIC_BARS, value: 460},
          {stat: Stat.MAGIC_CAP, value: 86},
          {stat: Stat.MAGIC_POWER, value: 560},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/145_-_Braided_Beard_Legs.png/',
      },
      {
        name: 'Fuzzy Orange Cheeto Slippers!', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 22000},
          {stat: Stat.ENERGY_BARS, value: 660},
          {stat: Stat.ENERGY_POWER, value: 440},
          {stat: Stat.ENERGY_CAP, value: 40},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cc/146_-_Fuzzy_Orange_Cheeto_Slippers%21.png/',
      },
    ],
  },
  {
    setName: SetName.HEART,
    items: [
      {
        name: 'Blue Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 840},
          {stat: Stat.TOUGHNESS, value: 840},
          {stat: Stat.GOLD_DROP, value: 200},
          {stat: Stat.NGU_SPEED, value: 80},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5c/196_-_My_Blue_Heart.png/',
      },
      {
        name: 'Brown Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.MAGIC_POWER, value: 100},
          {stat: Stat.ENERGY_POWER, value: 100},
          {stat: Stat.SEED_DROP, value: 70},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b4/162_-_My_Brown_Heart.png/',
      },
      {
        name: 'Green Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.BEARD_SPEED, value: 60},
          {stat: Stat.DROP_CHANCE, value: 100},
          {stat: Stat.RESPAWN, value: 8},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/14/171_-_My_Green_Heart.png/',
      },
      {
        name: 'Red Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.DROP_CHANCE, value: 60},
          {stat: Stat.EXPERIENCE, value: 10},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d8/119_-_My_Red_Heart.png/',
      },
      {
        name: 'Yellow Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.GOLD_DROP, value: 600},
          {stat: Stat.AP, value: 20},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/81/129_-_My_Yellow_Heart.png/',
      },
      {
        name: 'Orange Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.GOLD_DROP, value: 600},
          {stat: Stat.QUEST_DROP, value: 80},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/293_-_My_Orange_Heart.png',
      },

    ],
  },
  {
    setName: SetName.CAVE, items: [
      {
        name: 'Mole Hammer', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 400},
          {stat: Stat.ENERGY_BARS, value: 30},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/eb/58_-_Mole_Hammer.png/revision/latest?cb=20180330170742',
      },
      {
        name: 'Blue Cheese Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_POWER, value: 14},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3d/54_-_Blue_Cheese_Helmet.png/revision/latest?cb=20180330170526',
      },
      {
        name: 'Gouda Chestplate', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_POWER, value: 26},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/ba/55_-_Gouda_Chestplate.png/revision/latest?cb=20180330170605',
      },
      {
        name: 'Swiss Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_SPEED, value: 20},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/47/56_-_Swiss_Leggings.png/revision/latest?cb=20180330170641',
      },
      {
        name: 'Limburger Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_POWER, value: 20},
          {stat: Stat.MAGIC_SPEED, value: 20},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a3/57_-_Limburger_Boots.png/revision/latest?cb=20180330170712',
      },
      {
        name: 'Havarti Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 8},
          {stat: Stat.TOUGHNESS, value: 8},
          {stat: Stat.MAGIC_POWER, value: 50},
          {stat: Stat.MAGIC_SPEED, value: 50},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a1/59_-_Havarti_Ring.png/revision/latest?cb=20180330170813',
      },
      {
        name: 'Cheddar Amulet', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2},
          {stat: Stat.TOUGHNESS, value: 2},
          {stat: Stat.ENERGY_POWER, value: 60},
          {stat: Stat.ENERGY_SPEED, value: 120},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a2/60_-_Cheddar_Amulet.png/revision/latest?cb=20180330170844',
      },
      {
        name: 'Combat Cheese', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 60},
          {stat: Stat.TOUGHNESS, value: 60},
          {stat: Stat.GOLD_DROP, value: 20},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/61_-_Combat_Cheese.png/revision/latest?cb=20180330170916',
      },

    ],
  },
  {
    setName: SetName.CHOCO, items: [
      {
        name: 'Chocolate Crowbar',
        slot: Slot.WEAPON,
        stats: [
          {stat: Stat.POWER, value: 7600000},
          {stat: Stat.TOUGHNESS, value: 400000},
          {stat: Stat.ENERGY_BARS, value: 3600},
          {stat: Stat.ENERGY_POWER, value: 6000},
          {stat: Stat.MAGIC_BARS, value: 3600},
          {stat: Stat.MAGIC_CAP, value: 580},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/81/225_-_Chocolate_Crowbar.png/revision/latest?cb=20181205182402',
      },
      {
        name: 'Magic Bar Bar',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/88/227_-_Magic_Bar_Bar.png/revision/latest?cb=20181119175311',
        stats: [
          {stat: Stat.POWER, value: 100000},
          {stat: Stat.TOUGHNESS, value: 100000},
          {stat: Stat.MAGIC_BARS, value: 4400},
          {stat: Stat.MAGIC_CAP, value: 500},
          {stat: Stat.MAGIC_POWER, value: 6000},
        ],
      },
      {
        name: 'Energy Bar Bar',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f0/226_-_Energy_Bar_Bar.png/revision/latest?cb=20181201195523',
        stats: [
          {stat: Stat.POWER, value: 100000},
          {stat: Stat.TOUGHNESS, value: 100000},
          {stat: Stat.ENERGY_BARS, value: 4400},
          {stat: Stat.ENERGY_CAP, value: 500},
          {stat: Stat.ENERGY_POWER, value: 6000},
        ],
      },
      {
        name: 'Chocolate Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 60000},
          {stat: Stat.TOUGHNESS, value: 704000},
          {stat: Stat.ENERGY_POWER, value: 5200},
          {stat: Stat.MAGIC_BARS, value: 2800},
          {stat: Stat.MAGIC_CAP, value: 380},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e3/221_-_Chocolate_Helmet.png/revision/latest?cb=20181111154851',
      },
      {
        name: 'Chocolate Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.TOUGHNESS, value: 740000},
          {stat: Stat.ENERGY_CAP, value: 600},
          {stat: Stat.MAGIC_CAP, value: 600},
          {stat: Stat.ENERGY_POWER, value: 5800},
          {stat: Stat.MAGIC_POWER, value: 5800},
          {stat: Stat.MAGIC_BARS, value: 5000},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/89/222_-_Chocolate_Chest.png/revision/latest?cb=20181111153348',
      },
      {
        name: 'Chocolate Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.TOUGHNESS, value: 710000},
          {stat: Stat.ENERGY_BARS, value: 3400},
          {stat: Stat.ENERGY_CAP, value: 460},
          {stat: Stat.ENERGY_POWER, value: 5600},
          {stat: Stat.MAGIC_POWER, value: 5600},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b9/223_-_Chocolate_Pants.png/revision/latest?cb=20181111152501',
      },
      {
        name: 'Chocolate Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.TOUGHNESS, value: 732000},
          {stat: Stat.ENERGY_BARS, value: 6800},
          {stat: Stat.ENERGY_CAP, value: 680},
          {stat: Stat.ENERGY_POWER, value: 6800},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d7/224_-_Chocolate_Boots.png/revision/latest?cb=20181111153509',
      },
    ],
  },
  {
    setName: SetName.CLOCK, items: [
      {
        name: 'A Comically Oversized Minute-Hand',
        slot: Slot.WEAPON,
        stats: [
          {stat: Stat.POWER, value: 5000},
          {stat: Stat.TOUGHNESS, value: 160},
          {stat: Stat.MAGIC_BARS, value: 130},
          {stat: Stat.MAGIC_POWER, value: 100},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/53/89_-_A_Comically_Oversized_Minute-Hand.png/revision/latest?cb=20180330175633',
      },
      {
        name: 'Clockwork Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 60},
          {stat: Stat.TOUGHNESS, value: 860},
          {stat: Stat.MAGIC_CAP, value: 4},
          {stat: Stat.MAGIC_POWER, value: 60},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/85_-_Clockwork_Hat.png/revision/latest?cb=20180330175115',
      },
      {
        name: 'Clockwork Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 890},
          {stat: Stat.MAGIC_CAP, value: 6},
          {stat: Stat.MAGIC_POWER, value: 60},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b5/86_-_Clockwork_Chest.png/revision/latest?cb=20180330175413',
      },
      {
        name: 'Clockwork Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 1000},
          {stat: Stat.MAGIC_CAP, value: 6},
          {stat: Stat.MAGIC_POWER, value: 60},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d4/87_-_Clockwork_Pants.png/revision/latest?cb=20180330175444',
      },
      {
        name: 'Clockwork Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 1030},
          {stat: Stat.MAGIC_CAP, value: 6},
          {stat: Stat.MAGIC_POWER, value: 60},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/41/88_-_Clockwork_Boots.png/revision/latest?cb=20180330175513',
      },
      {
        name: 'Alarm Clock', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 900},
          {stat: Stat.TOUGHNESS, value: 900},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/08/90_-_Alarm_Clock.png/revision/latest?cb=20180330175706',
      },
      {
        name: 'The Sands of Time', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.MOVE_COOLDOWN, value: 20},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1f/91_-_The_Sands_of_Time.png/revision/latest?cb=20180330175744',
      },
    ],
  },
  {
    setName: SetName.FOREST, items: [
      {
        name: 'Kokiri Blade', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.ENERGY_POWER, value: 20},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/72/51_-_Kokiri_Blade.png/revision/latest?cb=20180330170353',
      },
      {
        name: 'Forest Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 20},
          {stat: Stat.ENERGY_POWER, value: 20},
          {stat: Stat.ENERGY_SPEED, value: 24},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f3/47_-_Forest_Helmet.png/revision/latest?cb=20180330170139',
      },
      {
        name: 'Forest Chestplate', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 40},
          {stat: Stat.ENERGY_POWER, value: 24},
          {stat: Stat.ENERGY_SPEED, value: 16},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1b/48_-_Forest_Chestplate.png/revision/latest?cb=20180330170217',
      },
      {
        name: 'Forest Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 40},
          {stat: Stat.ENERGY_SPEED, value: 16},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/79/49_-_Forest_Leggings.png/revision/latest?cb=20180330170250',
      },
      {
        name: 'Forest Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 40},
          {stat: Stat.ENERGY_POWER, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7e/50_-_Forest_Boots.png/revision/latest?cb=20180330170315',
      },
      {
        name: 'Mossy Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 16},
          {stat: Stat.TOUGHNESS, value: 16},
          {stat: Stat.ENERGY_SPEED, value: 40},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/62/52_-_Mossy_Ring.png/revision/latest?cb=20180330170421',
      },
    ],
  },
  {
    setName: SetName.GAUDY, items: [
      {
        name: 'Paper Fan', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 38000},
          {stat: Stat.MAGIC_BARS, value: 200},
          {stat: Stat.MAGIC_POWER, value: 260},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/95/126_-_Paper_Fan.png/revision/latest?cb=20180420183017',
      },
      {
        name: 'Gaudy Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 560},
          {stat: Stat.TOUGHNESS, value: 4800},
          {stat: Stat.ENERGY_BARS, value: 120},
          {stat: Stat.MAGIC_BARS, value: 120},

        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a3/122_-_Gaudy_Hat.png/revision/latest?cb=20180420182814',
      },
      {
        name: 'Gaudy Shirt', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 500},
          {stat: Stat.TOUGHNESS, value: 4800},
          {stat: Stat.ENERGY_CAP, value: 76},
          {stat: Stat.ENERGY_POWER, value: 192},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6b/123_-_Gaudy_Shirt.png/revision/latest?cb=20180420182843',
      },
      {
        name: 'Gaudy Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 5000},
          {stat: Stat.ENERGY_CAP, value: 72},
          {stat: Stat.ENERGY_POWER, value: 180},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/73/124_-_Gaudy_Pants.png/revision/latest?cb=20180420182911',
      },
      {
        name: 'Gaudy Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 400},
          {stat: Stat.TOUGHNESS, value: 4600},
          {stat: Stat.MAGIC_POWER, value: 240},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/36/125_-_Gaudy_Boots.png/revision/latest?cb=20180420182946',
      },

    ],
  },
  {
    setName: SetName.GRB, items: [
      {
        name: 'Bloody Cleaver', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 160},
          {stat: Stat.ENERGY_BARS, value: 130},
          {stat: Stat.ENERGY_POWER, value: 90},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/82_-_Bloody_Cleaver.png/revision/latest?cb=20180330174836',
      },
      {
        name: 'Chef\'s Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 500},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/db/78_-_Chef%27s_Hat.png/revision/latest?cb=20180330173229',
      },
      {
        name: 'Chef\'s Apron', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/0f/79_-_Chef%27s_Apron.png/revision/latest?cb=20180330173300',
      },
      {
        name: 'Regular Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 130},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/86/80_-_Regular_Pants.png/revision/latest?cb=20180330173331',
      },
      {
        name: 'Non Slip Shoes', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 130},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5d/81_-_Non_Slip_Shoes.png/revision/latest?cb=20180330173412',
      },
      {
        name: 'Suspicious Sausage Necklace',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.POWER, value: 500},
          {stat: Stat.TOUGHNESS, value: 500},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a8/83_-_Suspicious_Sausage_Necklace.png/revision/latest?cb=20180330174914',
      },
      {
        name: 'Raw Slab of Meat', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.ENERGY_CAP, value: 10},
          {stat: Stat.ENERGY_POWER, value: 140},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2e/84_-_Raw_Slab_of_Meat.png/revision/latest?cb=20180330175016',
      },

    ],
  },
  {
    setName: SetName.HSB, items: [
      {
        name: 'Magitech Blade', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 1000},
          {stat: Stat.ENERGY_CAP, value: 12},
          {stat: Stat.GOLD_DROP, value: 40},
          {stat: Stat.MAGIC_CAP, value: 8},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d1/72_-_Magitech_Blade.png/revision/latest?cb=20180330172657',
      },
      {
        name: 'Magitech Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 250},
          {stat: Stat.ENERGY_BARS, value: 50},
          {stat: Stat.MAGIC_BARS, value: 30},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/68_-_Magitech_Helmet.png/revision/latest?cb=20180330171306',
      },
      {
        name: 'Magitech Chestplate',
        slot: Slot.CHEST,
        stats: [
          {stat: Stat.TOUGHNESS, value: 250},
          {stat: Stat.ENERGY_BARS, value: 30},
          {stat: Stat.MAGIC_SPEED, value: 40},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7e/69_-_Magitech_Chestplate.png/revision/latest?cb=20180330172412',
      },
      {
        name: 'Magitech Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 250},
          {stat: Stat.MAGIC_BARS, value: 40},
          {stat: Stat.MAGIC_POWER, value: 20},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d2/70_-_Magitech_Leggings.png/revision/latest?cb=20180330172456',
      },
      {
        name: 'Magitech Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 250},
          {stat: Stat.ENERGY_POWER, value: 50},
          {stat: Stat.MAGIC_POWER, value: 30},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6f/71_-_Magitech_Boots.png/revision/latest?cb=20180330172551',
      },
      {
        name: 'Magitech Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 90},
          {stat: Stat.TOUGHNESS, value: 90},
          {stat: Stat.MAGIC_POWER, value: 80},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b8/73_-_Magitech_Ring.png/revision/latest?cb=20180330172727',
      },
      {
        name: 'Magitech Amulet', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.ENERGY_CAP, value: 1.8},
          {stat: Stat.ENERGY_POWER, value: 60},
          {stat: Stat.GOLD_DROP, value: 40},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a0/74_-_Magitech_Amulet.png/revision/latest?cb=20180330172750',
      },

    ],
  },
  {
    setName: SetName.JAKE, items: [
      {
        name: 'The Pen-Is', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 23000},
          {stat: Stat.MAGIC_CAP, value: 47.12},
          {stat: Stat.MAGIC_POWER, value: 176.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/dd/115_-_The_Pen-Is.png/revision/latest?cb=20180420182614',
      },
      {
        name: 'Office Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2600},
          {stat: Stat.ENERGY_CAP, value: 31.64},
          {stat: Stat.ENERGY_POWER, value: 216.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/111_-_Office_Hat.png/revision/latest?cb=20180420182341',
      },
      {
        name: 'Office Shirt', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 158.6},
          {stat: Stat.TOUGHNESS, value: 2499},
          {stat: Stat.ENERGY_CAP, value: 61.62},
          {stat: Stat.ENERGY_POWER, value: 156.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/61/112_-_Office_Shirt.png/revision/latest?cb=20180420182433',
      },
      {
        name: 'Office Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2798},
          {stat: Stat.ENERGY_CAP, value: 57.64},
          {stat: Stat.ENERGY_POWER, value: 116.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e4/113_-_Office_Pants.png/revision/latest?cb=20180514101206',
      },
      {
        name: 'Office Shoes', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2600},
          {stat: Stat.ENERGY_POWER, value: 336.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1e/114_-_Office_Shoes.png/revision/latest?cb=20180420182540',
      },
      {
        name: 'A Regular Tie', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.TOUGHNESS, value: 163},
          {stat: Stat.GOLD_DROP, value: 400},
          {stat: Stat.MAGIC_POWER, value: 216.24},
          {stat: Stat.NGU_SPEED, value: 120},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f5/116_-_A_Regular_Tie.png/revision/latest?cb=20180420182645',
      },
      {
        name: 'Generic Paperweight',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.POWER, value: 2900},
          {stat: Stat.TOUGHNESS, value: 2900},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1d/117_-_Generic_Paperweight.png/revision/latest?cb=20180420182714',
      },

    ],
  },
  {
    setName: SetName.MEGA, items: [
      {
        name: 'Beam Laser Sword', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 86000},
          {stat: Stat.ENERGY_POWER, value: 280},
          {stat: Stat.ENERGY_CAP, value: 40},
          {stat: Stat.ENERGY_BARS, value: 200},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fb/134_-_Beam_Laser_Sword.png/revision/latest?cb=20180420183306',
      },
      {
        name: 'Mega Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 11000},
          {stat: Stat.ENERGY_POWER, value: 440},
          {stat: Stat.MAGIC_POWER, value: 440},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e1/130_-_Mega_Helmet.png/revision/latest?cb=20180420183116',
      },
      {
        name: 'Mega Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 11200},
          {stat: Stat.ENERGY_BARS, value: 320},
          {stat: Stat.MAGIC_BARS, value: 320},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/90/131_-_Mega_Chest.png/revision/latest?cb=20180420183142',
      },
      {
        name: 'Mega Blue Jeans', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 11200},
          {stat: Stat.ENERGY_CAP, value: 90},
          {stat: Stat.MAGIC_CAP, value: 90},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/da/132_-_Mega_Blue_Jeans.png/revision/latest?cb=20180420183213',
      },
      {
        name: 'Mega Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 0},
          {stat: Stat.TOUGHNESS, value: 0},
          {stat: Stat.MAGIC_BARS, value: 290},
          {stat: Stat.MAGIC_POWER, value: 280},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/07/133_-_Mega_Boots.png/revision/latest?cb=20180420183238',
      },
    ],
  },
  {
    setName: SetName.SEWERS, items: [
      {
        name: 'Rusty Sword', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 40},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/55/44_-_Rusty_Sword.png/revision/latest?cb=20180330165424',
      },
      {
        name: 'Crappy Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/28/40_-_Crappy_Helmet.png/revision/latest?cb=20180330165208',
      },
      {
        name: 'Crappy Chestplate', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/41_-_Crappy_Chestplate.png/revision/latest?cb=20180330165241',
      },
      {
        name: 'Crappy Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/23/42_-_Crappy_Leggings.png/revision/latest?cb=20180330165315',
      },
      {
        name: 'Crappy Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/05/43_-_Crappy_Boots.png/revision/latest?cb=20180330165354',
      },
      {
        name: 'Gross Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2},
          {stat: Stat.TOUGHNESS, value: 2},
          {stat: Stat.ENERGY_SPEED, value: 40},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5f/45_-_Gross_Ring.png/revision/latest?cb=20180330165521',
      },
      {
        name: 'Cracked Amulet', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 10},
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4a/46_-_Cracked_Amulet.png/revision/latest?cb=20180330165554',
      },

    ],
  },
  {
    setName: SetName.SLIMY, items: [
      {
        name: 'The Fists of Flubber',
        slot: Slot.WEAPON,
        stats: [
          {stat: Stat.POWER, value: 4400000},
          {stat: Stat.TOUGHNESS, value: 200000},
          {stat: Stat.MAGIC_POWER, value: 4000},
          {stat: Stat.MAGIC_CAP, value: 400},
          {stat: Stat.MAGIC_BARS, value: 2400},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5c/188_-_The_Fists_of_Flubber.png/revision/latest?cb=20180902075731',
      },
      {
        name: 'A Bald Egg',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/04/189_-_A_Bald_Egg.png/revision/latest?cb=20180902075731',
        stats: [
          {stat: Stat.POWER, value: 66666},
          {stat: Stat.TOUGHNESS, value: 66666},
          {stat: Stat.ENERGY_CAP, value: 300},
          {stat: Stat.MAGIC_CAP, value: 300},
          {stat: Stat.WANDOOS_SPEED, value: 400},
        ],
      },
      {
        name: 'A Giant Apple',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4b/193_-_A_Giant_Apple.png/revision/latest?cb=20180903174820',
        stats: [
          {stat: Stat.POWER, value: 100000},
          {stat: Stat.TOUGHNESS, value: 100000},
          {stat: Stat.SEED_DROP, value: 100},
          {stat: Stat.YGGDRASIL_YIELD, value: 20},
        ],
      },
      {
        name: 'A Power Pill',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3d/194_-_A_Power_Pill.png/revision/latest?cb=20180902075732',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_POWER, value: 6000},
          {stat: Stat.ENERGY_CAP, value: 600},
          {stat: Stat.ENERGY_BARS, value: 6000},
          {stat: Stat.MAGIC_POWER, value: 6000},
          {stat: Stat.MAGIC_CAP, value: 600},
          {stat: Stat.MAGIC_BARS, value: 6000},
        ],
      },
      {
        name: 'A Priceless Van-Gogh Painting',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/95/192_-_A_Priceless_Van-Gogh_Painting.png/revision/latest?cb=20180907141342',
        stats: [
          {stat: Stat.POWER, value: 60000},
          {stat: Stat.TOUGHNESS, value: 60000},
          {stat: Stat.ENERGY_CAP, value: 400},
          {stat: Stat.MAGIC_CAP, value: 400},
          {stat: Stat.GOLD_DROP, value: 6000},
        ],
      },
      {
        name: 'A Shrunken Voodoo Doll',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/20/190_-_A_Shrunken_Voodoo_Doll.png/revision/latest?cb=20180907140324',
        stats: [
          {stat: Stat.POWER, value: 133332},
          {stat: Stat.TOUGHNESS, value: 133332},
          {stat: Stat.BEARD_SPEED, value: 400},
          {stat: Stat.NGU_SPEED, value: 400},
        ],
      },
      {
        name: 'A Small Gerbil',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/12/195_-_A_Small_Gerbil.png/revision/latest?cb=20180902075732',
        stats: [
          {stat: Stat.POWER, value: 200000},
          {stat: Stat.TOUGHNESS, value: 200000},
          {stat: Stat.ENERGY_POWER, value: 12000},
          {stat: Stat.MAGIC_CAP, value: 1200},
          {stat: Stat.MAGIC_POWER, value: 12000},
        ],
      },
      {
        name: 'Slimy Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 22000},
          {stat: Stat.TOUGHNESS, value: 484000},
          {stat: Stat.ENERGY_POWER, value: 2800},
          {stat: Stat.MAGIC_BARS, value: 2000},
          {stat: Stat.MAGIC_CAP, value: 300},
          {stat: Stat.MAGIC_POWER, value: 2800},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/46/184_-_Slimy_Helmet.png/revision/latest?cb=20180902075728',
      },
      {
        name: 'Slimy Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 22000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_BARS, value: 2400},
          {stat: Stat.ENERGY_CAP, value: 300},
          {stat: Stat.MAGIC_CAP, value: 300},
          {stat: Stat.MAGIC_POWER, value: 2800},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/41/185_-_Slimy_Chest.png/revision/latest?cb=20180902075729',
      },
      {
        name: 'Slimy Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 20000},
          {stat: Stat.TOUGHNESS, value: 490000},
          {stat: Stat.ENERGY_POWER, value: 2600},
          {stat: Stat.ENERGY_CAP, value: 320},
          {stat: Stat.ENERGY_BARS, value: 2000},
          {stat: Stat.MAGIC_BARS, value: 2000},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/186_-_Slimy_Pants.png/revision/latest?cb=20180902075730',
      },
      {
        name: 'Slimy Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 20000},
          {stat: Stat.TOUGHNESS, value: 480000},
          {stat: Stat.ENERGY_POWER, value: 2800},
          {stat: Stat.ENERGY_CAP, value: 280},
          {stat: Stat.ENERGY_BARS, value: 2800},
          {stat: Stat.MAGIC_POWER, value: 2800},
          {stat: Stat.MAGIC_CAP, value: 280},
          {stat: Stat.MAGIC_BARS, value: 2800},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cc/187_-_Slimy_Boots.png/revision/latest?cb=20180902075730',
      },
    ],
  },
  {
    setName: SetName.SPOOPY, items: [
      {
        name: 'Spooky Sword', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 17776},
          {stat: Stat.TOUGHNESS, value: 600},
          {stat: Stat.ENERGY_POWER, value: 170},
          {stat: Stat.MAGIC_POWER, value: 220},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/107_-_Spooky_Sword.png/revision/latest?cb=20180421191854',
      },
      {
        name: 'Spoopy Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 100},
          {stat: Stat.TOUGHNESS, value: 2000},
          {stat: Stat.ENERGY_CAP, value: 20.6},
          {stat: Stat.MAGIC_CAP, value: 21},
          {stat: Stat.MAGIC_POWER, value: 150},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/af/103_-_Spoopy_Helmet.png/revision/latest?cb=20180421191559',
      },
      {
        name: 'Ghostly Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2070},
          {stat: Stat.ENERGY_CAP, value: 22},
          {stat: Stat.MAGIC_CAP, value: 23},
          {stat: Stat.MAGIC_POWER, value: 80},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/13/104_-_Ghostly_Chest.png/revision/latest?cb=20180421191727',
      },
      {
        name: 'Pants of Horror', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 140},
          {stat: Stat.TOUGHNESS, value: 2120},
          {stat: Stat.ENERGY_CAP, value: 28},
          {stat: Stat.MAGIC_BARS, value: 80},
          {stat: Stat.MAGIC_CAP, value: 24},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/58/105_-_Pants_of_Horror.png/revision/latest?cb=20180421191753',
      },
      {
        name: 'Spectral Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 120},
          {stat: Stat.TOUGHNESS, value: 2180},
          {stat: Stat.ENERGY_CAP, value: 10},
          {stat: Stat.ENERGY_POWER, value: 100},
          {stat: Stat.MAGIC_CAP, value: 18},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fc/106_-_Spectral_Boots.png/revision/latest?cb=20180421191823',
      },
      {
        name: 'Cursed Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2100},
          {stat: Stat.TOUGHNESS, value: 2100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9d/108_-_Cursed_Ring.png/revision/latest?cb=20180421191922',
      },
      {
        name: 'Amulet of Sunshine, Sparkles and Gore',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.ENERGY_POWER, value: 200},
          {stat: Stat.MAGIC_POWER, value: 200},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3e/109_-_Amulet_of_Sunshine%2C_Sparkles_and_Gore.png/revision/latest?cb=20180420182230',
      },

    ],
  },
  {
    setName: SetName.STEALTH, items: [
      {
        name: 'A Giant Bazooka', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 2200000},
          {stat: Stat.TOUGHNESS, value: 120000},
          {stat: Stat.ENERGY_POWER, value: 2400},
          {stat: Stat.ENERGY_CAP, value: 240},
          {stat: Stat.MAGIC_POWER, value: 2400},
          {stat: Stat.MAGIC_CAP, value: 240},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/be/177_-_A_Giant_Bazooka.png/revision/latest?cb=20180805092859',
      },
      {
        name: 'Stealthy Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 10000},
          {stat: Stat.TOUGHNESS, value: 224000},
          {stat: Stat.ENERGY_POWER, value: 2400},
          {stat: Stat.ENERGY_CAP, value: 350},
          {stat: Stat.MAGIC_CAP, value: 170},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/173_-_Stealthy_Hat.png/revision/latest?cb=20180805092445',
      },
      {
        name: 'Stealthy Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 10000},
          {stat: Stat.TOUGHNESS, value: 230000},
          {stat: Stat.ENERGY_POWER, value: 1800},
          {stat: Stat.ENERGY_BARS, value: 1600},
          {stat: Stat.MAGIC_POWER, value: 1800},
          {stat: Stat.MAGIC_BARS, value: 3800},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7a/174_-_Stealthy_Chest.png/revision/latest?cb=20180805092615',
      },
      {
        name: 'No Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 10000},
          {stat: Stat.TOUGHNESS, value: 236000},
          {stat: Stat.ENERGY_POWER, value: 3500},
          {stat: Stat.MAGIC_POWER, value: 900},
          {stat: Stat.MAGIC_BARS, value: 2000},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/28/175_-_No_Pants.png/revision/latest?cb=20180805092716',
      },
      {
        name: 'High Heeled Boots',
        slot: Slot.BOOTS,
        stats: [
          {stat: Stat.POWER, value: 10000},
          {stat: Stat.TOUGHNESS, value: 244000},
          {stat: Stat.ENERGY_CAP, value: 400},
          {stat: Stat.MAGIC_POWER, value: 2800},
          {stat: Stat.MAGIC_CAP, value: 120},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cb/176_-_High_Heeled_Boots.png/revision/latest?cb=20180805092811',
      },

    ],
  },
  {
    setName: SetName.TRAINING, items: [
      {
        name: 'A Stick', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 6},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f6/75_-_A_Stick.png/revision/latest?cb=20180330172932',
      },
      {
        name: 'Cloth Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/86/62_-_Cloth_Hat.png/revision/latest?cb=20180330170954',
      },
      {
        name: 'Cloth Shirt', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/53/63_-_Cloth_Shirt.png/revision/latest?cb=20180330171023',
      },
      {
        name: 'Cloth Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/64_-_Cloth_Leggings.png/revision/latest?cb=20180330171051',
      },
      {
        name: 'Cloth Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cd/65_-_Cloth_Boots.png/revision/latest?cb=20180330171113',
      },
    ],
  },
  {
    setName: SetName.UUG_RINGS, items: [
      {
        name: 'Ring of Greed', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.DROP_CHANCE, value: 120},
          {stat: Stat.GOLD_DROP, value: 1600},
          {stat: Stat.RESPAWN, value: 16},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cf/136_-_Ring_of_Greed.png/revision/latest?cb=20180420183403',
      },
      {
        name: 'UUG\'s \'Special\' Ring',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.POWER, value: 20000},
          {stat: Stat.TOUGHNESS, value: 20000},
          {stat: Stat.BEARD_SPEED, value: 1600},
          {stat: Stat.NGU_SPEED, value: 200},
          {stat: Stat.SEED_DROP, value: 30},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/dc/149_-_UUG%27s_%27Special%27_Ring.png/revision/latest?cb=20180601090251',
      },
      {
        name: 'Ring of Might', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 13332},
          {stat: Stat.TOUGHNESS, value: 13332},
          {stat: Stat.MOVE_COOLDOWN, value: 20},
          {stat: Stat.RESPAWN, value: 4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f0/137_-_Ring_of_Might.png/revision/latest?cb=20180420183425',
      },
      {
        name: 'Ring of Utility', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 2000},
          {stat: Stat.ADVANCE_TRAINING, value: 100},
          {stat: Stat.NGU_SPEED, value: 100},
          {stat: Stat.WANDOOS_SPEED, value: 100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c0/138_-_Ring_of_Utility.png/revision/latest?cb=20180420183453',
      },
      {
        name: 'Ring of Way Too Much Energy',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 2000},
          {stat: Stat.ENERGY_POWER, value: 500},
          {stat: Stat.ENERGY_CAP, value: 80},
          {stat: Stat.ENERGY_BARS, value: 240},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/139_-_Ring_of_Way_Too_Much_Energy.png/revision/latest?cb=20180420183518',
      },
      {
        name: 'Ring of Way Too Much Magic',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 2000},
          {stat: Stat.MAGIC_POWER, value: 500},
          {stat: Stat.MAGIC_CAP, value: 80},
          {stat: Stat.MAGIC_BARS, value: 240},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/68/140_-_Ring_of_Way_Too_Much_Magic.png/revision/latest?cb=20180420183555',
      },

    ],
  },
  {
    setName: SetName.WANDERER, items: [
      {
        name: 'Wanderer\'s Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 42000},
          {stat: Stat.ENERGY_CAP, value: 170},
          {stat: Stat.ENERGY_POWER, value: 1500},
          {stat: Stat.MAGIC_POWER, value: 400},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/10/150_-_Wanderer%27s_Hat.png/revision/latest?cb=20180619095346',
      },
      {
        name: 'Wanderer\'s Chest',
        slot: Slot.CHEST,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 44000},
          {stat: Stat.ENERGY_BARS, value: 1200},
          {stat: Stat.ENERGY_POWER, value: 1600},
          {stat: Stat.MAGIC_CAP, value: 60},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/90/151_-_Wanderer%27s_Chest.png/revision/latest?cb=20180619094826',
      },
      {
        name: 'Wanderer\'s Pants',
        slot: Slot.PANTS,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 46000},
          {stat: Stat.ENERGY_BARS, value: 1600},
          {stat: Stat.ENERGY_CAP, value: 170},
          {stat: Stat.MAGIC_BARS, value: 400},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2d/152_-_Wanderer%27s_Pants.png/revision/latest?cb=20180619103043',
      },
      {
        name: 'Wanderer\'s Boots',
        slot: Slot.BOOTS,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 48000},
          {stat: Stat.NGU_SPEED, value: 120},
          {stat: Stat.WANDOOS_SPEED, value: 260},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/35/153_-_Wanderer%27s_Boots.png/revision/latest?cb=20180619091715',
      },
    ],
  },
  {
    setName: SetName.WANDERER2, items: [
      {
        name: 'taH s\'rerednaW', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 42000},
          {stat: Stat.ENERGY_POWER, value: 400},
          {stat: Stat.MAGIC_CAP, value: 170},
          {stat: Stat.MAGIC_POWER, value: 1500},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c7/155_-_taH_s%27rerednaW.png/revision/latest?cb=20180619083814',
      },
      {
        name: 'tsehC s\'rerednaW',
        slot: Slot.CHEST,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 44000},
          {stat: Stat.ENERGY_CAP, value: 60},
          {stat: Stat.MAGIC_BARS, value: 1200},
          {stat: Stat.MAGIC_POWER, value: 1600},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/0d/156_-_tsehC_s%27rerednaW.png/revision/latest?cb=20180619083038',
      },
      {
        name: 'stnaP s\'rerednaW',
        slot: Slot.PANTS,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 46000},
          {stat: Stat.ENERGY_BARS, value: 400},
          {stat: Stat.MAGIC_BARS, value: 1600},
          {stat: Stat.MAGIC_CAP, value: 170},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f5/157_-_stnaP_s%27rerednaW.png/revision/latest?cb=20180619075904',
      },
      {
        name: 'stooB s\'rerednaW',
        slot: Slot.BOOTS,
        stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 48000},
          {stat: Stat.BEARD_SPEED, value: 80},
          {stat: Stat.SEED_DROP, value: 60},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/158_-_stooB_s%27rerednaW.png/revision/latest?cb=20180619081719',
      },
    ],
  },
  {
    setName: SetName.FOREST_PENDANT,
    items: [
      {
        name: 'Forest Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5f/53_-_Forest_Pendant.png/revision/latest?cb=20180330170456',
        stats: [],
      },
      {
        name: 'Ascended Forest Pendant',
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d8/76_-_Ascended_Forest_Pendant.png/revision/latest?cb=20180330173013',
        stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.DROP_CHANCE, value: 40},
          {stat: Stat.GOLD_DROP, value: 400},
        ], slot: Slot.ACCESSORY,
      },
      {
        name: 'Ascended Ascended Forest Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3a/94_-_Ascended_Ascended_Forest_Pendant.png/revision/latest?cb=20180513161430',
        stats: [
          {stat: Stat.POWER, value: 1600},
          {stat: Stat.TOUGHNESS, value: 1600},
          {stat: Stat.DROP_CHANCE, value: 80},
          {stat: Stat.GOLD_DROP, value: 800},
          {stat: Stat.MAGIC_POWER, value: 200},
        ],
      },
      {
        name: 'Ascended Ascended Ascended Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/49/142_-_Ascended_Ascended_Ascended_Pendant.png/revision/latest?cb=20180516205139',
        stats: [
          {stat: Stat.POWER, value: 80000},
          {stat: Stat.TOUGHNESS, value: 80000},
          {stat: Stat.DROP_CHANCE, value: 200},
          {stat: Stat.GOLD_DROP, value: 1600},
          {stat: Stat.ENERGY_POWER, value: 540},
        ],
      },
      {
        name: 'Ascended x4 Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/170_-_Ascended_x4_Pendant.png/revision/latest?cb=20180729135209',
        stats: [
          {stat: Stat.POWER, value: 200000},
          {stat: Stat.TOUGHNESS, value: 200000},
          {stat: Stat.BEARD_SPEED, value: 200},
          {stat: Stat.ENERGY_POWER, value: 3000},
          {stat: Stat.MAGIC_POWER, value: 3000},
          {stat: Stat.MAGIC_CAP, value: 150},
          {stat: Stat.ENERGY_CAP, value: 150},
        ],
      },
      {
        name: 'Ascended x5 Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/34/229_-_Ascended_x5_Pendant.png/revision/latest?cb=20181121154953',
        stats: [
          {stat: Stat.POWER, value: 800000},
          {stat: Stat.TOUGHNESS, value: 800000},
          {stat: Stat.NGU_SPEED, value: 500},
          {stat: Stat.ENERGY_POWER, value: 10000},
          {stat: Stat.MAGIC_POWER, value: 10000},
          {stat: Stat.MAGIC_CAP, value: 1000},
          {stat: Stat.ENERGY_CAP, value: 1000},
        ],
      },
    ],
  },
  {
    setName: SetName.LOOTY, items: [
      {
        name: 'Looty McLootFace',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/22/67_-_Looty_McLootFace.png/revision/latest?cb=20180330171226',
        stats: [
          {stat: Stat.POWER, value: 4},
          {stat: Stat.TOUGHNESS, value: 4},
          {stat: Stat.DROP_CHANCE, value: 20},
        ],
      },
      {
        name: 'Sir Looty McLootington III, Esquire',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fd/128_-_Sir_Looty_McLootington_III%2C_Esquire.png/revision/latest?cb=20180409134100',
        stats: [
          {stat: Stat.POWER, value: 400},
          {stat: Stat.TOUGHNESS, value: 400},
          {stat: Stat.DROP_CHANCE, value: 80},
          {stat: Stat.ENERGY_POWER, value: 200},
          {stat: Stat.MAGIC_POWER, value: 200},
        ],
      },
      {
        name: 'King Looty',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/169_-_King_Looty.png/revision/latest?cb=20180706092451',
        stats: [
          {stat: Stat.POWER, value: 200000},
          {stat: Stat.TOUGHNESS, value: 200000},
          {stat: Stat.DROP_CHANCE, value: 200},
          {stat: Stat.ENERGY_POWER, value: 800},
          {stat: Stat.MAGIC_POWER, value: 800},
          {stat: Stat.ENERGY_CAP, value: 80},
          {stat: Stat.MAGIC_CAP, value: 80},
        ],
      },
      {
        name: 'Emperor Looty',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/14/230_-_Emperor_Looty.png/revision/latest?cb=20181121155138',
        stats: [
          {stat: Stat.POWER, value: 600000},
          {stat: Stat.TOUGHNESS, value: 600000},
          {stat: Stat.DROP_CHANCE, value: 600},
          {stat: Stat.ENERGY_POWER, value: 3000},
          {stat: Stat.MAGIC_POWER, value: 3000},
          {stat: Stat.ENERGY_CAP, value: 300},
          {stat: Stat.MAGIC_CAP, value: 300},
        ],
      },
    ],
  },
  {
    setName: SetName.OTHER,
    items: [

      {
        name: 'An Infinitely Long Strand of Beard Hair',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e5/148_-_An_Infinitely_Long_Strand_of_Beard_Hair.png/revision/latest?cb=20180730130833',
        stats: [
          {stat: Stat.POWER, value: 16000},
          {stat: Stat.TOUGHNESS, value: 16000},
          {stat: Stat.BEARD_SPEED, value: 20},
          {stat: Stat.ENERGY_POWER, value: 900},
          {stat: Stat.MAGIC_POWER, value: 700},
        ],
      },
      {
        name: 'Dorky Glasses',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ec/161_-_Dorky_Glasses.png/revision/latest?cb=20180619111717',
        stats: [
          {stat: Stat.POWER, value: 10000},
          {stat: Stat.TOUGHNESS, value: 10000},
          {stat: Stat.ENERGY_BARS, value: 1000},
          {stat: Stat.MAGIC_BARS, value: 1000},
          {stat: Stat.NGU_SPEED, value: 300},
          {stat: Stat.WANDOOS_SPEED, value: 240},
        ],
      },
      {
        name: 'Dragon Wings',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f0/110_-_Dragon_Wings.png/revision/latest?cb=20180420182304',
        stats: [
          {stat: Stat.POWER, value: 163},
          {stat: Stat.TOUGHNESS, value: 163},
          {stat: Stat.GOLD_DROP, value: 400},
          {stat: Stat.MAGIC_CAP, value: 45.64},
          {stat: Stat.MAGIC_POWER, value: 216.2},
        ],
      },

      {
        name: 'Fanny Pack',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8d/160_-_Fanny_Pack.png/revision/latest?cb=20180619111636',
        stats: [
          {stat: Stat.POWER, value: 30000},
          {stat: Stat.TOUGHNESS, value: 30000},
          {stat: Stat.DROP_CHANCE, value: 60},
          {stat: Stat.ENERGY_CAP, value: 60},
          {stat: Stat.MAGIC_CAP, value: 60},
          {stat: Stat.ENERGY_POWER, value: 1000},
          {stat: Stat.MAGIC_POWER, value: 1000},
        ],
      },

      {
        name: 'Stapler',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a9/118_-_Stapler.png/revision/latest?cb=20180420182738',
        stats: [
          {stat: Stat.POWER, value: 500},
          {stat: Stat.ENERGY_CAP, value: 60},
          {stat: Stat.RESPAWN, value: 12},
        ],
      },
      {
        name: 'The Triple Flubber',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/121_-_The_Triple_Flubber.png/revision/latest?cb=20180402160149',
        stats: [
          {stat: Stat.RESPAWN, value: 8},
        ],
      },
      {
        name: 'The Stealthiest Armour',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/178_-_The_Stealthiest_Armour.png/revision/latest?cb=20180805093107',
        stats: [
          {stat: Stat.POWER, value: 16000},
          {stat: Stat.TOUGHNESS, value: 300000},
          {stat: Stat.ENERGY_BARS, value: 4000},
          {stat: Stat.ENERGY_CAP, value: 420},
          {stat: Stat.MAGIC_BARS, value: 4000},
          {stat: Stat.MAGIC_CAP, value: 420},
          {stat: Stat.NGU_SPEED, value: 400},
        ],
      },
      {
        name: 'A Beanie',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b7/127_-_A_Beanie.png/revision/latest?cb=20180420183047',
        stats: [
          {stat: Stat.POWER, value: 4000},
          {stat: Stat.TOUGHNESS, value: 6000},
          {stat: Stat.MAGIC_CAP, value: 106},
          {stat: Stat.MAGIC_POWER, value: 359.8},
        ],
      },
    ],
  },
  {
    setName: SetName.EDGY, items: [
      {
        name: 'Edgy Chest',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/214_-_Edgy_Chest.png/revision/latest?cb=20181111161316',
        stats: [
          {stat: Stat.POWER, value: 60000},
          {stat: Stat.TOUGHNESS, value: 1080000},
          {stat: Stat.ENERGY_CAP, value: 920},
          {stat: Stat.ENERGY_POWER, value: 8200},
          {stat: Stat.MAGIC_BARS, value: 7400},
          {stat: Stat.MAGIC_CAP, value: 920},
          {stat: Stat.MAGIC_POWER, value: 8200},
        ],
      },
      {
        name: 'Edgy Helmet',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/93/213_-_Edgy_Helmet.png/revision/latest?cb=20181203091607',
        stats: [
          {stat: Stat.POWER, value: 80000},
          {stat: Stat.TOUGHNESS, value: 1004000},
          {stat: Stat.ENERGY_POWER, value: 6000},
          {stat: Stat.MAGIC_BARS, value: 4000},
          {stat: Stat.MAGIC_POWER, value: 6000},
          {stat: Stat.MAGIC_CAP, value: 560},
        ],
      },
      {
        name: 'BOTH Edgy Boots',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/eb/220_-_BOTH_Edgy_Boots.png/revision/latest?cb=20181119175948',
        stats: [
          {stat: Stat.POWER, value: 120000},
          {stat: Stat.TOUGHNESS, value: 1080000},
          {stat: Stat.ENERGY_POWER, value: 7000},
          {stat: Stat.MAGIC_POWER, value: 7000},
          {stat: Stat.ENERGY_CAP, value: 700},
          {stat: Stat.MAGIC_CAP, value: 700},
          {stat: Stat.ENERGY_BARS, value: 7000},
          {stat: Stat.MAGIC_BARS, value: 7000},
        ],
      },
      {
        name: 'Left Edgy Boot',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/08/216_-_Left_Edgy_Boot.png/revision/latest?cb=20181111161316',
        stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.TOUGHNESS, value: 1032000},
          {stat: Stat.ENERGY_BARS, value: 9600},
          {stat: Stat.ENERGY_CAP, value: 960},
          {stat: Stat.ENERGY_POWER, value: 9600},
        ],
      },
      {
        name: 'Right Edgy Boot',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b2/219_-_Right_Edgy_Boot.png/revision/latest?cb=20181203073628',
        stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.TOUGHNESS, value: 1032000},
          {stat: Stat.MAGIC_BARS, value: 9600},
          {stat: Stat.MAGIC_CAP, value: 960},
          {stat: Stat.MAGIC_POWER, value: 9600},
        ],
      },
      {
        name: 'Edgy Pants',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/89/215_-_Edgy_Pants.png/revision/latest?cb=20181111161316',
        stats: [
          {stat: Stat.POWER, value: 60000},
          {stat: Stat.TOUGHNESS, value: 1110000},
          {stat: Stat.ENERGY_BARS, value: 6600},
          {stat: Stat.ENERGY_CAP, value: 900},
          {stat: Stat.ENERGY_POWER, value: 11000},
          {stat: Stat.MAGIC_POWER, value: 11000},
        ],
      },
      {
        name: 'Edgy Jaw Axe',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a5/217_-_Edgy_Jaw_Axe.png/revision/latest?cb=20181203091049',
        stats: [
          {stat: Stat.POWER, value: 11200000},
          {stat: Stat.TOUGHNESS, value: 600000},
          {stat: Stat.ENERGY_POWER, value: 8800},
          {stat: Stat.MAGIC_BARS, value: 3400},
          {stat: Stat.MAGIC_CAP, value: 840},
        ],
      },
      {
        name: 'A Cheap Plastik Amulet',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/83/218_-_A_Cheap_Plastik_Amulet.png/revision/latest?cb=20181203104051',
        stats: [
          {stat: Stat.POWER, value: 300000},
          {stat: Stat.TOUGHNESS, value: 300000},
          {stat: Stat.ENERGY_BARS, value: 6400},
          {stat: Stat.ENERGY_POWER, value: 9000},
          {stat: Stat.ENERGY_CAP, value: 720},
          {stat: Stat.MAGIC_BARS, value: 6400},
          {stat: Stat.MAGIC_POWER, value: 9000},
          {stat: Stat.MAGIC_CAP, value: 720},
        ],
      },
    ],
  },
  {
    setName: SetName.PINK, items: [
      {
        name: 'Clown Hat',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b5/Clown_Hat.png/revision/latest/scale-to-width-down/50?cb=20181208082030',
        stats: [
          {stat: Stat.POWER, value: 12000},
          {stat: Stat.TOUGHNESS, value: 1484000},
          {stat: Stat.MAGIC_POWER, value: 11000},
          {stat: Stat.ENERGY_CAP, value: 1100},
          {stat: Stat.MAGIC_CAP, value: 1100},
          {stat: Stat.ENERGY_BARS, value: 7000},
          {stat: Stat.MAGIC_BARS, value: 7000},
        ],
      },
      {
        name: 'Fabulous Super Chest',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/be/232_-_Fabulous_Super_Chest.png/revision/latest?cb=20181205183706',
        stats: [
          {stat: Stat.POWER, value: 120000},
          {stat: Stat.TOUGHNESS, value: 1480000},
          {stat: Stat.ENERGY_CAP, value: 1100},
          {stat: Stat.MAGIC_CAP, value: 1100},
          {stat: Stat.ENERGY_POWER, value: 10800},
          {stat: Stat.MAGIC_POWER, value: 10800},
          {stat: Stat.MAGIC_BARS, value: 10600},
        ],
      },
      {
        name: 'A Crappy Tutu',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d7/233_-_A_Crappy_Tutu.png/revision/latest?cb=20181205183714',
        stats: [
          {stat: Stat.POWER, value: 100000},
          {stat: Stat.TOUGHNESS, value: 1510000},
          {stat: Stat.ENERGY_BARS, value: 10000},
          {stat: Stat.ENERGY_POWER, value: 14000},
          {stat: Stat.ENERGY_CAP, value: 1200},
          {stat: Stat.MAGIC_CAP, value: 1200},
        ],
      },
      {
        name: 'Pretty Pink Slippers',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b6/234_-_Pretty_Pink_Slippers.png/revision/latest?cb=20181205183721',
        stats: [
          {stat: Stat.POWER, value: 60000},
          {stat: Stat.TOUGHNESS, value: 1460000},
          {stat: Stat.MAGIC_CAP, value: 1260},
          {stat: Stat.MAGIC_BARS, value: 10000},
          {stat: Stat.ENERGY_POWER, value: 13000},
          {stat: Stat.MAGIC_POWER, value: 13000},
        ],
      },
      {
        name: 'Giant Sticky Foot',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/64/235_-_Giant_Sticky_Foot.png/revision/latest?cb=20181205183727',
        stats: [
          {stat: Stat.POWER, value: 15200000},
          {stat: Stat.TOUGHNESS, value: 880000},
          {stat: Stat.ENERGY_POWER, value: 12000},
          {stat: Stat.ENERGY_CAP, value: 1140},
          {stat: Stat.MAGIC_POWER, value: 12000},
          {stat: Stat.MAGIC_BARS, value: 6600},
        ],
      },
      {
        name: 'A Pretty Pink Bow',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8c/236_-_A_Pretty_Pink_Bow.png/revision/latest?cb=20181205183734',
        stats: [
          {stat: Stat.POWER, value: 800000},
          {stat: Stat.TOUGHNESS, value: 800000},
          {stat: Stat.QUEST_DROP, value: 10},
          {stat: Stat.NGU_SPEED, value: 340},
          {stat: Stat.DAYCARE_SPEED, value: 20},
        ],
      },
    ],
  },
  {
    setName: SetName.NERD, items: [
      {
        name: 'A Worn Out Fedora',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/72/237_-_A_Worn_Out_Fedora.png/revision/latest?cb=20181208020842',
        stats: [
          {stat: Stat.POWER, value: 160000},
          {stat: Stat.TOUGHNESS, value: 2200000},
          {stat: Stat.ENERGY_POWER, value: 11600},
          {stat: Stat.MAGIC_POWER, value: 11600},
          {stat: Stat.MAGIC_CAP, value: 1800},
          {stat: Stat.ENERGY_BARS, value: 14000},
        ],
      },
      {
        name: 'Sweat-Stained NGU Shirt',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/50/238_-_Sweat-Stained_NGU_Shirt.png/revision/latest?cb=20181208020853',
        stats: [
          {stat: Stat.POWER, value: 160000},
          {stat: Stat.TOUGHNESS, value: 2240000},
          {stat: Stat.ENERGY_CAP, value: 1400},
          {stat: Stat.MAGIC_CAP, value: 1400},
          {stat: Stat.ENERGY_POWER, value: 20000},
          {stat: Stat.MAGIC_BARS, value: 12200},
        ],
      },
      {
        name: 'Not Sweat-Stained Underpants',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/20/239_-_Not_Sweat-Stained_Underpants.png/revision/latest?cb=20181208020859',
        stats: [
          {stat: Stat.POWER, value: 100000},
          {stat: Stat.TOUGHNESS, value: 2400000},
          {stat: Stat.MAGIC_BARS, value: 12400},
          {stat: Stat.ENERGY_POWER, value: 12200},
          {stat: Stat.MAGIC_POWER, value: 12200},
          {stat: Stat.ENERGY_CAP, value: 1800},
        ],
      },
      {
        name: 'Nerdy Shoes',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/240_-_Nerdy_Shoes.png/revision/latest?cb=20181208020906',
        stats: [
          {stat: Stat.POWER, value: 160000},
          {stat: Stat.TOUGHNESS, value: 2400000},
          {stat: Stat.ENERGY_CAP, value: 1600},
          {stat: Stat.MAGIC_CAP, value: 1600},
          {stat: Stat.ENERGY_BARS, value: 12600},
          {stat: Stat.MAGIC_BARS, value: 12600},
          {stat: Stat.MAGIC_POWER, value: 16000},
        ],
      },
      {
        name: 'Superior Japanese Katana',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c5/241_-_Superior_Japanese_Katana.png/revision/latest?cb=20181208020913',
        stats: [
          {stat: Stat.POWER, value: 22000000},
          {stat: Stat.TOUGHNESS, value: 1200000},
          {stat: Stat.ENERGY_CAP, value: 1340},
          {stat: Stat.MAGIC_CAP, value: 1340},
          {stat: Stat.ENERGY_POWER, value: 13000},
          {stat: Stat.MAGIC_POWER, value: 13000},
          {stat: Stat.MAGIC_BARS, value: 12200},
        ],
      },
      {
        name: 'An Ordinary Calculator',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d9/An_Ordinary_Calculator.png/revision/latest?cb=20181212191857',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_BARS, value: 10000},
          {stat: Stat.MAGIC_BARS, value: 10000},
          {stat: Stat.NGU_SPEED, value: 600},
        ],
      },
      {
        name: 'Anime Figurine',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f4/243_-_Anime_Figurine.png/revision/latest?cb=20181208020927',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_POWER, value: 13000},
          {stat: Stat.MAGIC_POWER, value: 13000},
          {stat: Stat.MAGIC_CAP, value: 1000},
          {stat: Stat.ENERGY_BARS, value: 12000},
        ],
      },
      {
        name: 'Anime Bodypillow',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/40/Anime_Bodypillow.png/revision/latest?cb=20190124100124',
        stats: [
          {stat: Stat.POWER, value: 1000000},
          {stat: Stat.TOUGHNESS, value: 1000000},
          {stat: Stat.ENERGY_POWER, value: 20000},
          {stat: Stat.MAGIC_POWER, value: 20000},
          {stat: Stat.NGU_SPEED, value: 300},
          {stat: Stat.RESPAWN, value: 4},
        ],
      },
      {
        name: 'Red Meeple Thingy',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/02/2018-12-25_15_16_12-Play_NGU_IDLE%2C_a_free_online_game_on_Kongregate.png/revision/latest/scale-to-width-down/50?cb=20181225152601',
        stats: [
          {stat: Stat.POWER, value: 1000000},
          {stat: Stat.TOUGHNESS, value: 1000000},
          {stat: Stat.MAGIC_POWER, value: 24000},
          {stat: Stat.MAGIC_CAP, value: 2000},
          {stat: Stat.AUGMENT_SPEED, value: 500},
        ],
      },
      {
        name: 'The D20',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/91/2018-12-24_22_09_18-Play_NGU_IDLE%2C_a_free_online_game_on_Kongregate.png/revision/latest/scale-to-width-down/50?cb=20181224221119',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_CAP, value: 1600},
          {stat: Stat.ENERGY_POWER, value: 16000},
          {stat: Stat.ENERGY_BARS, value: 16000},
        ],
      },
      {
        name: 'The D8',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/29/2018-12-24_21_49_59-Play_NGU_IDLE%2C_a_free_online_game_on_Kongregate.png/revision/latest/scale-to-width-down/50?cb=20181224215859',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.MAGIC_CAP, value: 1600},
          {stat: Stat.MAGIC_POWER, value: 16000},
          {stat: Stat.MAGIC_BARS, value: 16000},
        ],
      },
      {
        name: 'Heart Shaped Panties',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/121_-_The_Triple_Flubber.png/revision/latest?cb=20180402160149',
        stats: [
          {stat: Stat.POWER, value: 1333332},
          {stat: Stat.TOUGHNESS, value: 1333332},
          {stat: Stat.ENERGY_POWER, value: 13333},
          {stat: Stat.MAGIC_POWER, value: 13333},
          {stat: Stat.NGU_SPEED, value: 666},
          {stat: Stat.MAGIC_CAP, value: 1333},
          {stat: Stat.ENERGY_CAP, value: 1333},
        ],
      },
    ],
  },
  {
    setName: SetName.META, items: [
      {
        name: 'Numerical Head',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5a/Numerical_Head.png/revision/latest?cb=20190202044306',
        stats: [
          {stat: Stat.POWER, value: 300000},
          {stat: Stat.TOUGHNESS, value: 4400000},
          {stat: Stat.ENERGY_CAP, value: 3000},
          {stat: Stat.ENERGY_POWER, value: 16600},
          {stat: Stat.MAGIC_POWER, value: 16600},
          {stat: Stat.MAGIC_BARS, value: 18000},
        ],
      },
      {
        name: 'Numerical Chest',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ea/Numerical_Chest.png/revision/latest?cb=20190202041424',
        stats: [
          {stat: Stat.POWER, value: 300000},
          {stat: Stat.TOUGHNESS, value: 4400000},
          {stat: Stat.MAGIC_CAP, value: 2200},
          {stat: Stat.MAGIC_POWER, value: 24000},
          {stat: Stat.ENERGY_BARS, value: 10000},
          {stat: Stat.MAGIC_BARS, value: 10000},
        ],
      },
      {
        name: 'Numerical Legs',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/76/Numerical_Legs.png/revision/latest?cb=20190202042153',
        stats: [
          {stat: Stat.POWER, value: 300000},
          {stat: Stat.TOUGHNESS, value: 4400000},
          {stat: Stat.ENERGY_BARS, value: 17000},
          {stat: Stat.ENERGY_POWER, value: 22000},
          {stat: Stat.ENERGY_CAP, value: 1800},
          {stat: Stat.MAGIC_CAP, value: 1800},
        ],
      },
      {
        name: 'Numerical Boots',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/93/Numerical_Boots.png/revision/latest?cb=20190203235840',
        stats: [
          {stat: Stat.POWER, value: 300000},
          {stat: Stat.TOUGHNESS, value: 4400000},
          {stat: Stat.ENERGY_CAP, value: 2200},
          {stat: Stat.MAGIC_BARS, value: 18000},
          {stat: Stat.ENERGY_POWER, value: 16000},
          {stat: Stat.MAGIC_POWER, value: 16000},
        ],
      },
      {
        name: 'The Number 7',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/46/The_Number_7.png/revision/latest?cb=20190202040256',
        stats: [
          {stat: Stat.POWER, value: 50000000},
          {stat: Stat.TOUGHNESS, value: 2400000},
          {stat: Stat.MAGIC_POWER, value: 18000},
          {stat: Stat.MAGIC_CAP, value: 2000},
          {stat: Stat.ENERGY_BARS, value: 10000},
          {stat: Stat.MAGIC_BARS, value: 10000},
        ],
      },
      {
        name: '69 Charm',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/51/69_Charm.png/revision/latest?cb=20190202042941',
        stats: [
          {stat: Stat.POWER, value: 1393938},
          {stat: Stat.TOUGHNESS, value: 1393938},
          {stat: Stat.QUEST_DROP, value: 16},
          {stat: Stat.WANDOOS_SPEED, value: 800},
        ],
      },
      {
        name: 'Infinity Charm',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e4/Infinity_Charm.png/revision/latest?cb=20190202043740',
        stats: [
          {stat: Stat.POWER, value: 1777776},
          {stat: Stat.TOUGHNESS, value: 1777776},
          {stat: Stat.ENERGY_CAP, value: 1777.78},
          {stat: Stat.MAGIC_CAP, value: 1777.78},
          {stat: Stat.MOVE_COOLDOWN, value: 10},
          {stat: Stat.SEED_DROP, value: 80},
        ],
      },
    ],
  },
];
