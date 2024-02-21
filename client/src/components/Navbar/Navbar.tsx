import { FC, useContext } from "react";
import cls from './Navbar.module.scss';
import api from "@/api/fileExplorerApi";
import { FileContext } from "../../providers/FileProvider";

const Navbar: FC = () => {
    const { reload } = useContext(FileContext)
    return <div className={cls.navbar}>
        <button onClick={() => {
            api.backFolder();
            reload();
        }}>
            назад
        </button>
        <button>обновить</button>
        <button>создать папку</button>
        <button>сортировка</button>
    </div>
}

export default Navbar;