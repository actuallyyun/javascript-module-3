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


export const pop = (stack) => {
    if (stack.length > 0) {
        stack.pop()
        return stack
    } else {
        throw new Error("Can't pop from an empty stack")

    }
}

