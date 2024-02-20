import { FC, ReactNode, createContext, useEffect, useState } from "react"
import api, { Item } from "@/api/api";

interface FileContextProps {
    loading: boolean,
    files: Item[],
    reload: () => void,
}

const FileContext = createContext<FileContextProps>({
    loading: true,
    files: [],
    reload: () => null,
})

interface FileProps {
    children: ReactNode
}

const FileProvider: FC<FileProps> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [files, setFiles] = useState<Item[]>([]);

    async function fileHandler() {
        setLoading(true);
        const res = await api.getType();
        setFiles(res);
        setLoading(false);
    }

    useEffect(() => {
        fileHandler();
    }, []);

    return (
        <FileContext.Provider value={{
            loading,
            files,
            reload: fileHandler,
        }}>
            {children}
        </FileContext.Provider>
    )
}

export {
    FileContext
}
export default FileProvider;