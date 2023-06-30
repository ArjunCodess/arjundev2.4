import Head from 'next/head'
import Skills from './components/Skills'

const skills = () => {
  return (
    <>
    <Head>
        <title>Skills - ArjunCodess</title>
        <meta
          name="description"
          content="Skills: Portfolio of a Passionate Talented Young Full-Stack Developer from India 🇮🇳"
        />
    </Head>
    <Skills />
    </>
  )
}

export default skills