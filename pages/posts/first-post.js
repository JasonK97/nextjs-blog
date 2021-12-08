import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

import Layout from '../../components/layout'

import profilePic from '../images/profile.jpg'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <Image
        src={profilePic}
        height={144}
        width={144}
        alt='profile pic'
      />
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}