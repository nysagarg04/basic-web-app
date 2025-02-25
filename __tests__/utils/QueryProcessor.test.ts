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

    test('should return andrewid', () => {
        const query = "What is your andrew id";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "npgarg"
          ));
    })
});