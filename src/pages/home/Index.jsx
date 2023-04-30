import React from 'react'
import Footer from "../../components/Footer/Index"
import MainNews from "../../components/MainNews/Index"
import Navbar from "../../components/Navbar/Index"
import Table from "../../components/TableMatch/index"
import LatestNews from "../../components/LatestNews/Index"
import AllNews from "../../components/AllNews/Index"

const Index = () => {
  return (
    <>
        <Navbar />
        <Table/>
        <MainNews/>
        <LatestNews/>
        <AllNews/>
        <Footer/>
    </>
  )
}

export default Index