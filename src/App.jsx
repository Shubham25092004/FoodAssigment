import './App.css'
import FirstNav from './compounts/FirstNav'
import HoneyCard from './compounts/HoneyCard.jsx'
import Navbar from './compounts/Navbar'
import { category } from './data/category.js'

function App() {
  return (
    <>
   
      <FirstNav />
      <Navbar Data={category} />
      <HoneyCard/>
    </>
  )
}

export default App;
