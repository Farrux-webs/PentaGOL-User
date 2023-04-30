import React from 'react'
import {Routes, Route} from "react-router-dom"
import Admin from "../Admin/Index"

const Index = () => {
  return (
    <div>
        <Routes>
            <Route path="/admin/panel" element={<Admin/>}/>
        </Routes>
    </div>
  )
}

export default Index