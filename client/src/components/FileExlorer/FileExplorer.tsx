import { useEffect, useState } from 'react';
import api, { Item } from '../../api/api';
import cls from './FileExplorer.module.scss';

const checkTypes = ['.png', '.jpeg', '.webp', '.jpg'];

function isImage(filename: string) {

    for (const i of checkTypes) {
        if (filename.endsWith(i)) {
            return true;
        }
    }

    return false;
}

function truncate(str: string) {
    const maxLength = 15;
    if (str.length >= maxLength) {
        return str.slice(0, maxLength) + '...';
    }

    return str;
}

const FileExplorer = () => {
    const [files, setFiles] = useState<Item[]>();

    async function fileHandler() {
        const res = await api.getType();
        setFiles(res);
    }

    useEffect(() => {
        fileHandler();
    }, []);

    if (!files) {
        return <div>чувак тут нет файлов</div>
    }

    return (
        <div className={cls.fe}>
            {
                files?.map((el, index) => {
                    if (isImage(el.title)) {
                        return <div key={index} className={cls.item}>
                            <img className={cls.img} src={`${api.url}/uploads/${el.title}`} alt="картинка" />
                            <div className={cls.title}>{truncate(el.title)}</div>
                        </div>
                    } else {
                        return <div key={index}>
                            <path className={cls.img} d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path>
                            <div className={cls.title}>{truncate(el.title)}</div>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default FileExplorer