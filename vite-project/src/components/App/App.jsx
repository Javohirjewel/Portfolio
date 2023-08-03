import './App.scss'
import Header from '../header/header'
import Home from '../home/home'
import Portfolio from '../portfolio/portfolio'
import About from '../about/about'
import Contact from '../contact/contact'
import Footer from '../footer/footer'
import Service from '../service/service'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
