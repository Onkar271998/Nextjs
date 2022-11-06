import type { NextPage } from 'next'
import Navbar from '../components/Navbar'


const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Home Page</h1>
    </div>
  )
}

export default Home
