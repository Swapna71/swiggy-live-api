 import { sum } from "../sum"
 
 test("the result should be", ()=>{
    const result=sum(3,4)
    //Assertion
    expect(result).toBe(7)
 })