export function operations(ops) {
    let result = null;
    let separate = ops.split(" ");
    let onAction = [];
    for (const ch of separate) {
        if (Number.isInteger(parseInt(ch))) {
            onAction.push(parseInt(ch));
        } else if (ch === "D") {
            onAction.push(onAction[onAction.length - 1] * 2)
        } else if (ch === "R") {
            onAction.pop();
        } else if (ch === "+") {
            onAction.push(onAction[onAction.length - 1]+onAction[onAction.length - 2])
        }
    }
    result = 0;
    for (let i = 0; i < onAction.length; i++) {
        result += onAction[i];
    }
    return result;
}