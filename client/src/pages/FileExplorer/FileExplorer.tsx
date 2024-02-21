import { useContext } from 'react';
import api from '@/api/fileExplorerApi';

import FileImg from '@/static/file.png';
import DownloadImg from '@/static/download.png';
import FolderImg from '@/static/folder.svg';
import BackImg from '@/static/back.svg';

import isImage from '@/helpers/isImage/isImage';
import truncate from '@/helpers/truncate/truncate';
import { FileContext } from '@/providers/FileProvider';

import cls from './FileExplorer.module.scss';
import Button, { ButtonThemes } from '@/components/ui/Button/Button';

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
            <div className={cls.topBar}>
                <div className={cls.topLeft}>
                    <Button theme={ButtonThemes.CLEAR}><img className={cls.backImg} src={BackImg} alt="назад" /></Button>
                    <h1 className={cls.title}>Все файлы</h1>
                </div>

                <div className={cls.topRight}>
                    <Button theme={ButtonThemes.ATTRACTIVE}>
                        добавить файл
                    </Button>
                    <Button theme={ButtonThemes.ATTRACTIVE}>
                        создать папку
                    </Button>
                </div>
            </div>
            <div className={cls.files}>
                {
                    files.map((el, index) => {
                        if (el.isFile) {
                            return <div key={index} className={cls.item}>
                                {isImage(el.title)
                                    ? <img className={cls.img} src={`${api.url}/uploads/${el.title}`} alt="картинка" />
                                    : <img className={cls.img} src={FileImg} alt='файлик' />
                                }
                                <div className={cls.title}>{truncate(el.title, 40)}</div>
                                <button className={cls.download}><img src={DownloadImg} className={cls.img} /></button>
                            </div>
                        }

                        return <div key={index} className={cls.item} onClick={async () => {
                            api.goFolder(el.title).then(() => reload());
                        }}>
                            <img src={FolderImg} alt='пшел нахуй' />
                            <div className={cls.title}>{truncate(el.title, 40)}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default FileExplorer