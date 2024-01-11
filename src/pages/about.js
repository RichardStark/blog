import * as React from 'react'
import {Link} from 'gatsby'

const AboutPage = () =>{
  return(
    <main>
      <h1>关于我</h1>
      <Link to='/'>Home</Link>
      <p>
      我是一名大数据工程师，喜欢分布式与全栈开发的相关技术。
这是我的技术博客，在这里我会分享一些自己的业余翻译项目、技术博客以及学习心得。
我喜欢FP，也喜欢OOP。
我觉得Unix 是世界上最伟大的发明，Linux（和Git） 发明者Linus yyds。
我热爱苹果的大多数产品，它和任天堂都是了不起的公司。
我信奉终身学习，我希望自己80岁的时候仍然对新事物感到好奇，并能去学习。
我爱好游泳和撸铁。我喜欢咖啡、精酿和云南的生牛肉串。
😊wechat微信:richardzhangv
      </p>
    </main>
  )
}

export const Head = () => <title>关于页</title>

export default AboutPage