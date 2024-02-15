import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import cls from './Layout.module.scss';

const Layout = () => {
    return (
        <div className={cls.layout}>
            <Header />
            <div className={cls.body}>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout