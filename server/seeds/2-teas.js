
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE tea RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('tea').insert([
        {
          id: 1,
          name: 'Silver Needle',
          chinese_name: '銀針',
          tea_type_id: 1,
          description: 'A white tea that looks like silver needles',
          flavor: 'A subtly sweet, slightly  breadlike quality in the flavor with a hint of grassiness',
          science: 'Silver Needle has science',
          process: 'Silver Needle has a process',
          history: 'Silver Needle has a history',
          lore: 'Silver Needle has lore',
          pic_url: 'dummyUrl',
          lat: 28.3643341,
          long: 102.9686969

        },
        {
          id: 2,
          name: 'Dragonwell',
          chinese_name: '龍井',
          tea_type_id: 3,
          description: 'A special green tea with a different curing process.',
          flavor: 'Smooth, grassy, nutty.',
          science: 'High in polyphenols as a green tea, low in tannins so it\'s easier on the stomach and smoother than most green teas.',
          process: 'Pan fried in a wok by hand, giving it its nutty flavor and evaporating tannins.',
          history: 'This tea was originally reserved for the emperor.',
          lore: 'A tribute tea, given to the emperor as tribute and payment.',
          pic_url: 'dummyUrl',
          lat: 30.177229,
          long: 119.8381429

        },
        {
          id: 3,
          name: 'Keemun',
          chinese_name: '祁門',
          tea_type_id: 5,
          description: 'It\'s a red tea',
          flavor: 'Slightly like unsweetend cocoa & lightly breadlike',
          science: 'Good for the arteries',
          process: 'Fully roasted and oxidized',
          history: 'There\'s some history behind keemun',
          lore: 'There\'s also some lore behind keemun',
          pic_url: 'dummyUrl',
          lat: 29.811452,
          long: 117.648321

        },
        {
          id: 4,
          name: ' Golden Seal',
          chinese_name: 'Golden Something',
          tea_type_id: 6,
          description: 'Aged for at least 5 years and in cake form.',
          flavor: 'Smooth, not very tannic, flavors of peat, forest floor, tree roots.',
          science: 'Probiotic, contains aspergillus. Being aged for only 5 to 8 years generally, it contains a high amount of caffeine for a tea.',
          process: 'Leaves are fermented, packed into a cake, and aged for at least 5 years.',
          history: 'Puer has a very old history.',
          lore: 'This particular tea probably has lore as well.',
          pic_url: 'dummyUrl',
          lat: 25.4408268,
          long: 98.8064036

        },
        {
          id: 5,
          name: 'Golden Horse',
          chinese_name: 'need to find',
          tea_type_id: 2,
          description: 'It\'s good',
          flavor: 'Slightly bready, very smooth.',
          science: ' GABA, good for the arteries, low in caffiene',
          process: 'Oxidized white tea.',
          history: 'There\'s some history behind this tea',
          lore: 'There\'s some lore behind this tea',
          pic_url: 'dummyUrl',
          lat: null,
          long: null

        },
        {
          id: 6,
          name: 'Iron Goddess',
          chinese_name: '鐵觀音',
          tea_type_id: 4,
          description: 'Named for Guanyin, the Iron Buddha.',
          flavor: 'Honeysuckle & gardenias',
          science: 'Good for caffeine, still high in antioxidants',
          process: 'There is a process for Iron Goddess',
          history: 'There is a history for Iron Goddess',
          lore: 'There is lore surrounding Iron Goddess',
          pic_url: 'dummyUrl',
          lat: 25.087315,
          long: 118.002119

        },
      ]);
    });
};
