export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "npgarg";
  }


  if (query.toLowerCase().includes("name")) {
    return "Nysa";
  }


  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube:")) {
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found.";
    }

    const numbers = matches.map(Number);
    const results = numbers.filter((num) => isPerfectSixthPower(num));
    if (results.length === 0) {
      return "None of the given numbers are both a square and a cube.";
    } else {
      // Return matching numbers in a comma-separated list (or however you want to format it)
      return results.join(", ");
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("plus")) {
    const matches = query.match(/\d+/g);
    if (matches && matches.length >= 2) {
      // Convert the first two occurrences into numbers
      const num1 = parseInt(matches[0], 10);
      const num2 = parseInt(matches[1], 10);
      // Compute the sum
      const sum = num1 + num2;
      return sum.toString();
    } else {
      return "I couldn’t find two numbers to add.";
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is the largest:")) {
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found";
    }
    const maxNumber = Math.max(...matches.map(Number));
    return maxNumber.toString();
  }

  return "";
}

function isPerfectSixthPower(n: number): boolean {
  if (n < 1) return false; // Negative or zero won't qualify as standard "perfect powers" here
  // 1) Take the 6th root
  const root6 = Math.round(Math.pow(n, 1 / 6));
  // 2) Check if root6^6 = n
  return Math.pow(root6, 6) === n;
}
