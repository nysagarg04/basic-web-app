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

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("multiplied")) {
    const matches = query.match(/\d+/g);
    if (matches && matches.length >= 2) {
      // Convert the first two occurrences into numbers
      const num1 = parseInt(matches[0], 10);
      const num2 = parseInt(matches[1], 10);
      // Compute the sum
      const sum = num1 * num2;
      return sum.toString();
    } else {
      return "I couldn’t find two numbers to multiply.";
    }
  }

  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("minus")) {
    const matches = query.match(/\d+/g);
    if (matches && matches.length >= 2) {
      // Convert the first two occurrences into numbers
      const num1 = parseInt(matches[0], 10);
      const num2 = parseInt(matches[1], 10);
      // Compute the sum
      const sum = num1 - num2;
      return sum.toString();
    } else {
      return "I couldn’t find two numbers to multiply.";
    }
  }


  if (query.toLowerCase().includes("what is") && query.toLowerCase().includes("to the power of")) {
    const matches = query.match(/\d+/g);
    if (matches && matches.length >= 2) {
      // Convert the first two occurrences into numbers
      const num1 = parseInt(matches[0], 10);
      const num2 = parseInt(matches[1], 10);
      // Compute the sum
      const sum = num1 ** num2;
      return sum.toString();
    } else {
      return "I couldn’t find two numbers to multiply.";
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



  if (query.toLowerCase().includes("which of the following numbers are primes:")) {
    // 1. Extract all numbers from the query
    const matches = query.match(/\d+/g);
    if (!matches) {
      return "No numbers found.";
    }

    // 2. Convert matches into numbers
    const numbers = matches.map(Number);

    // 3. Filter the numbers to only the ones that are prime
    const primes = numbers.filter((num) => isPrime(num));

    // 4. Return them or a fallback message if none
    if (primes.length === 0) {
      return "None of the given numbers are prime.";
    } else {
      return primes.join(", ");
    }
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

function isPrime(n: number): boolean {
  if (n < 2) return false;
  // A simple approach to check primality
  // (for large numbers, a more efficient method might be needed).
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
