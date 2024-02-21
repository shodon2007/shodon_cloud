import { ButtonHTMLAttributes, FC, ReactNode } from "react"
import cls from './Button.module.scss';

enum ButtonThemes {
    CLEAR = 'clear',
    ATTRACTIVE = 'attractive',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    theme: ButtonThemes;
}

const Button: FC<ButtonProps> = ({ children, className, theme, ...props }) => {
    const classNames = [
        cls.btn,
        className,
        cls[theme],
    ].join(' ');

    return <button className={classNames} {...props}>{children}</button>
}

export {
    ButtonThemes
};
export default Button;