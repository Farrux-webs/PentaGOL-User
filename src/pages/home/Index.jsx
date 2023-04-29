import React from 'react'
import Footer from "../../components/Footer/Index"
import MainNews from "../../components/MainNews/Index"
import Navbar from "../../components/Navbar/Index"
import Table from "../../components/TableMatch/index"

const Index = () => {
  return (
    <>
        <Navbar />
        <MainNews/>
        <Table/>
        <Footer/>
    </>
  )
}

export default Index