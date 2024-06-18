
import '../src/assets/styles/variables.scss'
import '../src/assets/styles/constant.scss'
import '../src/assets/app.scss'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import HomeContainer from './Components/HomeContainer'
import Analytics2 from './Components/Analytics2'
import Analytics1 from './Components/Analytics1'
import WhyChoose from './Components/WhyChoose'
import WhatElse from './Components/WhatElse'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <HomeContainer></HomeContainer>
      <WhyChoose></WhyChoose>
      <Analytics1></Analytics1>
      <Analytics2></Analytics2>
      <WhatElse></WhatElse>
      <Footer></Footer>
      
    </>
  )
}

export default App
