import { CartItem } from "./types"
import { useStore } from "./store";
import { act, cleanup, renderHook } from "@testing-library/react";

const defaultCartItems = [
    {
        id: 123,
        title: 'product one',
        qty: 2,
        price: 20,
        image: 'string',
    },
    {
        id: 456,
        title: 'product two',
        qty: 1,
        price: 30,
        image: 'string',
    },
    {
        id: 789,
        title: 'product three',
        qty: 1,
        price: 12,
        image: 'string',
    }
]

const fooo = [
    {
        id: 123,
        title: 'product one',
        qty: 2,
        price: 20,
        image: 'string',
    },
    {
        id: 456,
        title: 'product two',
        qty: 1,
        price: 30,
        image: 'string',
    }
]


describe('Store', () => {
    describe("cartItems", () => {
        afterEach(() => {
            // You can chose to set the store's state to a default value here.
            useStore.setState({ cartItems: defaultCartItems})
            jest.resetAllMocks();
            cleanup();
        });

        it("should have a default of 0 items", () => {
            const arr: CartItem[] = []
            expect(arr).toHaveLength(0)
        })

        it("should remove an item when the remove dispatch is fired", () => {
            const { result } = renderHook(() => useStore((state) => state));

            const itemToRemove: CartItem = {
                id: 789,
                title: 'product three',
                qty: 1,
                price: 12,
                image: 'string',
            }
    
            act(() => {
                result.current.updateCartItems({ update: itemToRemove, type: "REMOVE"});
            });
    
            expect(result.current.cartItems).toEqual(fooo);
        });
    })
})