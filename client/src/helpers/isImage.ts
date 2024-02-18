const checkTypes = ['.png', '.jpeg', '.webp', '.jpg'];


function isImage(filename: string) {

    for (const i of checkTypes) {
        if (filename.endsWith(i)) {
            return true;
        }
    }

    return false;
}


export default isImage;