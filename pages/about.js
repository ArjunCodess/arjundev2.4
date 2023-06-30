import Head from 'next/head'
import About from './components/About'

const about = () => {
  return (
    <>
    <Head>
        <title>About - ArjunCodess</title>
        <meta
          name="description"
          content="About: Portfolio of a Passionate Talented Young Full-Stack Developer from India 🇮🇳"
        />
    </Head>
    <About />
    </>
  )
}

export default about