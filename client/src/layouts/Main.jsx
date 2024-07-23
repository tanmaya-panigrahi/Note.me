import { Suspense, useEffect } from 'react'
import Loader from '../components/shared/loader'
import styles from './layouts.module.scss'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/shared/sideBar'
import Navbar from '../components/shared/navbar'
import utils from '../utils/localStorage'
import { useNavigate } from 'react-router-dom'

function Main() {

    const navigate = useNavigate();
    useEffect(()=>{
        const AuthKey=utils.getFromLocalStorage('auth_key');
        if(!AuthKey){
            navigate('/');
        }
    })
    return (
        <main className={styles.container}>
            <Suspense fallback={<Loader />}>
                {/* SideBar */}

                <Sidebar />
                <div className={styles.main}>
                    {/* NavBar */}
                    <Navbar />
                    <section className={styles.content}>
                        <Outlet />
                    </section>

                </div>

            </Suspense>
        </main>

    )
}

export default Main
