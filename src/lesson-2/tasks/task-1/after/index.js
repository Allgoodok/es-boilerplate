export function findString(text, pattern) {
    let result = 0;
    let parts = pattern.toString().split('/');
    let textPart = parts[1];
    for (let i = 0; i < text.length - textPart.length; i++) {
        if(pattern.test(text)) {
            result++;
            i = pattern.lastIndex;
        } else {
            pattern.lastIndex = i + 1;
        }
    }
    return result
}
