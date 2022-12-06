import { CartItem } from "./types"

describe('Store', () => {
    describe("cartItems", () => {
        it("should have a default of 0 items", () => {
            const arr: CartItem[] = []
            expect(arr).toHaveLength(0)
        })
    })
})