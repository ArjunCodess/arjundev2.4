import Head from "next/head"
import Contact from "./components/Contact"

const contact = () => {
  return (
    <>
    <Head>
        <title>Contact - ArjunCodess</title>
        <meta
          name="description"
          content="Contact: Portfolio of a Passionate Talented Young Full-Stack Developer from India 🇮🇳"
        />
    </Head>
    <Contact />
    </>
  )
}

export default contact