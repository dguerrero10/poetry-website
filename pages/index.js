import clientPromise from '../lib/mongodb'

import HeroOne from "../components/Home/HeroOne"
import HeroTwo from "../components/Home/HeroTwo"
import PoemPreviewList from "../components/Poems/PoemPreviews/PoemPreviewList"

function Home({ isConnected }) {
  return (
    <main>
      <HeroOne />
      <HeroTwo />
      <PoemPreviewList />
    </main>
  )  
}

export default Home

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    await clientPromise
    return {
      props: { isConnected: true },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}
