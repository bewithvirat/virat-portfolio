import React from 'react'
import Nevbar from './components/Navbar L/Nevbar'
import Virat from './components/virat/virat'
import About from './components/About/about'
import Services from './components/Services/Services'
import Mywork from './components/Myworks/Mywork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Nevbar/>
      <Virat/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
