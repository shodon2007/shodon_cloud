import { useContext, useEffect, useState } from 'react';
import api, { Item } from '../../api/api';
import cls from './FileExplorer.module.scss';
import FileImg from '../../static/file.png';
import DownloadImg from '../../static/download.png';
import FolderImg from '../../static/folder.svg';
import isImage from '../../helpers/isImage';
import truncate from '../../helpers/truncate';
import { FileContext } from '../../providers/FileProvider';

const FileExplorer = () => {

    const { files, loading, reload } = useContext(FileContext);

    if (loading) {
        return <div>загрузка...</div>
    }

    if (!files || files.length === 0) {
        return <div>хахахахахаах, тут нет файлов</div>
    }

    return (
        <div className={cls.fe}>
            {
                files.map((el, index) => {
                    if (el.isFile) {
                        return <div key={index} className={cls.item}>
                            {isImage(el.title)
                                ? <img className={cls.img} src={`${api.url}/uploads/${el.title}`} alt="картинка" />
                                : <img className={cls.img} src={FileImg} alt='файлик' />
                            }
                            <div className={cls.title}>{truncate(el.title)}</div>
                            <button className={cls.download}><img src={DownloadImg} className={cls.img} /></button>
                        </div>
                    }

                    return <div key={index} className={cls.item} onClick={async () => {
                        api.goFolder(el.title).then(() => reload());
                    }}>
                        <img src={FolderImg} alt='пшел нахуй' />
                        <div className={cls.title}>{truncate(el.title)}</div>
                    </div>
                })
            }
        </div>
    )
}

export default FileExplorer