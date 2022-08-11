export function getRepeatedInfo(number) {
    let result = null;
    let mapRepeated = new Map();
    number = number.toString();
    result = {};
    function count(number) {
        for (const ch of number) {
            if (mapRepeated.has(ch)) {
                mapRepeated.set(ch, parseInt(ch) + mapRepeated.get(ch))
            } else {
                mapRepeated.set(ch, parseInt(ch))
            }
        }
    }

    count(number)
    for (const repeated of mapRepeated.keys()) {
        result[repeated] = repeated.repeat(mapRepeated.get(repeated))
    }
    return result;
}