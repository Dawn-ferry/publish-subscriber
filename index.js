
/* 
Publish subscriber model


想象下 微信公众号平台

发布者【公众号】    订阅者【普通人】

*/

// 模式中心 ，管理的
var bus = {
  list: [],
  // 发布者
  publish(context) {
    this.list.map(callback => {
      callback && callback(context)
    })

  },
  // 订阅者  
  // 帮订阅者们的操作存起来，由发布者去执行
  subscriber(callback) {
    this.list.push(callback)
  }

}
// 订阅者 可以是多个
// 订阅者 行为，怎么去调用 将回调函数作为形参传递

bus.subscriber((val) => {
  console.log('我是订阅者', val);
})
bus.subscriber((val) => {
  console.log('我是订阅者2', val);
})
// bus.publish()
/* 
一般发布者 是异步的 
为什么是异步的，因为发布者不能在订阅者之前执行，所以利用js机制使用异步形式回调使发布者一定在发布者之后执行

*/

setTimeout(() => {
  bus.publish('我发布一条文章-哈哈')
}, 0);
