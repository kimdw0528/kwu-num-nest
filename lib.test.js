const {test, expect} = require("@jest/globals");
const lib = require("./lib");

test ("avg([3,5,7]) should be 5", () => {
    expect(lib.avg([3,5,7])).toBe(5);
});
test ("avg([-5,5]) should be 0", () => {
    expect(lib.avg([-5,5])).toBe(0);
});
test ("prime([15]) should be false", () => {
    expect(lib.prime([15])).toBe(false);
});
test ("factorial([6]) should be 720", () => {
    expect(lib.factorial([6])).toBe(720);
});