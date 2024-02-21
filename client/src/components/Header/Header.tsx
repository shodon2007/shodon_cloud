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
            <div className={cls.body}>
                <MyLink className={cls.title} to={'/'}>Shodon cloud</MyLink>
                <div className={cls.right}>
                    {/* <AddFile /> */}
                    <MyLink to={'/auth'} className={cls.link}>войти</MyLink>
                    <MyLink to={'/auth'} className={cls.link}>зарегестрироваться</MyLink>
                </div>
            </div>
        </div>
    )
}

export default Header