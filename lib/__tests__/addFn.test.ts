import {addFn} from "../index"


describe("addFn",()=>{
    it("should return the sum of 2 + 2 properly",()=>{
        const sum = addFn(2,2)
        expect(sum).toBe(4)
    })
    it("should return a value greater than 0",()=>{
        const sum = addFn(2,2)
        expect(sum).toBeGreaterThan(0)
    })
})