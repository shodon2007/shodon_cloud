import truncate from "./truncate";

describe('testing truncate', () => {
    test('testing str less than max', () => {
        const str = 'hi';
        expect(truncate(str, 50)).toBe(str);
        expect(truncate(str, 12)).toBe(str);
        expect(truncate(str, 5)).toBe(str);
    });

    test('testing empty str', () => {
        expect(truncate('', 10)).toBe('');
    });

    test('testing zero max number', () => {
        expect(truncate('hello wolrd', 0)).toBe('...');
        expect(truncate('', 0)).toBe('...');
    });

    test('testing str more than max', () => {
        const str = 'Elit labore laboris ullamco dolor ex ut ullamco ut sit nulla laborum nostrud minim laborum.';
        expect(truncate(str, 20)).toBe('Elit labore laboris ...')
        expect(truncate(str, 5)).toBe('Elit ...')
        expect(truncate(str, 0)).toBe('...')
    })
})