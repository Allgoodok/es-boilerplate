export default () => {
    let accumulator = 0;
    return (sum) => {
        if (typeof sum === 'number') {
            accumulator += sum;
            console.log(accumulator);
        } else {
            return new Error("Sum must be number type")
        }
    }
}
