
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;

// 首页配置
export const homeConfig = {
  // 标题
  title: '214送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '朱', },
    { key: 's', wording: '珠', },
    { key: 'd', wording: '！！', },
  ],
  // 最终解释权归属人
  owner: '童鑫',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: 'Dior口红', alias: 'Dior口红', image: '/images/1.png',  description: '「经典迷人色彩，彰显奢华魅力」' },
  { key: 'w', name: '童鑫的爱（抽象）', alias: '秘密', image: '/images/2.png',  description: '“最不值钱的”' },
  { key: 'e', name: '爱马仕香水', alias: '爱马仕香水', image: '/images/3.png',  description: '「好香！」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想不出来就这个”' },
  { key: 't', name: 'Dior星空套装', alias: 'Dior星空', image: '/images/5.png',  description: '「百变唇妆，精美雕琢」' },
  { key: 'y', name: '300红包', alias: '300', image: '/images/6.png',  description: '“亏大了”' },
  { key: 'u', name: '童鑫的单日无上限陪伴时间十天', alias: '陪伴', image: '/images/7.png',  description: '“第二不值钱的”' },
  { key: 'i', name: '童鑫的衣服', alias: '衣服', image: '/images/8.png',  description: '「来自于lv的M码衣服」' },
];
