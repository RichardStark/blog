import * as React from 'react'
import {Link} from 'gatsby'

const IndexPage = () => {
  return(
    <main>
      <h1>My First Gatsby Blog!</h1>
      <Link to='/about'>About</Link>
      <p>这是一个测试页。</p>
    </main>
  )
}

export const Head = () => <title>张理查的海拉鲁</title>

export default IndexPage