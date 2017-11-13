export function format(character) {
    let codePoint = character.codePointAt(0);
    function toUTF16(codeUnit) {
        return '\\u'+codeUnit.toString(16).toUpperCase();
    }

    if (codePoint <= 0xFFFF) {
        return toUTF16(character);
    }

    codePoint -= 0x10000;

    let leadSurrogate = 0xD800 + (codePoint >> 10);
    let tailSurrogte = 0xDC00 + (codePoint & 0x03FF);

    return toUTF16(leadSurrogate) + toUTF16(tailSurrogte);
}
