export function isBalance(input) {
    let result = null;
    let brackets = "[]{}()"
    let stack = []
    for (let bracket of input) {
        let bracketsIndex = brackets.indexOf(bracket)

        if (bracketsIndex % 2 === 0) {
            stack.push(bracketsIndex + 1)
        } else {
            if (stack.pop() !== bracketsIndex) {
                return false;
            }
        }
    }
    result = stack.length === 0;
    return result
}