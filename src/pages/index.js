import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return(
    <main>
      <Layout pageTitle='首页'>
        <p>这是一个测试页。</p>
        <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/fh_video.jpg"
        />
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="张理查的海拉鲁" />

export default IndexPage