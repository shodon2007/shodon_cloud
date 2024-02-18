function truncate(str: string) {
    if (str.length >= 40) {
        return str.slice(0, 40) + '...';
    }

    return str;
}

export default truncate;