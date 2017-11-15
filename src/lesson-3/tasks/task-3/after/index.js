let accumulator = 0;
export default () => (sum = 1) => {
    if (typeof sum === "number") {
        accumulator += sum;
        console.log(accumulator);
    } else {
        return new Error("Sum should be typeof number");
    }
}
