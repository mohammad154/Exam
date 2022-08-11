export function removerRepetitive(string) {
    let result = null;
    let noneRepeat = new Set([...string]);
    result = Array.from(noneRepeat).join("")
    return result;
}