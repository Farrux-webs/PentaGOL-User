import React from 'react'
import Home from "../pages/home/Index";
import { Routes, Route} from "react-router-dom"
import NewsOne from "../pages/oneNews/Index"

const Index = () => {
  return (
    <>
    <Routes>
        <Route path="/*" element={<Home/>}/>
        <Route path="/news/:id" element={<NewsOne/>}/>
    </Routes>
    </>
  )
}

export default Index