import { useEffect, useState } from 'react';
import api, { Item } from '../../api/api';
import cls from './FileExplorer.module.scss';
import FileImg from '../../static/file.png';

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
                    } else if (el.type === 'folder') {
                        return <div key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#ffa000" d="M40,12H22l-4-4H8c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h29.7L44,29V16C44,13.8,42.2,12,40,12z" /><path fill="#ffca28" d="M40,12H8c-2.2,0-4,1.8-4,4v20c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4V16C44,13.8,42.2,12,40,12z" /></svg>
                            <div className={cls.title}>папка {truncate(el.title)}</div>
                        </div>
                    } else {
                        return <div key={index}>
                            <img className={cls.img} src={FileImg} />
                            <div className={cls.title}>другой файл{truncate(el.title)}</div>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default FileExplorer