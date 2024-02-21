import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import cls from './Layout.module.scss';

const Layout = () => {
    return (
        <div className={cls.layout}>
            <Header />
            {/* <Navbar /> */}
            <div className={cls.body}>
                <div className={cls.wrapper}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout