const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const transliteratejs = require('../src/transliterate.js');
const { transliterate } = transliteratejs;

const textWithAccents = 'éáűőú àîëûçô áéíóú ñ ü äöü ß ÁÉÍÓÚ helló wörld helló, wörld! Thê qüîck browñ fox júmps ôvér thé lazy dòg. Zoltán Kovács';
const simpleText = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const textWithMixed = 'Hëllo Wørld 123 ÄÖÜß!';
const customMap = { 'H': 'X', 'e': '3', 'l': '1', 'o': '0' };

suite
    .add('transliterate - simple text', () => {
        transliterate(simpleText);
    })
    .add('transliterate - text with accents (default)', () => {
        transliterate(textWithAccents);
    })
    .add('transliterate - text with accents (NFC)', () => {
        transliterate(textWithAccents, 'NFC');
    })
    .add('transliterate - text with accents (NFKC)', () => {
        transliterate(textWithAccents, 'NFKC');
    })
    .add('transliterate - text with accents (NFKD)', () => {
        transliterate(textWithAccents, 'NFKD');
    })
    .add('transliterate - mixed text with default mapping', () => {
        transliterate(textWithMixed);
    })
    .add('transliterate - mixed text without default mapping', () => {
        transliterate(textWithMixed, 'NFD', false);
    })
    .add('transliterate - mixed text with custom mapping', () => {
        transliterate(textWithMixed, 'NFD', false, customMap);
    })
    .add('transliterate - mixed text with custom and default mapping', () => {
        transliterate(textWithMixed, 'NFD', true, customMap);
    })
    .add('transliterate - long text with accents (default)', () => {
        const longText = textWithAccents.repeat(10);
        transliterate(longText);
    })
    .add('transliterate - long text with accents (NFKD)', () => {
        const longText = textWithAccents.repeat(10);
        transliterate(longText, 'NFKD');
    })
    .run({ 'async': true });

module.exports = suite;
