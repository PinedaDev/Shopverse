import React from 'react'
import Page404 from './Page404'
import MainLayout from './MainLayout'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router