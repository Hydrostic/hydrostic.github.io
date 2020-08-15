// 配置
window.Config = {

  // 站点名
  SiteName: '站点状态 - 水儿の服务',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur852484-9a5b49617cb87028b0123141'
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '博客',
      url: 'https://hydrostic.com/'
    },
    {
      text: '云盘',
      url: 'https://pan.hydrostic.com/'
    },
    {
      text: '工具',
      url: 'https://tool.hydrostic.com:1315/'
    }
  ]
};
