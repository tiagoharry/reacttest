import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/home'
import { Outono } from '../pages/Outono'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/outono" element={<Outono />} />
    </Routes>
  )
}