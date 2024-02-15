import { FC, HTMLAttributes, ReactNode } from "react"
import { Link } from "react-router-dom"
import cls from './MyLink.module.scss';

interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
    className: string,
    to: string,
}

const MyLink: FC<LinkProps> = ({ children, className, to, ...props }) => {
    return (
        <Link className={[className, cls.link].join(' ')} to={to} {...props}>{children}</Link>
    )
}

export default MyLink