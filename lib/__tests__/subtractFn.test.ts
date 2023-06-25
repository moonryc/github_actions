import {subtractFn} from "../index"


describe("subtractFn",()=>{
    it("should return the difference of 2 - 2 properly",()=>{
        const sum = subtractFn(2,2)
        expect(sum).toBe(4)
    })
    it("should return a value less than 2",()=>{
        const sum = subtractFn(2,2)
        expect(sum).toBeGreaterThan(0)
    })
})