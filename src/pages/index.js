import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return(
    <main>
      <Layout pageTitle='首页'>
        <p>这是一个测试页。</p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>张理查的海拉鲁</title>

export default IndexPage