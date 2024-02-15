import { useSelector } from 'react-redux';
import AddFile from '../AddFile/AddFile';
import cls from './Header.module.scss';
import { RootState } from '../../redux';
import MyLink from '../ui/MyLink/MyLink';

const Header = () => {
    const auth = useSelector((el: RootState) => el.authSlice);
    console.log(auth);

    return (
        <div className={cls.header}>
            <MyLink className={cls.title} to={'/'}>Shodon cloud</MyLink>
            <div className={cls.right}>
                <AddFile />
                <MyLink to={'/auth'} className={cls.link}>войти</MyLink>
            </div>
        </div>
    )
}

export default Header