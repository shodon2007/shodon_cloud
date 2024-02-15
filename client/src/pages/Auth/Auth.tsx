import cls from './Auth.module.scss';

const Auth = () => {
    return (
        <div className={cls.auth}>
            <div className={cls.body}>
                <input type="text" className={cls.input} />
                <input type="password" className={cls.input} />
                <button className={cls.btn}>да</button>
            </div>
        </div>
    )
}

export default Auth