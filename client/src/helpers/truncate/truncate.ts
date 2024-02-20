function truncate(str: string, max: number) {
    if (max < 0) {
        throw new Error('please enter a number greater than or equal to zero');
    }
    
    if (str.length >= max) {
        return str.slice(0, max) + '...';
    }

    return str;
}

export default truncate;