export const USER_CONFIG = {
  /**
   * 公众号配置
   */
  
  // 公众号APP_ID
  APP_ID: "wx86a7f7b74b4883b9",
  
  // 公众号APP_SECRET
  APP_SECRET: "d3785c7a796007f8917a8d957ea9aeeb",
  
  //模版消息id
  TEMPLATE_ID:"K3sM1VxzO5n-_sfdV-KUb_rDnKL6KP311GBgxDLCvdk",
  
  //接受公众号消息的微信号
  USERS:["oAVYI6HvH5GOlAS8y-H7DaQWc9as","oAVYI6I5ysLvJtoS-TEyXFQq3XeA"],
  
  /**
  *信息配置
  */
  
  /**天气相关*/
  
  //所在省份
  PROVINCE:"四川",
  //所在城市
  CITY:"成都",
  
  /**重要节日相关*/
  
      // 专属节日提醒，如果你在这里填写了节日提醒，就不会执行FESTIVALS的提醒了, 和FESTIVALS的配置方法相同，可以往下查看，我这里就不重复写了
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {"type": "*生日", "name": "🐑宝", "year": "1995", "date": "12-11"},
        {"type": "生日", "name": "🐑宝", "year": "1995", "date": "12-11"},
        {"type": "节日", "name": "喜欢你的第", "year": "2022", "date": "06-06"},
      ],
    },

      SLOT_LIST: [
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
        "因为太喜欢你，所以看谁都像是情敌。",
        "申请成为你爱里的永久居民。",
        "乖乖，今天的你又比昨天更好看了",
        "遇见你，就好像捡到了100斤的运气",
      ]},
    // 你可以不断按格式往下增加
    // ...
  ],
  
  
}
