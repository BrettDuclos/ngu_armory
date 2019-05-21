export interface Item {
  name: string;
  stats: ItemStat[];
  slot: Slot;
  setName?: SetName;
  img?: string;
  itemLevel?: number;
  isEquippedInArmory?: boolean;
  isEquippedInAccs?: boolean;
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
  HACK_SPEED = "Hack Speed",
  WISH_SPEED = "Wish Speed",
  COOKING = "Cooking",
  DAYCARE_SPEED = 'Daycare Speed',
  YGGDRASIL_YIELD = 'Yggdrasil Yeild',
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
  ENERGY_POWER = 'Energy Power',
  ENERGY_BARS = 'Energy Bars',
  ENERGY_CAP = 'Energy Cap',
  MAGIC_POWER = 'Magic Power',
  MAGIC_BARS = 'Magic Bars',
  MAGIC_CAP = 'Magic Cap',
  NGU_SPEED = 'NGU Speed',
  WANDOOS_SPEED = 'Wandoos Speed',
  ADVANCE_TRAINING = 'Advance Training',
  AUGMENT_SPEED = 'Augment Speed',
  BEARD_SPEED = 'Beard Speed',
  SEED_DROP = 'Seed Gain',
  DROP_CHANCE = 'Drop Chance',
  RES3_POWER = 'Res3 Power',
  RES3_CAP = 'Res3 Cap',
  RES3_BARS = 'Res3 Bars',
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
  META = 'Meta Set',
  PARTY = 'Party Set',
  MOBSTER = 'Mobster Set',
  TYPO = 'Typo Set',
  FAD = 'Fad Set',
  JRPG = 'Jrpg Set',
  EXILE = 'Exile Set',
}


export const itemList: {setName: SetName, items: Item[];}[] = [

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
        itemLevel: 100,
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
        itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/95_-_Circle_Helmet.png',
      },
      {
        name: 'Square Chestpiece', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 100},
          {stat: Stat.TOUGHNESS, value: 1290},
          {stat: Stat.ENERGY_BARS, value: 100},
          {stat: Stat.ENERGY_POWER, value: 100},
          {stat: Stat.MAGIC_POWER, value: 80},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/21/96_-_Square_Chestpiece.png',
      },
      {
        name: 'Rectangle Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 140},
          {stat: Stat.TOUGHNESS, value: 1520},
          {stat: Stat.ENERGY_CAP, value: 14},
          {stat: Stat.ENERGY_POWER, value: 100},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/97/97_-_Rectangle_Pants.png',
      },
      {
        name: 'Polygon Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 120},
          {stat: Stat.TOUGHNESS, value: 1400},
          {stat: Stat.ENERGY_BARS, value: 140},
          {stat: Stat.ENERGY_CAP, value: 10},
          {stat: Stat.ENERGY_POWER, value: 100},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/62/98_-_Polygon_Boots.png',
      },
      {
        name: 'THE CUBE', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 1300},
          {stat: Stat.TOUGHNESS, value: 1300},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/91/100_-_THE_CUBE.png',
      },
      {
        name: 'King Circle\'s Amulet of Helping Random Stuff', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.ADVANCE_TRAINING, value: 80},
          {stat: Stat.WANDOOS_SPEED, value: 60},
        ], itemLevel: 100,
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
        ], itemLevel: 100,
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
        ], itemLevel: 100,
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
        ], itemLevel: 100,
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
        ], itemLevel: 100,
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
        ], itemLevel: 100,
      },

    ],
  },
  {
    setName: SetName.BEARDVERSE,
    items: [
      {
        name: 'Bearded Axe', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 166000},
          {stat: Stat.TOUGHNESS, value: 12000},
          {stat: Stat.BEARD_SPEED, value: 20},
          {stat: Stat.ENERGY_BARS, value: 440},
          {stat: Stat.MAGIC_BARS, value: 440},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/92/147_-_Bearded_Axe.png/',
      },

      {
        name: 'Groucho Marx Disguise', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 22000},
          {stat: Stat.ENERGY_POWER, value: 360},
          {stat: Stat.MAGIC_BARS, value: 480},
          {stat: Stat.MAGIC_CAP, value: 96},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c6/143_-_Groucho_Marx_Disguise.png/',
      },
      {
        name: 'Gossamer Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 25000},
          {stat: Stat.ENERGY_CAP, value: 124},
          {stat: Stat.MAGIC_CAP, value: 100},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/77/144_-_Gossamer_Chest.png/',
      },
      {
        name: 'Braided Beard Legs', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 25000},
          {stat: Stat.MAGIC_BARS, value: 460},
          {stat: Stat.MAGIC_CAP, value: 86},
          {stat: Stat.MAGIC_POWER, value: 580},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/145_-_Braided_Beard_Legs.png/',
      },
      {
        name: 'Fuzzy Orange Cheeto Slippers!', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 2200},
          {stat: Stat.TOUGHNESS, value: 25000},
          {stat: Stat.ENERGY_BARS, value: 660},
          {stat: Stat.ENERGY_POWER, value: 440},
          {stat: Stat.ENERGY_CAP, value: 40},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cc/146_-_Fuzzy_Orange_Cheeto_Slippers%21.png/',
      },
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
        ], itemLevel: 100,
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
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5c/196_-_My_Blue_Heart.png/',
      },
      {
        name: 'Brown Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.MAGIC_POWER, value: 100},
          {stat: Stat.ENERGY_POWER, value: 100},
          {stat: Stat.SEED_DROP, value: 70},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b4/162_-_My_Brown_Heart.png/',
      },
      {
        name: 'Green Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.BEARD_SPEED, value: 60},
          {stat: Stat.DROP_CHANCE, value: 100},
          {stat: Stat.RESPAWN, value: 8},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/14/171_-_My_Green_Heart.png/',
      },
      {
        name: 'Red Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.DROP_CHANCE, value: 60},
          {stat: Stat.EXPERIENCE, value: 10},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d8/119_-_My_Red_Heart.png/',
      },
      {
        name: 'Yellow Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.GOLD_DROP, value: 600},
          {stat: Stat.AP, value: 20},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/81/129_-_My_Yellow_Heart.png/',
      },
      {
        name: 'Orange Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 200},
          {stat: Stat.TOUGHNESS, value: 200},
          {stat: Stat.GOLD_DROP, value: 600},
          {stat: Stat.QUEST_DROP, value: 80},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/293_-_My_Orange_Heart.png',
      },
      {
        name: 'My Grey Heart', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2000000},
          {stat: Stat.TOUGHNESS, value: 2000000},
          {stat: Stat.RES3_CAP, value: 40},
          {stat: Stat.RES3_BARS, value: 40},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/24/297_-_My_Grey_Heart.png/revision/latest?cb=20190411171956',
      },

    ],
  },
  {
    setName: SetName.CAVE, items: [
      {
        name: 'Mole Hammer', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 400},
          {stat: Stat.ENERGY_BARS, value: 30},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/eb/58_-_Mole_Hammer.png/revision/latest?cb=20180330170742',
      },
      {
        name: 'Blue Cheese Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_POWER, value: 14},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3d/54_-_Blue_Cheese_Helmet.png/revision/latest?cb=20180330170526',
      },
      {
        name: 'Gouda Chestplate', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_POWER, value: 26},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/ba/55_-_Gouda_Chestplate.png/revision/latest?cb=20180330170605',
      },
      {
        name: 'Swiss Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_SPEED, value: 20},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/47/56_-_Swiss_Leggings.png/revision/latest?cb=20180330170641',
      },
      {
        name: 'Limburger Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 100},
          {stat: Stat.MAGIC_POWER, value: 20},
          {stat: Stat.MAGIC_SPEED, value: 20},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a3/57_-_Limburger_Boots.png/revision/latest?cb=20180330170712',
      },
      {
        name: 'Havarti Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 8},
          {stat: Stat.TOUGHNESS, value: 8},
          {stat: Stat.MAGIC_POWER, value: 50},
          {stat: Stat.MAGIC_SPEED, value: 50},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a1/59_-_Havarti_Ring.png/revision/latest?cb=20180330170813',
      },
      {
        name: 'Cheddar Amulet', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2},
          {stat: Stat.TOUGHNESS, value: 2},
          {stat: Stat.ENERGY_POWER, value: 60},
          {stat: Stat.ENERGY_SPEED, value: 120},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a2/60_-_Cheddar_Amulet.png/revision/latest?cb=20180330170844',
      },
      {
        name: 'Combat Cheese', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 60},
          {stat: Stat.TOUGHNESS, value: 60},
          {stat: Stat.GOLD_DROP, value: 20},
        ], itemLevel: 100,
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
        ], itemLevel: 100,
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
        ], itemLevel: 100,
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
        ], itemLevel: 100,
      },
      {
        name: 'Chocolate Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 60000},
          {stat: Stat.TOUGHNESS, value: 704000},
          {stat: Stat.ENERGY_POWER, value: 5200},
          {stat: Stat.MAGIC_BARS, value: 2800},
          {stat: Stat.MAGIC_CAP, value: 380},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e3/221_-_Chocolate_Helmet.png/revision/latest?cb=20181111154851',
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
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/89/222_-_Chocolate_Chest.png/revision/latest?cb=20181111153348',
      },
      {
        name: 'Chocolate Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.TOUGHNESS, value: 710000},
          {stat: Stat.ENERGY_BARS, value: 3400},
          {stat: Stat.ENERGY_CAP, value: 460},
          {stat: Stat.ENERGY_POWER, value: 5600},
          {stat: Stat.MAGIC_POWER, value: 5600},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b9/223_-_Chocolate_Pants.png/revision/latest?cb=20181111152501',
      },
      {
        name: 'Chocolate Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.TOUGHNESS, value: 732000},
          {stat: Stat.ENERGY_BARS, value: 6800},
          {stat: Stat.ENERGY_CAP, value: 680},
          {stat: Stat.ENERGY_POWER, value: 6800},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d7/224_-_Chocolate_Boots.png/revision/latest?cb=20181111153509',
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
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/53/89_-_A_Comically_Oversized_Minute-Hand.png/revision/latest?cb=20180330175633',
      },
      {
        name: 'Clockwork Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 60},
          {stat: Stat.TOUGHNESS, value: 860},
          {stat: Stat.MAGIC_CAP, value: 4},
          {stat: Stat.MAGIC_POWER, value: 60},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/85_-_Clockwork_Hat.png/revision/latest?cb=20180330175115',
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
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d4/87_-_Clockwork_Pants.png/revision/latest?cb=20180330175444',
      },
      {
        name: 'Clockwork Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 1030},
          {stat: Stat.MAGIC_CAP, value: 6},
          {stat: Stat.MAGIC_POWER, value: 60},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/41/88_-_Clockwork_Boots.png/revision/latest?cb=20180330175513',
      },
      {
        name: 'Alarm Clock', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 900},
          {stat: Stat.TOUGHNESS, value: 900},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/08/90_-_Alarm_Clock.png/revision/latest?cb=20180330175706',
      },
      {
        name: 'The Sands of Time', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.MOVE_COOLDOWN, value: 20},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1f/91_-_The_Sands_of_Time.png/revision/latest?cb=20180330175744',
      },
    ],
  },
  {
    setName: SetName.FOREST, items: [
      {
        name: 'Kokiri Blade', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.ENERGY_POWER, value: 20},
        ], itemLevel: 100,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/72/51_-_Kokiri_Blade.png/revision/latest?cb=20180330170353',
      },
      {
        itemLevel: 100,
        name: 'Forest Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 20},
          {stat: Stat.ENERGY_POWER, value: 20},
          {stat: Stat.ENERGY_SPEED, value: 24},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f3/47_-_Forest_Helmet.png/revision/latest?cb=20180330170139',
      },
      {
        itemLevel: 100,
        name: 'Forest Chestplate', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 40},
          {stat: Stat.ENERGY_POWER, value: 24},
          {stat: Stat.ENERGY_SPEED, value: 16},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1b/48_-_Forest_Chestplate.png/revision/latest?cb=20180330170217',
      },
      {
        itemLevel: 100,
        name: 'Forest Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 40},
          {stat: Stat.ENERGY_SPEED, value: 16},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/79/49_-_Forest_Leggings.png/revision/latest?cb=20180330170250',
      },
      {
        itemLevel: 100,
        name: 'Forest Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 40},
          {stat: Stat.ENERGY_POWER, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7e/50_-_Forest_Boots.png/revision/latest?cb=20180330170315',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Paper Fan', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 40000},
          {stat: Stat.MAGIC_BARS, value: 200},
          {stat: Stat.MAGIC_POWER, value: 260},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/95/126_-_Paper_Fan.png/revision/latest?cb=20180420183017',
      },
      {
        itemLevel: 100,
        name: 'Gaudy Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 560},
          {stat: Stat.TOUGHNESS, value: 4800},
          {stat: Stat.ENERGY_BARS, value: 120},
          {stat: Stat.MAGIC_BARS, value: 120},

        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a3/122_-_Gaudy_Hat.png/revision/latest?cb=20180420182814',
      },
      {
        itemLevel: 100,
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
      {
        itemLevel: 100,
        name: 'Gaudy Shirt', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 500},
          {stat: Stat.TOUGHNESS, value: 5000},
          {stat: Stat.ENERGY_CAP, value: 76},
          {stat: Stat.ENERGY_POWER, value: 192},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6b/123_-_Gaudy_Shirt.png/revision/latest?cb=20180420182843',
      },
      {
        itemLevel: 100,
        name: 'Gaudy Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 5200},
          {stat: Stat.ENERGY_CAP, value: 72},
          {stat: Stat.ENERGY_POWER, value: 180},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/73/124_-_Gaudy_Pants.png/revision/latest?cb=20180420182911',
      },
      {
        itemLevel: 100,
        name: 'Gaudy Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 400},
          {stat: Stat.TOUGHNESS, value: 4800},
          {stat: Stat.MAGIC_POWER, value: 240},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/36/125_-_Gaudy_Boots.png/revision/latest?cb=20180420182946',
      },

    ],
  },
  {
    setName: SetName.GRB, items: [
      {
        itemLevel: 100,
        name: 'Bloody Cleaver', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 160},
          {stat: Stat.ENERGY_BARS, value: 130},
          {stat: Stat.ENERGY_POWER, value: 90},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/8a/82_-_Bloody_Cleaver.png/revision/latest?cb=20180330174836',
      },
      {
        itemLevel: 100,
        name: 'Chef\'s Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 500},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/db/78_-_Chef%27s_Hat.png/revision/latest?cb=20180330173229',
      },
      {
        itemLevel: 100,
        name: 'Chef\'s Apron', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/0f/79_-_Chef%27s_Apron.png/revision/latest?cb=20180330173300',
      },
      {
        itemLevel: 100,
        name: 'Regular Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 130},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/86/80_-_Regular_Pants.png/revision/latest?cb=20180330173331',
      },
      {
        itemLevel: 100,
        name: 'Non Slip Shoes', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 40},
          {stat: Stat.TOUGHNESS, value: 500},
          {stat: Stat.ENERGY_POWER, value: 130},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5d/81_-_Non_Slip_Shoes.png/revision/latest?cb=20180330173412',
      },
      {
        itemLevel: 100,
        name: 'Suspicious Sausage Necklace',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.POWER, value: 500},
          {stat: Stat.TOUGHNESS, value: 500},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a8/83_-_Suspicious_Sausage_Necklace.png/revision/latest?cb=20180330174914',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Magitech Blade', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 1000},
          {stat: Stat.ENERGY_CAP, value: 12},
          {stat: Stat.GOLD_DROP, value: 40},
          {stat: Stat.MAGIC_CAP, value: 8},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d1/72_-_Magitech_Blade.png/revision/latest?cb=20180330172657',
      },
      {
        itemLevel: 100,
        name: 'Magitech Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 250},
          {stat: Stat.ENERGY_BARS, value: 50},
          {stat: Stat.MAGIC_BARS, value: 30},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/68_-_Magitech_Helmet.png/revision/latest?cb=20180330171306',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Magitech Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 250},
          {stat: Stat.MAGIC_BARS, value: 40},
          {stat: Stat.MAGIC_POWER, value: 20},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d2/70_-_Magitech_Leggings.png/revision/latest?cb=20180330172456',
      },
      {
        itemLevel: 100,
        name: 'Magitech Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 250},
          {stat: Stat.ENERGY_POWER, value: 50},
          {stat: Stat.MAGIC_POWER, value: 30},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6f/71_-_Magitech_Boots.png/revision/latest?cb=20180330172551',
      },
      {
        itemLevel: 100,
        name: 'Magitech Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 90},
          {stat: Stat.TOUGHNESS, value: 90},
          {stat: Stat.MAGIC_POWER, value: 80},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b8/73_-_Magitech_Ring.png/revision/latest?cb=20180330172727',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'The Pen-Is', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 23000},
          {stat: Stat.MAGIC_CAP, value: 47.12},
          {stat: Stat.MAGIC_POWER, value: 176.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/dd/115_-_The_Pen-Is.png/revision/latest?cb=20180420182614',
      },
      {
        itemLevel: 100,
        name: 'Office Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2600},
          {stat: Stat.ENERGY_CAP, value: 31.64},
          {stat: Stat.ENERGY_POWER, value: 216.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/ac/111_-_Office_Hat.png/revision/latest?cb=20180420182341',
      },
      {
        itemLevel: 100,
        name: 'Office Shirt', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 158.6},
          {stat: Stat.TOUGHNESS, value: 2499},
          {stat: Stat.ENERGY_CAP, value: 61.62},
          {stat: Stat.ENERGY_POWER, value: 156.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/61/112_-_Office_Shirt.png/revision/latest?cb=20180420182433',
      },
      {
        itemLevel: 100,
        name: 'Office Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2798},
          {stat: Stat.ENERGY_CAP, value: 57.64},
          {stat: Stat.ENERGY_POWER, value: 116.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e4/113_-_Office_Pants.png/revision/latest?cb=20180514101206',
      },
      {
        itemLevel: 100,
        name: 'Office Shoes', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2600},
          {stat: Stat.ENERGY_POWER, value: 336.4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1e/114_-_Office_Shoes.png/revision/latest?cb=20180420182540',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'A Regular Tie', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.TOUGHNESS, value: 163},
          {stat: Stat.GOLD_DROP, value: 400},
          {stat: Stat.MAGIC_POWER, value: 216.24},
          {stat: Stat.NGU_SPEED, value: 120},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f5/116_-_A_Regular_Tie.png/revision/latest?cb=20180420182645',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Beam Laser Sword', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 88000},
          {stat: Stat.ENERGY_POWER, value: 280},
          {stat: Stat.ENERGY_CAP, value: 40},
          {stat: Stat.ENERGY_BARS, value: 200},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fb/134_-_Beam_Laser_Sword.png/revision/latest?cb=20180420183306',
      },
      {
        itemLevel: 100,
        name: 'Mega Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 11200},
          {stat: Stat.ENERGY_POWER, value: 460},
          {stat: Stat.MAGIC_POWER, value: 460},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e1/130_-_Mega_Helmet.png/revision/latest?cb=20180420183116',
      },
      {
        itemLevel: 100,
        name: 'Mega Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 11200},
          {stat: Stat.ENERGY_BARS, value: 340},
          {stat: Stat.MAGIC_BARS, value: 340},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/90/131_-_Mega_Chest.png/revision/latest?cb=20180420183142',
      },
      {
        itemLevel: 100,
        name: 'Mega Blue Jeans', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 11400},
          {stat: Stat.ENERGY_CAP, value: 92},
          {stat: Stat.MAGIC_CAP, value: 92},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/da/132_-_Mega_Blue_Jeans.png/revision/latest?cb=20180420183213',
      },
      {
        itemLevel: 100,
        name: 'Mega Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 600},
          {stat: Stat.TOUGHNESS, value: 11000},
          {stat: Stat.MAGIC_BARS, value: 300},
          {stat: Stat.MAGIC_POWER, value: 280},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/07/133_-_Mega_Boots.png/revision/latest?cb=20180420183238',
      },
    ],
  },
  {
    setName: SetName.SEWERS, items: [
      {
        itemLevel: 100,
        name: 'Rusty Sword', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 40},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/55/44_-_Rusty_Sword.png/revision/latest?cb=20180330165424',
      },
      {
        itemLevel: 100,
        name: 'Crappy Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/28/40_-_Crappy_Helmet.png/revision/latest?cb=20180330165208',
      },
      {
        itemLevel: 100,
        name: 'Crappy Chestplate', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/41_-_Crappy_Chestplate.png/revision/latest?cb=20180330165241',
      },
      {
        itemLevel: 100,
        name: 'Crappy Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/23/42_-_Crappy_Leggings.png/revision/latest?cb=20180330165315',
      },
      {
        itemLevel: 100,
        name: 'Crappy Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 10},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/05/43_-_Crappy_Boots.png/revision/latest?cb=20180330165354',
      },
      {
        itemLevel: 100,
        name: 'Gross Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2},
          {stat: Stat.TOUGHNESS, value: 2},
          {stat: Stat.ENERGY_SPEED, value: 40},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5f/45_-_Gross_Ring.png/revision/latest?cb=20180330165521',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Spooky Sword', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 17776},
          {stat: Stat.TOUGHNESS, value: 600},
          {stat: Stat.ENERGY_POWER, value: 170},
          {stat: Stat.MAGIC_POWER, value: 220},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/107_-_Spooky_Sword.png/revision/latest?cb=20180421191854',
      },
      {
        itemLevel: 100,
        name: 'Spoopy Helmet', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 100},
          {stat: Stat.TOUGHNESS, value: 2000},
          {stat: Stat.ENERGY_CAP, value: 20.6},
          {stat: Stat.MAGIC_CAP, value: 21},
          {stat: Stat.MAGIC_POWER, value: 150},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/af/103_-_Spoopy_Helmet.png/revision/latest?cb=20180421191559',
      },
      {
        itemLevel: 100,
        name: 'Ghostly Chest', slot: Slot.CHEST, stats: [
          {stat: Stat.POWER, value: 160},
          {stat: Stat.TOUGHNESS, value: 2070},
          {stat: Stat.ENERGY_CAP, value: 22},
          {stat: Stat.MAGIC_CAP, value: 23},
          {stat: Stat.MAGIC_POWER, value: 80},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/13/104_-_Ghostly_Chest.png/revision/latest?cb=20180421191727',
      },
      {
        itemLevel: 100,
        name: 'Pants of Horror', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 140},
          {stat: Stat.TOUGHNESS, value: 2120},
          {stat: Stat.ENERGY_CAP, value: 28},
          {stat: Stat.MAGIC_BARS, value: 80},
          {stat: Stat.MAGIC_CAP, value: 24},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/58/105_-_Pants_of_Horror.png/revision/latest?cb=20180421191753',
      },
      {
        itemLevel: 100,
        name: 'Spectral Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.POWER, value: 120},
          {stat: Stat.TOUGHNESS, value: 2180},
          {stat: Stat.ENERGY_CAP, value: 10},
          {stat: Stat.ENERGY_POWER, value: 100},
          {stat: Stat.MAGIC_CAP, value: 18},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fc/106_-_Spectral_Boots.png/revision/latest?cb=20180421191823',
      },
      {
        itemLevel: 100,
        name: 'Cursed Ring', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2100},
          {stat: Stat.TOUGHNESS, value: 2100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9d/108_-_Cursed_Ring.png/revision/latest?cb=20180421191922',
      },
      {
        itemLevel: 100,
        name: 'Amulet of Sunshine, Sparkles and Gore',
        slot: Slot.ACCESSORY,
        stats: [
          {stat: Stat.ENERGY_POWER, value: 200},
          {stat: Stat.MAGIC_POWER, value: 200},
        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3e/109_-_Amulet_of_Sunshine%2C_Sparkles_and_Gore.png/revision/latest?cb=20180420182230',
      },
      {
        itemLevel: 100,
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
    ],
  },
  {
    setName: SetName.STEALTH, items: [
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Stealthy Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 10000},
          {stat: Stat.TOUGHNESS, value: 224000},
          {stat: Stat.ENERGY_POWER, value: 2400},
          {stat: Stat.ENERGY_CAP, value: 350},
          {stat: Stat.MAGIC_CAP, value: 170},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/30/173_-_Stealthy_Hat.png/revision/latest?cb=20180805092445',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'No Pants', slot: Slot.PANTS, stats: [
          {stat: Stat.POWER, value: 10000},
          {stat: Stat.TOUGHNESS, value: 236000},
          {stat: Stat.ENERGY_POWER, value: 3500},
          {stat: Stat.MAGIC_POWER, value: 900},
          {stat: Stat.MAGIC_BARS, value: 2000},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/28/175_-_No_Pants.png/revision/latest?cb=20180805092716',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'A Stick', slot: Slot.WEAPON, stats: [
          {stat: Stat.POWER, value: 6},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f6/75_-_A_Stick.png/revision/latest?cb=20180330172932',
      },
      {
        itemLevel: 100,
        name: 'Cloth Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/86/62_-_Cloth_Hat.png/revision/latest?cb=20180330170954',
      },
      {
        itemLevel: 100,
        name: 'Cloth Shirt', slot: Slot.CHEST, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/53/63_-_Cloth_Shirt.png/revision/latest?cb=20180330171023',
      },
      {
        itemLevel: 100,
        name: 'Cloth Leggings', slot: Slot.PANTS, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/64_-_Cloth_Leggings.png/revision/latest?cb=20180330171051',
      },
      {
        itemLevel: 100,
        name: 'Cloth Boots', slot: Slot.BOOTS, stats: [
          {stat: Stat.TOUGHNESS, value: 2},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cd/65_-_Cloth_Boots.png/revision/latest?cb=20180330171113',
      },
    ],
  },
  {
    setName: SetName.UUG_RINGS, items: [
      {
        itemLevel: 100,
        name: 'Ring of Greed', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.DROP_CHANCE, value: 120},
          {stat: Stat.GOLD_DROP, value: 1600},
          {stat: Stat.RESPAWN, value: 16},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cf/136_-_Ring_of_Greed.png/revision/latest?cb=20180420183403',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Ring of Might', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 13332},
          {stat: Stat.TOUGHNESS, value: 13332},
          {stat: Stat.MOVE_COOLDOWN, value: 20},
          {stat: Stat.RESPAWN, value: 4},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f0/137_-_Ring_of_Might.png/revision/latest?cb=20180420183425',
      },
      {
        itemLevel: 100,
        name: 'Ring of Utility', slot: Slot.ACCESSORY, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 2000},
          {stat: Stat.ADVANCE_TRAINING, value: 100},
          {stat: Stat.NGU_SPEED, value: 100},
          {stat: Stat.WANDOOS_SPEED, value: 100},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c0/138_-_Ring_of_Utility.png/revision/latest?cb=20180420183453',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Wanderer\'s Cane',
        slot: Slot.WEAPON,
        stats: [
          {stat: Stat.POWER, value: 340000},
          {stat: Stat.TOUGHNESS, value: 1020000},

        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6e/154_-_Wanderer%27s_Cane.png/revision/latest?cb=20180619092612',
      },
      {
        itemLevel: 100,
        name: 'The Candy Cane of Destiny',
        slot: Slot.WEAPON,
        stats: [
          {stat: Stat.POWER, value: 340000},
          {stat: Stat.TOUGHNESS, value: 1020000},
          {stat: Stat.ENERGY_POWER, value: 2000},
          {stat: Stat.ENERGY_CAP, value: 200},
          {stat: Stat.ENERGY_BARS, value: 2000},
          {stat: Stat.MAGIC_POWER, value: 2000},
          {stat: Stat.MAGIC_CAP, value: 200},
          {stat: Stat.MAGIC_BARS, value: 2000},

        ],
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/fd/159_-_The_Candy_Cane_of_Destiny.png/revision/latest?cb=20180619111530',
      },
      {
        itemLevel: 100,
        name: 'Wanderer\'s Hat', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 42000},
          {stat: Stat.ENERGY_CAP, value: 170},
          {stat: Stat.ENERGY_POWER, value: 1500},
          {stat: Stat.MAGIC_POWER, value: 400},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/10/150_-_Wanderer%27s_Hat.png/revision/latest?cb=20180619095346',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
      {
        itemLevel: 100,
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
    ],
  },
  {
    setName: SetName.WANDERER2, items: [
      {
        itemLevel: 100,
        name: 'taH s\'rerednaW', slot: Slot.HEAD, stats: [
          {stat: Stat.POWER, value: 2000},
          {stat: Stat.TOUGHNESS, value: 42000},
          {stat: Stat.ENERGY_POWER, value: 400},
          {stat: Stat.MAGIC_CAP, value: 170},
          {stat: Stat.MAGIC_POWER, value: 1500},
        ], img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c7/155_-_taH_s%27rerednaW.png/revision/latest?cb=20180619083814',
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
      {
        itemLevel: 100,
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

    ],
  },
  {
    setName: SetName.FOREST_PENDANT,
    items: [
      {
        itemLevel: 100,
        name: 'Forest Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/5/5f/53_-_Forest_Pendant.png/revision/latest?cb=20180330170456',
        stats: [],
      },
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'Ascended x4 Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/96/170_-_Ascended_x4_Pendant.png/revision/latest?cb=20180729135209',
        stats: [
          {stat: Stat.POWER, value: 200000},
          {stat: Stat.TOUGHNESS, value: 200000},
          {stat: Stat.QUEST_DROP, value: 10},
          {stat: Stat.ENERGY_CAP, value: 240},
          {stat: Stat.MAGIC_CAP, value: 240},
          {stat: Stat.DROP_CHANCE, value: 500},
        ],
      },
      {
        itemLevel: 100,
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
      {
        itemLevel: 100,
        name: 'Ascended x6 Pendant',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/34/295_-_Ascended_x6_Pendant.png/revision/latest?cb=20190409190045',
        stats: [
          {stat: Stat.POWER, value: 40000000},
          {stat: Stat.TOUGHNESS, value: 40000000},
          {stat: Stat.RES3_POWER, value: 200},
          {stat: Stat.RES3_CAP, value: 100},
          {stat: Stat.RES3_BARS, value: 200},
        ],
      },
    ],
  },
  {
    setName: SetName.LOOTY, items: [
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
      {
        itemLevel: 100,
        name: 'GALACTIC HERALD LOOTY',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d7/296_-_GALACTIC_HERALD_LOOTY.png/revision/latest?cb=20190411171936',
        stats: [
          {stat: Stat.POWER, value: 60000000},
          {stat: Stat.TOUGHNESS, value: 60000000},
          {stat: Stat.DROP_CHANCE, value: 1200},
          {stat: Stat.ENERGY_POWER, value: 50000},
          {stat: Stat.MAGIC_POWER, value: 50000},
          {stat: Stat.RES3_CAP, value: 40},
        ],
      },
    ],
  },
  {
    setName: SetName.OTHER,
    items: [
      {
        itemLevel: 100,
        name: 'The Triple Flubber',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9c/121_-_The_Triple_Flubber.png/revision/latest?cb=20180402160149',
        stats: [
          {stat: Stat.RESPAWN, value: 8},
        ],
      },
    ],
  },
  {
    setName: SetName.EDGY, items: [
      {
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'A Cheap Plastik Amulet',
        slot: Slot.ACCESSORY,
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
        itemLevel: 100,
        name: 'Clown Hat',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/32/231_-_Clown_Hat.png/revision/latest?cb=20181205183618',
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
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
        itemLevel: 100,
        name: 'An Ordinary Calculator',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6f/242_-_An_Ordinary_Calculator.png/revision/latest?cb=20181208020919',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_BARS, value: 10000},
          {stat: Stat.MAGIC_BARS, value: 10000},
          {stat: Stat.NGU_SPEED, value: 600},
          {stat: Stat.RES3_POWER, value: 10},
        ],
      },
      {
        itemLevel: 100,
        name: 'Anime Figurine',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f4/243_-_Anime_Figurine.png/revision/latest?cb=20181208020927',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_POWER, value: 16000},
          {stat: Stat.MAGIC_POWER, value: 16000},
          {stat: Stat.MAGIC_CAP, value: 1000},
          {stat: Stat.ENERGY_BARS, value: 16000},
        ],
      },
      {
        itemLevel: 100,
        name: 'Anime Bodypillow',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4f/246_-_Anime_Bodypillow.png/revision/latest?cb=20190404221520',
        stats: [
          {stat: Stat.POWER, value: 1000000},
          {stat: Stat.TOUGHNESS, value: 1000000},
          {stat: Stat.RES3_POWER, value: 20},
          {stat: Stat.NGU_SPEED, value: 300},
          {stat: Stat.RESPAWN, value: 4},
        ],
      },
      {
        itemLevel: 100,
        name: 'Red Meeple Thingy',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/ca/247_-_Red_Meeple_Thingy.png/revision/latest?cb=20190127224512',
        stats: [
          {stat: Stat.POWER, value: 1000000},
          {stat: Stat.TOUGHNESS, value: 1000000},
          {stat: Stat.MAGIC_POWER, value: 24000},
          {stat: Stat.RES3_POWER, value: 20},
          {stat: Stat.AUGMENT_SPEED, value: 500},
        ],
      },
      {
        itemLevel: 100,
        name: 'The D20',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6a/244_-_The_D20.png/revision/latest?cb=20190404220153',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.ENERGY_CAP, value: 1600},
          {stat: Stat.ENERGY_POWER, value: 18000},
          {stat: Stat.ENERGY_BARS, value: 18000},
        ],
      },
      {
        itemLevel: 100,
        name: 'The D8',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/47/245_-_The_D8.png/revision/latest/scale-to-width-down/50?cb=20190404220657',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 500000},
          {stat: Stat.MAGIC_CAP, value: 1600},
          {stat: Stat.MAGIC_POWER, value: 18000},
          {stat: Stat.MAGIC_BARS, value: 18000},
        ],
      },
      {
        itemLevel: 100,
        name: 'A Bag of Trash',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/16/248_-_A_Bag_of_Trash.png/revision/latest?cb=20190404222622',
        stats: [
          {stat: Stat.POWER, value: 1000000},
          {stat: Stat.TOUGHNESS, value: 3000000},
          {stat: Stat.RES3_BARS, value: 10},
          {stat: Stat.ENERGY_CAP, value: 2000},
          {stat: Stat.MAGIC_CAP, value: 2000},
          {stat: Stat.DAYCARE_SPEED, value: 20},
        ],
      },
      {
        itemLevel: 100,
        name: 'Heart Shaped Panties',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/23/249_-_Heart_Shaped_Panties.png/revision/latest?cb=20190404223529',
        stats: [
          {stat: Stat.POWER, value: 1333332},
          {stat: Stat.TOUGHNESS, value: 1333332},
          {stat: Stat.RES3_POWER, value: 13.33},
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
        itemLevel: 100,
        name: 'Numerical Head',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/39/251_-_Numerical_Head.png/revision/latest?cb=20190404230436',
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
        itemLevel: 100,
        name: 'Numerical Chest',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/68/252_-_Numerical_Chest.png/revision/latest?cb=20190404232427',
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
        itemLevel: 100,
        name: 'Numerical Legs',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/253_-_Numerical_Legs.png/revision/latest?cb=20190404232945',
        stats: [
          {stat: Stat.POWER, value: 300000},
          {stat: Stat.TOUGHNESS, value: 4400000},
          {stat: Stat.ENERGY_BARS, value: 17000},
          {stat: Stat.ENERGY_CAP, value: 1800},
          {stat: Stat.MAGIC_CAP, value: 1800},
          {stat: Stat.RES3_POWER, value: 22},
        ],
      },
      {
        itemLevel: 100,
        name: 'Numerical Boots',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/21/254_-_Numerical_Boots.png/revision/latest?cb=20190203144444',
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
        itemLevel: 100,
        name: 'The Number 7',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/de/255_-_The_Number_7.png/revision/latest?cb=20190404234226',
        stats: [
          {stat: Stat.POWER, value: 50000000},
          {stat: Stat.TOUGHNESS, value: 2400000},
          {stat: Stat.MAGIC_POWER, value: 18000},
          {stat: Stat.MAGIC_CAP, value: 2000},
          {stat: Stat.RES3_BARS, value: 20},
        ],
      },
      {
        itemLevel: 100,
        name: '69 Charm',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/46/257_-_69_Charm.png/revision/latest?cb=20190405135754',
        stats: [
          {stat: Stat.POWER, value: 1393938},
          {stat: Stat.TOUGHNESS, value: 1393938},
          {stat: Stat.QUEST_DROP, value: 16},
          {stat: Stat.WANDOOS_SPEED, value: 800},
          {stat: Stat.RES3_CAP, value: 2},
        ],
      },
      {
        itemLevel: 100,
        name: 'Infinity Charm',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4b/256_-_Infinity_Charm.png/revision/latest?cb=20190405131142',
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
  {
    setName: SetName.PARTY, items: [
      {
        itemLevel: 100,
        name: 'Party Hat',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/92/258_-_Party_Hat.png/revision/latest?cb=20190210184658',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 9000000},
          {stat: Stat.MAGIC_CAP, value: 3000},
          {stat: Stat.MAGIC_POWER, value: 32000},
          {stat: Stat.MAGIC_BARS, value: 16000},
          {stat: Stat.ENERGY_BARS, value: 16000},
        ],
      },
      {
        itemLevel: 100,
        name: 'Pogmail Chest',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9b/259_-_Pogmail_Chest.png/revision/latest?cb=20190210184714',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 9000000},
          {stat: Stat.ENERGY_CAP, value: 3200},
          {stat: Stat.MAGIC_POWER, value: 22000},
          {stat: Stat.ENERGY_POWER, value: 22000},
          {stat: Stat.MAGIC_BARS, value: 20000},
        ],
      },
      {
        itemLevel: 100,
        name: 'Tear Away Pants',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/42/260_-_Tear_Away_Pants.png/revision/latest?cb=20190210184733',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 9000000},
          {stat: Stat.ENERGY_POWER, value: 20000},
          {stat: Stat.MAGIC_POWER, value: 20000},
          {stat: Stat.MAGIC_CAP, value: 2400},
          {stat: Stat.MAGIC_BARS, value: 2400},
        ],
      },
      {
        itemLevel: 100,
        name: 'Pizza Boots',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/11/261_-_Pizza_Boots.png/revision/latest?cb=20190210184753',
        stats: [
          {stat: Stat.POWER, value: 500000},
          {stat: Stat.TOUGHNESS, value: 9000000},
          {stat: Stat.ENERGY_CAP, value: 2400},
          {stat: Stat.MAGIC_CAP, value: 2400},
          {stat: Stat.ENERGY_BARS, value: 20000},
          {stat: Stat.MAGIC_POWER, value: 20000},
        ],
      },
      {
        itemLevel: 100,
        name: 'The God of Thunder\'s Hammer',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/14/262_-_The_God_of_Thunder%27s_Hammer.png/revision/latest?cb=20190210184820',
        stats: [
          {stat: Stat.POWER, value: 100000000},
          {stat: Stat.TOUGHNESS, value: 4000000},
          {stat: Stat.MAGIC_POWER, value: 20000},
          {stat: Stat.ENERGY_POWER, value: 20000},
          {stat: Stat.ENERGY_CAP, value: 2600},
          {stat: Stat.ENERGY_BARS, value: 20000},
        ],
      },
      {
        itemLevel: 100,
        name: 'Plastic Red Cup',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2b/263_-_Plastic_Red_Cup.png/revision/latest?cb=20190210184842',
        stats: [
          {stat: Stat.POWER, value: 3000000},
          {stat: Stat.TOUGHNESS, value: 2000000},
          {stat: Stat.ENERGY_CAP, value: 2400},
          {stat: Stat.MAGIC_CAP, value: 2400},
          {stat: Stat.ENERGY_BARS, value: 20000},
          {stat: Stat.MAGIC_BARS, value: 20000},
          {stat: Stat.GOLD_DROP, value: 16000},
        ],
      },
      {
        itemLevel: 100,
        name: 'Party Whistle',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a1/264_-_Party_Whistle.png/revision/latest?cb=20190210184912',
        stats: [
          {stat: Stat.POWER, value: 4000000},
          {stat: Stat.TOUGHNESS, value: 4000000},
          {stat: Stat.NGU_SPEED, value: 400},
          {stat: Stat.ENERGY_POWER, value: 20000},
          {stat: Stat.MAGIC_POWER, value: 20000},
          {stat: Stat.YGGDRASIL_YIELD, value: 10},
        ],
      },
    ],
  },
  {
    setName: SetName.MOBSTER, items: [
      {
        itemLevel: 100,
        name: 'Mobster Hat',
        slot: Slot.HEAD,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/08/265_-_Mobster_Hat.png/revision/latest?cb=20190304210613',
        stats: [
          {stat: Stat.POWER, value: 800000},
          {stat: Stat.TOUGHNESS, value: 20000000},
          {stat: Stat.ENERGY_POWER, value: 34000},
          {stat: Stat.MAGIC_CAP, value: 3200},
          {stat: Stat.ENERGY_CAP, value: 3200},
          {stat: Stat.RES3_CAP, value: 2.8},
        ],
      },
      {
        itemLevel: 100,
        name: 'Mobster Vest',
        slot: Slot.CHEST,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ec/266_-_Mobster_Vest.png/revision/latest?cb=20190304210627',
        stats: [
          {stat: Stat.POWER, value: 800000},
          {stat: Stat.TOUGHNESS, value: 20000000},
          {stat: Stat.ENERGY_CAP, value: 3200},
          {stat: Stat.MAGIC_CAP, value: 3200},
          {stat: Stat.MAGIC_POWER, value: 36000},
          {stat: Stat.RES3_CAP, value: 3.2},
        ],
      },
      {
        itemLevel: 100,
        name: 'Mobster Pants',
        slot: Slot.PANTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2c/267_-_Mobster_Pants.png/revision/latest?cb=20190304210640',
        stats: [
          {stat: Stat.POWER, value: 800000},
          {stat: Stat.TOUGHNESS, value: 20000000},
          {stat: Stat.ENERGY_POWER, value: 26000},
          {stat: Stat.MAGIC_POWER, value: 26000},
          {stat: Stat.ENERGY_BARS, value: 24000},
          {stat: Stat.ENERGY_CAP, value: 2800},
        ],
      },
      {
        itemLevel: 100,
        name: 'Cement Boots',
        slot: Slot.BOOTS,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/82/268_-_Cement_Boots.png/revision/latest?cb=20190304210649',
        stats: [
          {stat: Stat.POWER, value: 800000},
          {stat: Stat.TOUGHNESS, value: 20000000},
          {stat: Stat.ENERGY_POWER, value: 28000},
          {stat: Stat.MAGIC_POWER, value: 28000},
          {stat: Stat.ENERGY_CAP, value: 2600},
          {stat: Stat.RES3_BARS, value: 28},
        ],
      },
      {
        itemLevel: 100,
        name: 'Tommy Gun',
        slot: Slot.WEAPON,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9e/269_-_Tommy_Gun.png/revision/latest?cb=20190304210655',
        stats: [
          {stat: Stat.POWER, value: 200000000},
          {stat: Stat.TOUGHNESS, value: 8000000},
          {stat: Stat.MAGIC_POWER, value: 20000},
          {stat: Stat.ENERGY_POWER, value: 20000},
          {stat: Stat.MAGIC_CAP, value: 3600},
          {stat: Stat.ENERGY_BARS, value: 26000},
          {stat: Stat.MAGIC_BARS, value: 26000},
        ],
      },
      {
        itemLevel: 100,
        name: 'A Garrote',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/4/4d/270_-_A_Garrote.png/revision/latest?cb=20190304210702',
        stats: [
          {stat: Stat.POWER, value: 8000000},
          {stat: Stat.TOUGHNESS, value: 8000000},
          {stat: Stat.DAYCARE_SPEED, value: 20},
          {stat: Stat.ENERGY_POWER, value: 28000},
          {stat: Stat.MAGIC_POWER, value: 28000},
          {stat: Stat.DROP_CHANCE, value: 600},
        ],
      },
      {
        itemLevel: 100,
        name: 'Brass Knuckles',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/71/271_-_Brass_Knuckles.png/revision/latest?cb=20190304210708',
        stats: [
          {stat: Stat.POWER, value: 7000000},
          {stat: Stat.TOUGHNESS, value: 7000000},
          {stat: Stat.ENERGY_CAP, value: 1800},
          {stat: Stat.MAGIC_CAP, value: 1800},
          {stat: Stat.RES3_POWER, value: 24},
          {stat: Stat.GOLD_DROP, value: 24000},
        ],
      },
      {
        itemLevel: 100,
        name: 'The Godmother\'s Wand',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/6c/275_-_The_Godmother%27s_Wand.png/revision/latest?cb=20190405170934',
        stats: [
          {stat: Stat.POWER, value: 3000000},
          {stat: Stat.TOUGHNESS, value: 3000000},
          {stat: Stat.ENERGY_CAP, value: 4000},
          {stat: Stat.MAGIC_CAP, value: 4000},
          {stat: Stat.ENERGY_POWER, value: 40000},
          {stat: Stat.MAGIC_POWER, value: 40000},
          {stat: Stat.YGGDRASIL_YIELD, value: 15},
        ],
      },
      {
        itemLevel: 100,
        name: 'Molotov Cocktail',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f7/273_-_Molotov_Cocktail.png/revision/latest?cb=20190405170905',
        stats: [
          {stat: Stat.POWER, value: 20000000},
          {stat: Stat.TOUGHNESS, value: 20000000},
          {stat: Stat.NGU_SPEED, value: 400},
          {stat: Stat.SEED_DROP, value: 100},
          {stat: Stat.WANDOOS_SPEED, value: 1600},
        ],
      },
      {
        itemLevel: 100,
        name: 'Violin Case',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e8/272_-_Violin_Case.png/revision/latest?cb=20190405170845',
        stats: [
          {stat: Stat.POWER, value: 14000000},
          {stat: Stat.TOUGHNESS, value: 14000000},
          {stat: Stat.RES3_POWER, value: 26},
          {stat: Stat.ENERGY_CAP, value: 2600},
          {stat: Stat.MAGIC_CAP, value: 2600},
          {stat: Stat.ENERGY_BARS, value: 26000},
          {stat: Stat.MAGIC_BARS, value: 26000},
        ],
      },
      {
        itemLevel: 100,
        name: 'The Godmother\'s Ring',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e3/274_-_The_Godmother%27s_Ring.png/revision/latest?cb=20190405170919',
        stats: [
          {stat: Stat.POWER, value: 30000000},
          {stat: Stat.TOUGHNESS, value: 30000000},
          {stat: Stat.GOLD_DROP, value: 50000},
          {stat: Stat.DROP_CHANCE, value: 1000},
          {stat: Stat.RES3_CAP, value: 5},
        ],
      },
      {
        itemLevel: 100,
        name: 'Left Fairy Wing',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e4/276_-_Left_Fairy_Wing.png/revision/latest?cb=20190405170949',
        stats: [
          {stat: Stat.POWER, value: 80000000},
          {stat: Stat.TOUGHNESS, value: 80000000},
          {stat: Stat.RES3_POWER, value: 66},
          {stat: Stat.RES3_CAP, value: 10},
          {stat: Stat.ENERGY_CAP, value: 6600},
        ],
      },
      {
        itemLevel: 100,
        name: 'Right Fairy Wing',
        slot: Slot.ACCESSORY,
        img: 'https://vignette.wikia.nocookie.net/nguadventure/images/6/66/277_-_Right_Fairy_Wing.png/revision/latest?cb=20190405171006',
        stats: [
          {stat: Stat.POWER, value: 80000000},
          {stat: Stat.TOUGHNESS, value: 80000000},
          {stat: Stat.MAGIC_POWER, value: 66000},
          {stat: Stat.MAGIC_BARS, value: 66000},
          {stat: Stat.MAGIC_CAP, value: 6600},
          {stat: Stat.ENERGY_BARS, value: 66000},
          {stat: Stat.ENERGY_POWER, value: 66000},
        ],
      },
    ],
  },
  {
    setName: SetName.TYPO, items:
      [
        {
          itemLevel: 100,
          name: 'Hamlet',
          slot: Slot.HEAD,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9f/301_-_Hamlet.png/revision/latest?cb=20190516192018',
          stats: [
            {stat: Stat.POWER, value: 1200000},
            {stat: Stat.TOUGHNESS, value: 30000000},
            {stat: Stat.ENERGY_BARS, value: 62000},
            {stat: Stat.MAGIC_BARS, value: 62000},
            {stat: Stat.RES3_POWER, value: 56},
            {stat: Stat.RES3_BARS, value: 60},
          ],
        },
        {
          itemLevel: 100,
          name: 'Chess Plate',
          slot: Slot.CHEST,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/85/302_-_Chess_Plate.png/revision/latest?cb=20190516192029',
          stats: [
            {stat: Stat.POWER, value: 1200000},
            {stat: Stat.TOUGHNESS, value: 32000000},
            {stat: Stat.ENERGY_POWER, value: 58000},
            {stat: Stat.MAGIC_POWER, value: 58000},
            {stat: Stat.RES3_CAP, value: 5.4},
            {stat: Stat.RES3_BARS, value: 80},
          ],
        },
        {
          itemLevel: 100,
          name: 'Logs',
          slot: Slot.PANTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/06/303_-_Logs.png/revision/latest?cb=20190516192037',
          stats: [
            {stat: Stat.POWER, value: 1200000},
            {stat: Stat.TOUGHNESS, value: 31000000},
            {stat: Stat.ENERGY_CAP, value: 7000},
            {stat: Stat.MAGIC_CAP, value: 7000},
            {stat: Stat.RES3_CAP, value: 6.4},
            {stat: Stat.RES3_POWER, value: 56},
          ],
        },
        {
          itemLevel: 100,
          name: 'Booms',
          slot: Slot.BOOTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/2/2c/304_-_Booms.png/revision/latest?cb=20190516192054',
          stats: [
            {stat: Stat.POWER, value: 1200000},
            {stat: Stat.TOUGHNESS, value: 30000000},
            {stat: Stat.ENERGY_POWER, value: 70000},
            {stat: Stat.MAGIC_POWER, value: 70000},
            {stat: Stat.RES3_POWER, value: 60},
            {stat: Stat.RES3_CAP, value: 6.2},
          ],
        },
        {
          itemLevel: 100,
          name: 'Wee pin',
          slot: Slot.WEAPON,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/7f/305_-_Wee_pin.png/revision/latest?cb=20190516192103',
          stats: [
            {stat: Stat.POWER, value: 320000000},
            {stat: Stat.TOUGHNESS, value: 12000000},
            {stat: Stat.ENERGY_POWER, value: 50000},
            {stat: Stat.MAGIC_POWER, value: 50000},
            {stat: Stat.ENERGY_BARS, value: 68000},
            {stat: Stat.MAGIC_BARS, value: 68000},
            {stat: Stat.RES3_CAP, value: 7},
          ],
        },
        {
          itemLevel: 100,
          name: 'The Ass-cessory',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/1a/306_-_The_Ass-cessory.png/revision/latest?cb=20190516192112',
          stats: [
            {stat: Stat.POWER, value: 24000000},
            {stat: Stat.TOUGHNESS, value: 24000000},
            {stat: Stat.ENERGY_CAP, value: 6600},
            {stat: Stat.ENERGY_POWER, value: 66000},
            {stat: Stat.MAGIC_CAP, value: 6600},
            {stat: Stat.MAGIC_POWER, value: 66000},
            {stat: Stat.YGGDRASIL_YIELD, value: 10},
          ],
        },
        {
          itemLevel: 100,
          name: 'Eye of ELXU',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/05/307_-_Eye_of_ELXU.png/revision/latest?cb=20190516192121',
          stats: [
            {stat: Stat.POWER, value: 13333332},
            {stat: Stat.TOUGHNESS, value: 13333332},
            {stat: Stat.RES3_CAP, value: 6.4},
            {stat: Stat.RES3_POWER, value: 70},
            {stat: Stat.RES3_BARS, value: 58},
          ],
        },
      ]
  },
  {
    setName: SetName.FAD, items:
      [
        {
          itemLevel: 100,
          name: 'Spinning Tophat',
          slot: Slot.HEAD,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b8/308_-_Spinning_Tophat.png/revision/latest?cb=20190516192131',
          stats: [
            {stat: Stat.POWER, value: 1800000},
            {stat: Stat.TOUGHNESS, value: 44000000},
            {stat: Stat.ENERGY_POWER, value: 122000},
            {stat: Stat.MAGIC_POWER, value: 122000},
            {stat: Stat.RES3_POWER, value: 104},
            {stat: Stat.RES3_BARS, value: 124},
          ],
        },
        {
          itemLevel: 100,
          name: 'Demonic Flurbie Chestplate',
          slot: Slot.CHEST,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e3/309_-_Demonic_Flurbie_Chestplate.png/revision/latest?cb=20190516192140',
          stats: [
            {stat: Stat.POWER, value: 1800000},
            {stat: Stat.TOUGHNESS, value: 48000000},
            {stat: Stat.ENERGY_BARS, value: 80000},
            {stat: Stat.ENERGY_CAP, value: 13200},
            {stat: Stat.MAGIC_BARS, value: 80000},
            {stat: Stat.MAGIC_CAP, value: 13200},
            {stat: Stat.RES3_CAP, value: 14},
          ],
        },
        {
          itemLevel: 100,
          name: 'AAA Battery Legs',
          slot: Slot.PANTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/88/310_-_AAA_Battery_Legs.png/revision/latest?cb=20190516192149',
          stats: [
            {stat: Stat.POWER, value: 1800000},
            {stat: Stat.TOUGHNESS, value: 46000000},
            {stat: Stat.ENERGY_POWER, value: 114000},
            {stat: Stat.MAGIC_POWER, value: 114000},
            {stat: Stat.RES3_CAP, value: 12.6},
            {stat: Stat.RES3_POWER, value: 124},
          ],
        },
        {
          itemLevel: 100,
          name: 'Slinky Boots',
          slot: Slot.BOOTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/34/311_-_Slinky_Boots.png/revision/latest?cb=20190516192158',
          stats: [
            {stat: Stat.POWER, value: 1800000},
            {stat: Stat.TOUGHNESS, value: 42000000},
            {stat: Stat.ENERGY_BARS, value: 100000},
            {stat: Stat.MAGIC_BARS, value: 100000},
            {stat: Stat.RES3_BARS, value: 124},
            {stat: Stat.RES3_POWER, value: 138},
          ],
        },
        {
          itemLevel: 100,
          name: 'THE MALF SLAMMER',
          slot: Slot.WEAPON,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/18/312_-_THE_MALF_SLAMMER.png/revision/latest?cb=20190516192621',
          stats: [
            {stat: Stat.POWER, value: 500000000},
            {stat: Stat.TOUGHNESS, value: 20000000},
            {stat: Stat.ENERGY_POWER, value: 124000},
            {stat: Stat.MAGIC_POWER, value: 124000},
            {stat: Stat.RES3_CAP, value: 14},
            {stat: Stat.RES3_POWER, value: 128},
          ],
        },
        {
          itemLevel: 100,
          name: 'Rare Foil Pokeyman Card',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3a/313_-_Rare_Foil_Pokeyman_Card.png/revision/latest?cb=20190516192629',
          stats: [
            {stat: Stat.POWER, value: 38000000},
            {stat: Stat.TOUGHNESS, value: 38000000},
            {stat: Stat.RES3_CAP, value: 24},
            {stat: Stat.DROP_CHANCE, value: 800},
            {stat: Stat.GOLD_DROP, value: 100000},
          ],
        },
        {
          itemLevel: 100,
          name: 'A handful of Krazy Bonez',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f6/314_-_A_handful_of_Krazy_Bonez.png/revision/latest?cb=20190516192651',
          stats: [
            {stat: Stat.POWER, value: 40000000},
            {stat: Stat.TOUGHNESS, value: 40000000},
            {stat: Stat.RES3_CAP, value: 14},
            {stat: Stat.RES3_POWER, value: 120},
            {stat: Stat.QUEST_DROP, value: 14},
          ],
        },
      ]
  },
  {
    setName: SetName.JRPG, items:
      [
        {
          itemLevel: 100,
          name: 'Buster Sword Top',
          slot: Slot.HEAD,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/04/315_-_Buster_Sword_Top.png/revision/latest?cb=20190517012207',
          stats: [
            {stat: Stat.POWER, value: 2800000},
            {stat: Stat.TOUGHNESS, value: 76000000},
            {stat: Stat.ENERGY_POWER, value: 170000},
            {stat: Stat.MAGIC_POWER, value: 170000},
            {stat: Stat.RES3_POWER, value: 180},
            {stat: Stat.RES3_CAP, value: 16.6},
          ],
        },
        {
          itemLevel: 100,
          name: 'Buster Sword Upper',
          slot: Slot.CHEST,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/3e/316_-_Buster_Sword_Upper.png/revision/latest?cb=20190517012319',
          stats: [
            {stat: Stat.POWER, value: 3000000},
            {stat: Stat.TOUGHNESS, value: 74000000},
            {stat: Stat.RES3_CAP, value: 18.4},
            {stat: Stat.RES3_BARS, value: 180},
            {stat: Stat.RES3_POWER, value: 176},
          ],
        },
        {
          itemLevel: 100,
          name: 'Buster Sword Lower',
          slot: Slot.PANTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/7/76/317_-_Buster_Sword_Lower.png/revision/latest?cb=20190517012401',
          stats: [
            {stat: Stat.POWER, value: 3000000},
            {stat: Stat.TOUGHNESS, value: 78000000},
            {stat: Stat.ENERGY_BARS, value: 174000},
            {stat: Stat.MAGIC_BARS, value: 174000},
            {stat: Stat.RES3_CAP, value: 17.8},
            {stat: Stat.RES3_POWER, value: 188},
          ],
        },
        {
          itemLevel: 100,
          name: 'Buster Sword Bottom',
          slot: Slot.BOOTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/3/33/318_-_Buster_Sword_Bottom.png/revision/latest?cb=20190517012420',
          stats: [
            {stat: Stat.POWER, value: 3000000},
            {stat: Stat.TOUGHNESS, value: 76000000},
            {stat: Stat.ENERGY_CAP, value: 18800},
            {stat: Stat.MAGIC_CAP, value: 18800},
            {stat: Stat.ENERGY_POWER, value: 178000},
            {stat: Stat.MAGIC_POWER, value: 178000},
            {stat: Stat.RES3_POWER, value: 182},
          ],
        },
        {
          itemLevel: 100,
          name: 'Gift Shop Buster Sword Replica',
          slot: Slot.WEAPON,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/8/85/319_-_Gift_Shop_Buster_Sword_Replica.png/revision/latest?cb=20190517012441',
          stats: [
            {stat: Stat.POWER, value: 800000000},
            {stat: Stat.TOUGHNESS, value: 32000000},
            {stat: Stat.ENERGY_BARS, value: 174000},
            {stat: Stat.MAGIC_BARS, value: 174000},
            {stat: Stat.RES3_BARS, value: 182},
            {stat: Stat.RES3_POWER, value: 200},
          ],
        },
        {
          itemLevel: 100,
          name: 'A Gigantic Zipper',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/1/11/320_-_A_Gigantic_Zipper.png/revision/latest?cb=20190517012459',
          stats: [
            {stat: Stat.POWER, value: 42000000},
            {stat: Stat.TOUGHNESS, value: 46000000},
            {stat: Stat.ENERGY_POWER, value: 176000},
            {stat: Stat.MAGIC_POWER, value: 176000},
            {stat: Stat.RES3_POWER, value: 200},
            {stat: Stat.RES3_BARS, value: 194},
          ],
        },
        {
          itemLevel: 100,
          name: 'Anime Hero Wig',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/00/321_-_Anime_Hero_Wig.png/revision/latest?cb=20190517012515',
          stats: [
            {stat: Stat.POWER, value: 60000000},
            {stat: Stat.TOUGHNESS, value: 60000000},
            {stat: Stat.ENERGY_POWER, value: 192000},
            {stat: Stat.MAGIC_POWER, value: 192000},
            {stat: Stat.RES3_CAP, value: 17.6},
            {stat: Stat.YGGDRASIL_YIELD, value: 8},
          ],
        },
      ]
  },
  {
    setName: SetName.EXILE, items:
      [
        {
          itemLevel: 100,
          name: 'Hat of Greed',
          slot: Slot.HEAD,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ea/322_-_Hat_of_Greed.png/revision/latest?cb=20190517012534',
          stats: [
            {stat: Stat.POWER, value: 4400000},
            {stat: Stat.TOUGHNESS, value: 114000000},
            {stat: Stat.GOLD_DROP, value: 200000},
            {stat: Stat.RES3_CAP, value: 24},
            {stat: Stat.RES3_POWER, value: 224},
          ],
        },
        {
          itemLevel: 100,
          name: 'Blue Eyes Ultimate Chestplate',
          slot: Slot.CHEST,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/c7/342_-_Blue_Eyes_Ultimate_Chestplate.png/revision/latest?cb=20190517013157',
          stats: [
            {stat: Stat.POWER, value: 11000000},
            {stat: Stat.TOUGHNESS, value: 320000000},
            {stat: Stat.HACK_SPEED, value: 40},
            {stat: Stat.RES3_CAP, value: 230},
            {stat: Stat.WISH_SPEED, value: 50},
          ],
        },
        {
          itemLevel: 100,
          name: 'Blue Eyes White Chestplate',
          slot: Slot.CHEST,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b6/323_-_Blue_Eyes_White_Chestplate.png/revision/latest?cb=20190517012552',
          stats: [
            {stat: Stat.POWER, value: 4600000},
            {stat: Stat.TOUGHNESS, value: 120000000},
            {stat: Stat.ENERGY_CAP, value: 23200},
            {stat: Stat.MAGIC_CAP, value: 23200},
            {stat: Stat.ENERGY_BARS, value: 206000},
            {stat: Stat.MAGIC_BARS, value: 206000},
            {stat: Stat.RES3_POWER, value: 236},
          ],
        },
        {
          itemLevel: 100,
          name: 'Trap Pants',
          slot: Slot.PANTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/d/d6/324_-_Trap_Pants.png/revision/latest?cb=20190517012609',
          stats: [
            {stat: Stat.POWER, value: 4400000},
            {stat: Stat.TOUGHNESS, value: 118000000},
            {stat: Stat.ENERGY_POWER, value: 240000},
            {stat: Stat.MAGIC_POWER, value: 240000},
            {stat: Stat.RES3_CAP, value: 26},
            {stat: Stat.RES3_BARS, value: 220},
          ],
        },
        {
          itemLevel: 100,
          name: 'All the other Titans\' Missing Shoes',
          slot: Slot.BOOTS,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/b/b6/325_-_All_the_other_Titans%27_Missing_Shoes.png/revision/latest?cb=20190517012908',
          stats: [
            {stat: Stat.POWER, value: 4400000},
            {stat: Stat.TOUGHNESS, value: 116000000},
            {stat: Stat.ENERGY_CAP, value: 23200},
            {stat: Stat.ENERGY_POWER, value: 236000},
            {stat: Stat.MAGIC_CAP, value: 23200},
            {stat: Stat.MAGIC_POWER, value: 236000},
            {stat: Stat.RES3_POWER, value: 226},
          ],
        },
        {
          itemLevel: 100,
          name: 'The Disk of Dueling',
          slot: Slot.WEAPON,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/e5/326_-_The_Disk_of_Dueling.png/revision/latest?cb=20190517012941',
          stats: [
            {stat: Stat.POWER, value: 1240000000},
            {stat: Stat.TOUGHNESS, value: 50000000},
            {stat: Stat.ENERGY_BARS, value: 200000},
            {stat: Stat.MAGIC_BARS, value: 200000},
            {stat: Stat.RES3_CAP, value: 26},
            {stat: Stat.RES3_POWER, value: 236},
          ],
        },
        {
          itemLevel: 100,
          name: 'The Joker',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/e/ea/327_-_The_Joker.png/revision/latest?cb=20190517012952',
          stats: [
            {stat: Stat.POWER, value: 133200000},
            {stat: Stat.TOUGHNESS, value: 133200000},
            {stat: Stat.COOKING, value: 20000000},
            {stat: Stat.WISH_SPEED, value: 10},
            {stat: Stat.RES3_CAP, value: 80},
          ],
        },
        {
          itemLevel: 100,
          name: 'Antlers of the Exile',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/f/f8/328_-_Antlers_of_the_Exile.png/revision/latest?cb=20190517013006',
          stats: [
            {stat: Stat.POWER, value: 160000000},
            {stat: Stat.ENERGY_CAP, value: 24000},
            {stat: Stat.ENERGY_POWER, value: 200000},
            {stat: Stat.MAGIC_CAP, value: 24000},
            {stat: Stat.MAGIC_POWER, value: 200000},
            {stat: Stat.RES3_POWER, value: 240},
          ],
        },
        {
          itemLevel: 100,
          name: 'The Credit Card',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/a/a9/329_-_The_Credit_Card.png/revision/latest?cb=20190517013029',
          stats: [
            {stat: Stat.ENERGY_BARS, value: 340000},
            {stat: Stat.GOLD_DROP, value: 500000},
            {stat: Stat.MAGIC_BARS, value: 340000},
            {stat: Stat.QUEST_DROP, value: 10},
          ],
        },
        {
          itemLevel: 100,
          name: 'Tentacle of the Exile',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cf/330_-_Tentacle_of_the_Exile.png/revision/latest?cb=20190517013043',
          stats: [
            {stat: Stat.POWER, value: 220000000},
            {stat: Stat.TOUGHNESS, value: 200000000},
            {stat: Stat.ENERGY_POWER, value: 380000},
            {stat: Stat.MAGIC_POWER, value: 380000},
            {stat: Stat.RES3_CAP, value: 36},
            {stat: Stat.RES3_BARS, value: 360},
          ],
        },
        {
          itemLevel: 100,
          name: 'The Skip Card',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/0/03/331_-_The_Skip_Card.png/revision/latest?cb=20190517013059',
          stats: [
            {stat: Stat.POWER, value: 240000000},
            {stat: Stat.TOUGHNESS, value: 240000000},
            {stat: Stat.ENERGY_POWER, value: 56000},
            {stat: Stat.MAGIC_POWER, value: 56000},
            {stat: Stat.RES3_POWER, value: 520},
            {stat: Stat.NGU_SPEED, value: 500},
          ],
        },
        {
          itemLevel: 100,
          name: 'Antennae of the Exile',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/93/332_-_Antennae_of_the_Exile.png/revision/latest?cb=20190517013114',
          stats: [
            {stat: Stat.POWER, value: 200000000},
            {stat: Stat.TOUGHNESS, value: 200000000},
            {stat: Stat.ENERGY_CAP, value: 52000},
            {stat: Stat.HACK_SPEED, value: 24},
            {stat: Stat.MAGIC_CAP, value: 52000},
            {stat: Stat.RES3_POWER, value: 540},
          ],
        },
        {
          itemLevel: 100,
          name: 'The Black Lotus',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/c/cc/333_-_The_Black_Lotus.png/revision/latest?cb=20190517013127',
          stats: [
            {stat: Stat.POWER, value: 300000000},
            {stat: Stat.TOUGHNESS, value: 300000000},
            {stat: Stat.ENERGY_CAP, value: 80000},
            {stat: Stat.MAGIC_CAP, value: 80000},
            {stat: Stat.RES3_CAP, value: 90},
            {stat: Stat.WISH_SPEED, value: 40},
          ],
        },
        {
          itemLevel: 100,
          name: 'Buster of the Exile',
          slot: Slot.ACCESSORY,
          img: 'https://vignette.wikia.nocookie.net/nguadventure/images/9/9a/334_-_Buster_of_the_Exile.png/revision/latest?cb=20190517013140',
          stats: [
            {stat: Stat.POWER, value: 500000000},
            {stat: Stat.TOUGHNESS, value: 500000000},
            {stat: Stat.ENERGY_POWER, value: 800000},
            {stat: Stat.HACK_SPEED, value: 40},
            {stat: Stat.MAGIC_POWER, value: 800000},
            {stat: Stat.RES3_POWER, value: 800},
          ],
        },
      ]
  }
];


export function getAllAccessories(): Item[] {
  const items: Item[] = [];
  itemList.forEach(itemSet => {
    itemSet.items.forEach(item => {
      if (item.slot == Slot.ACCESSORY) {
        items.push(item);
      }
    });
  });
  return items;
}
