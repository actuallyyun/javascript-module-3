import { peek, push } from "./index.js"

describe("Stack operations", () => {
    test('Peek should return null on an empty stack', () => {
        const stack = []
        expect(peek(stack)).toBe(null)
    })
    test("Peek should return the top element from a non-empty stack", () => {
        const stack = ["A"]
        expect(peek(stack)).toEqual("A")
    })

    test("Push adds an element to an empty stack", () => {
        const stack = []
        const element = "A"
        expect(push(stack, element)).toEqual(["A"])
    })
    test("Push adds an element to an non-empty stack", () => {
        const stack = ["A"]
        const element = "B"
        expect(push(stack, element)).toEqual(["A", "B"])
    })


})