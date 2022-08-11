export function encoder({inputString, repeatCount}) {
    let result = null

    function getNextChar(char) {
        if (char === "z") {
            return "a";
        } else {
            return String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }

    let firstToEnd = inputString;
    for (let i = 0; i < repeatCount; i++) {
        firstToEnd = firstToEnd.slice(-1) + firstToEnd.slice(0, -1)
        result = "";
        for (let j = 0; j < firstToEnd.length; j++) {
            result += getNextChar(firstToEnd[j])
        }
        firstToEnd = result;
    }
    return result;
}