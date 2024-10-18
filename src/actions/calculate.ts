function calculate(Num1: number, Num2: number, operation: string) {
  switch (operation) {
    case "+":
      return Num1 + Num2;
    case "-":
      return Num1 - Num2;
    case "*":
      return Num1 * Num2;
    case "/":
      return Num1 / Num2;
    default:
      return 0;
  }
}

export default calculate;
