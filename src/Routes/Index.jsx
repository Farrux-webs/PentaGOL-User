import React from 'react'
import Home from "../pages/home/Index";
import { Routes, Route} from "react-router-dom"
import NewsOne from "../pages/oneNews/Index"
import Login from "../Auth/LoginAuth/Index"
import Admin from "../Admin/Index";

const Index = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/news/:id" element={<NewsOne />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin/panel" element={<Admin />} />
      </Routes>
    </>
  );
}

export default Index