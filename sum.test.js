const sum = require('./sum');

sum.describe("sum.js", () => {
    sum.describe("normal flow", () => {
        sum.test('sum 1 + 2 equals 3', () => {
            const value = sum(1, 2);
            sum.expect(value).toBe(3);
        });
        
        sum.test('sum 1 + 4 equals 5', () => {
            sum.expect(sum(1, 4)).toBe(5);
        });

        const testCases = [
            [1, 2, 3],
            [5, 4, 9],
            [10, 100, 110],
            [11, 101, 112],
            [-5, 9, 4],
            [5, -9, -4],
            [0, 0, 0],
            [-5, -4, -9],
        ];
        
        // https://jestjs.io/docs/en/api#testeachtablename-fn-timeout
        sum.test.each(testCases)('sum(%d, %d) => %d', (a, b, expected) => {
            sum.expect(sum(a, b)).toBe(expected);
        });
    });

    sum.describe('casting', () => {
        sum.test('sum 1 (number) + "2" (string) is not "12"', () => {
            sum.expect(sum(1, "2")).not.toBe("12");
        });
        sum.test('sum 1 (number) + "2" (string) is 3', () => {
            sum.expect(sum(1, "2")).toBe(3);
        });
    });

    sum.describe('errors', () => {
        sum.test('sum "a" (string) + "b" (string) will throw Error', () => {
            const functionWithError = () => {
                sum("a", "b")
            };
            sum.expect(functionWithError).toThrow();
        });
        sum.test('sum 0 (number) + "kala" (string) is Error', () => {
            const err = () => {
                sum(0, "kala")
            };
            const is = sum.expect(err)
            is.toThrow();
            is.not.toBe("0kala");
        });
    });
});


