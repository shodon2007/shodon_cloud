import { ChangeEvent, useRef } from "react";
import api from "@/api/fileExplorerApi";
import cls from './AddFile.module.scss';

const AddFile = () => {
    const ref = useRef<HTMLInputElement>(null)

    function changeFile(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files?.[0]) {
            api.sendFile(event.target.files[0]);
        }

        if (ref.current) {
            ref.current.value = "";
        }
    }
    return (
        <>
            <input
                className={cls.input}
                type="file"
                ref={ref}
                onChange={changeFile}
            />
            <button className={cls.btn} onClick={() => ref.current?.click()}>+</button>
        </>
    )
}

export default AddFile