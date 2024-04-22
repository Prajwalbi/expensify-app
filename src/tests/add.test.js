const add = (a,b) => a + b 
const generateGreeeting = (name = "Anonymous") => `Hello ${name}!`;
test("should add two numbers ", () => {
    const res =  add(5,7); 
    expect(res).toBe(12);
   
});

test("Should generate name", () => {
    const result = generateGreeeting("Prajwal");
    expect(result).toBe("Hello Prajwal!");
})
test("Should generate Anonymous name", () => {
    const result = generateGreeeting();
    expect(result).toBe("Hello Anonymous!");
})