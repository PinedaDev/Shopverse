import React from 'react'
import bg from '../assets/img/bg.jpg'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <main>
            {/* main - container */}
            <section
                style={{ backgroundImage: `url(${bg})` }}
                className='h-screen bg-center bg-cover'>
                {/* navegation bar */}

                {/* top -bar */}
                <div>

                </div>
                {/* page - main - content wrapper */}
                <div>
                    {/* Featured products wrapper */}
                    <div>

                    </div>
                    {/* inner - routes - content */}
                    <Outlet />
                </div>
            </section>
        </main>
    )
}

export default MainLayout