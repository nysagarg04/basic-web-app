import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Nysa"
          ));
    });

    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 46, 28, 48?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "48"
          ));
    });

    test('addition', () => {
        const query = "What is 50 plus 43?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "93"
          ));
    });

    test('multiples', () => {
        const query = "What is 72 multiplied by 92?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "6624"
          ));
    });

    test('minus', () => {
        const query = "What is 74 minus 58?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "16"
          ));
    });

    test('cube and square', () => {
        const query = "Which of the following numbers is both a square and a cube: 2396, 49, 125, 714, 181, 3299, 4096?	";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "4096"
          ));
    });

    test('should return andrewid', () => {
        const query = "What is your andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "npgarg"
          ));
    })
});


