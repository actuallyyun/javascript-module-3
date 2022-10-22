export const peek = (stack) => {

    if (stack.length > 0) {
        return stack[stack.length - 1]
    } else {
        return null
    }

}

export const push = (stack, element) => {
    stack.push(element)
    return stack
}