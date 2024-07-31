import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routers from '../routes/Routers'



const Layout = () => {
  return (
    <>
            <div className="content">

        <Header />
        <main>
            {/* <Routers /> */}
        </main>
        <div className="content">
        <Routers />

        </div>

        <Footer />
        </div>
    </>
  )
}

export default Layout
