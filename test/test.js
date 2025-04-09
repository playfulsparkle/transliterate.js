/* global describe, it */

'use strict';

const assert = require('assert'),
    transliteratejs = require('../src/transliterate.js'),
    { transliterate } = transliteratejs;

describe('transliterate', () => {
    it('simple unicode text', () => {
        assert.strictEqual('eauou', transliterate('éáűőú'));
    });

    it('transliterates French accented characters', () => {
        assert.strictEqual('eaieuco', transliterate('éàîëûçô'));
    });

    it('transliterates Spanish accented characters and special letters', () => {
        assert.strictEqual('aeiou n ue', transliterate('áéíóú ñ ü'));
    });

    it('transliterates German umlauts and sharp s', () => {
        assert.strictEqual('aeoeue ss', transliterate('äöü ß'));
    });

    it('transliterates mixed case input', () => {
        assert.strictEqual('AEIOU', transliterate('ÁÉÍÓÚ'));
    });

    it('transliterates text with spaces', () => {
        assert.strictEqual('hello woerld', transliterate('helló wörld'));
    });

    it('transliterates text with punctuation (keeping punctuation)', () => {
        assert.strictEqual('hello, woerld!', transliterate('helló, wörld!'));
    });

    it('transliterates a longer user input example', () => {
        assert.strictEqual('This is a test with soeme special characters like aeiou and aeoeue ss.', transliterate('This is a tést with sömë spécial cháráctérs liké áéíóú and äöü ß.'));
    });

    it('transliterates a name with common European characters', () => {
        assert.strictEqual('Zoltan Kovacs', transliterate('Zoltán Kovács'));
    });

    it('transliterates a sentence with multiple types of accents', () => {
        assert.strictEqual('The queick brown fox jumps over the lazy dog.', transliterate('Thê qüîck browñ fox júmps ôvér thé lazy dòg.'));
    });

    it('transliterates a French address', () => {
        assert.strictEqual('123 Rue de la Paix, 75000 Paris', transliterate('123 Rue de la Paix, 75000 Paris'));
    });

    it('transliterates a German name and location', () => {
        assert.strictEqual('Muellerstrasse 47, 80337 Muenchen', transliterate('Müllerstraße 47, 80337 München'));
    });

    it('transliterates a Spanish phrase', () => {
        assert.strictEqual('Hola, como estas?', transliterate('Hola, ¿cómo estás?'));
    });

    it('transliterates a Hungarian sentence', () => {
        assert.strictEqual('A regi szep idok.', transliterate('A régi szép idők.'));
    });

    it('transliterates a Polish name', () => {
        assert.strictEqual('Krzysztof Nowak', transliterate('Krzysztof Nowak'));
    });

    it('transliterates a more complex Polish name', () => {
        assert.strictEqual('Wojciech Szczesny', transliterate('Wojciech Szczęsny'));
    });

    it('transliterates a Czech sentence', () => {
        assert.strictEqual('Dobry den, jak se mate?', transliterate('Dobrý den, jak se máte?'));
    });

    it('transliterates a Turkish address', () => {
        assert.strictEqual('Atatuerk Bulvari No: 107, Ankara', transliterate('Atatürk Bulvarı No: 107, Ankara'));
    });

    it('transliterates a Russian name', () => {
        assert.strictEqual('Sergey Ivanov', transliterate('Сергей Иванов'));
    });

    it('transliterates a Greek word (love)', () => {
        assert.strictEqual('agapi', transliterate('αγάπη'));
    });

    it('transliterates a mixed string with different scripts (love)', () => {
        assert.strictEqual('Hello from Ellada (agapi)!', transliterate('Hello from Ελλάδα (αγάπη)!'));
    });

    it('transliterates a Vietnamese sentence', () => {
        assert.strictEqual('Chao ban, rat vui duoc gap ban.', transliterate('Chào bạn, rất vui được gặp bạn.'));
    });

    it('handles a string with leading and trailing spaces', () => {
        assert.strictEqual(' hello woerld ', transliterate(' helló wörld '));
    });

    it('handles a string with multiple consecutive special characters', () => {
        assert.strictEqual('aeiou---AEIOU', transliterate('áéíóú---ÁÉÍÓÚ'));
    });

    it('handles an empty string', () => {
        assert.strictEqual('', transliterate(''));
    });

    it('transliterates currency symbols in a sentence', () => {
        assert.strictEqual('The price is 10 E and 20 c.', transliterate('The price is 10 € and 20 ¢.'));
    });

    it('transliterates mathematical symbols (if mapped)', () => {
        assert.strictEqual('a v g', transliterate('α β γ'));
    });

    it('transliterates mathematical bold small w, x, y, z', () => {
        assert.strictEqual('wxyz', transliterate('𝐰𝐱𝐲𝐳'));
    });

    it('transliterates a mixed string with mathematical bold and regular letters', () => {
        assert.strictEqual('aBcdEfgHijklmnopqRstUv', transliterate('a𝐁cd𝐄fg𝐇𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐑𝐬𝐭𝐔𝐯'));
    });

    it('transliterates mathematical bold capital letters A, B, C, D, E, F', () => {
        assert.strictEqual('ABCDEF', transliterate('𝐀𝐁𝐂𝐃𝐄𝐅'));
    });
});
