
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE tea_type RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('tea_type').insert([
        {
         id: 1,
         type: 'White Tea',
         chinese_name: '白茶',
         description: 'White tea is given it\'s name from the color of the leaves and liquid, it generally creates a tea which is almost clear in color.',
         health_benefits: 'Antiaging, immunity boost, lower caffeine',
         science: 'Given that white tea is taken from the budding leaves which have not yet matured into a green tea. It is the highest in antioxidants and lower in caffeine than other teas.',
         process: 'The process for white tea is the same as that for green, however the leaves are younger than those of green tea.',
         history: 'White tea has history',
         lore: 'White tea has lore'
        },
        {id: 2,
         type: 'Yellow Tea',
         chinese_name: '黃茶',
         description: 'The leaves are yellow to brown in color, often with golden edges and or tips.',
         health_benefits: 'Aids digestion, lower caffeine',
         science: 'Yellow tea has science',
         process: 'Yellow tea is produced by oxidizing white tea.',
         history: 'Yellow tea has history',
         lore: 'Yellow tea has lore'
        },
        {id: 3,
         type: 'Green Tea',
         chinese_name: '綠茶',
         description: 'Green tea is the name for tea which has been processed the least. It is the base for all teas except for white tea.',
         health_benefits: ' Detoxification, antiaging, calming, reduced blood sugar',
         science: 'Green tea has a large amount of polyphenol antioxidents.',
         process: 'Green tea is created by simply drying the fresh green leaves either in the sun or by baking them shortly to freeze the oxidation process, allowing them to keep their green color.',
         history: 'Green tea is the oldest kind of tea, it has been used for thousands of years as a medicine.',
         lore: ' It was said that Shennong (神農), the legendary Chinese figure who created Chinese medicine and agriculture, was the one who discovered Green tea. He was out in the mountains one day trying different herbs to discern their effects on the body. While doing this he fell ill and became dizzy, he picked some leaves off of a nearby tree and boiled them to find that the resulting liquid dispelled his dizziness, caused him to salivate and lifted his spirits. He studied every facet of the leaves and took note so that he would be able to find them again. These leaves were what we have come to know today as tea, or as he wrote it 茶.'
        },
        {id: 4,
         type: 'Oolong Tea',
         chinese_name: '烏龍茶',
         description: 'Oolong tea is the most diverse in flavor of all of the tea types. The leaves can range anywhere from nearly green to nearly red.',
         health_benefits: 'Digestion, Higher Caffeine, Lower cholesterol, suppress appetite. ',
         science: 'Oolong has science',
         process: 'Oolong\'s are produced by oxidizing and roasting green teas to various degrees, but halting short of creating a red tea.',
         history: 'Oolong, the name, originates in Taiwan. However, many teas from China can be counted as Oolongs.',
         lore: 'The word, Wulong in Chinese Pinyin, is said to be an old word for mistake. As such it is said that Oolong tea began its life as just that, a mistake. Although they found that Oolongs can be extremely good in their own right and now there are dozens, if not hundreds of different kinds of Oolongs.'
        },
        {id: 5,
         type: 'Red Tea',
         chinese_name: '紅茶',
         description: ' Red tea, or black tea as it is known in the western world. The leaves appear black in color, however the tea itself is usually creates a red to brown liquid, hence the name.',
         health_benefits: 'Digestion, lower cholesterol, higher caffeine',
         science: 'GABA, Red tea has science',
         process: 'Red tea is created by fully oxidizing and roasting a green tea.',
         history: 'Red tea has history',
         lore: 'Red tea has lore'
        },
        {id: 6,
         type: 'Puer Tea',
         chinese_name: '普洱茶',
         description: 'Tea leaves which have gone through a fermentation process.',
         health_benefits: 'Digestion, lower cholesterol, high caffeine, low acid',
         science: 'Probiotic',
         process: 'Processed starting a fermentation, then drying the leaves, packing them and leaving them to age for years. ',
         history: 'Originates from Yunnan province in Southwest China. One of the oldest forms of tea, it was used as currency in the past.',
         lore: 'Puer has Lore.'
        },
      ]);
    });
};
