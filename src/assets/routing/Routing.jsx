import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutPage from '../../dashboard/LayoutPage'

export default function Routing() {
  return (
    <Routes>
        <Route path='/Dashboard' element={<LayoutPage />}>
            <Route path='/'  element={""} />
        </Route>
    </Routes>
  )
}
