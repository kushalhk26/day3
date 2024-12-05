import java.util.Scanner;

public class SimpleCalculator {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Welcome to the Simple Calculator!");
        System.out.print("Enter the first number: ");
        int num1 = stringToNumber(scanner.nextLine());

        System.out.print("Enter an operator (+, -, *, /): ");
        char operator = scanner.nextLine().charAt(0);

        System.out.print("Enter the second number: ");
        int num2 = stringToNumber(scanner.nextLine());

        int result = 0;
        boolean isValid = true;

        switch (operator) {
            case '+':
                result = add(num1, num2);
                break;
            case '-':
                result = subtract(num1, num2);
                break;
            case '*':
                result = multiply(num1, num2);
                break;
            case '/':
                if (num2 == 0) {
                    System.out.println("Error: Division by zero is not allowed.");
                    isValid = false;
                } else {
                    result = divide(num1, num2);
                }
                break;
            default:
                System.out.println("Invalid operator!");
                isValid = false;
        }

        if (isValid) {
            System.out.println("The result is: " + numberToString(result));
        }
    }

    // Method to add two numbers manually
    public static int add(int a, int b) {
        while (b != 0) {
            int carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        return a;
    }

    // Method to subtract two numbers manually
    public static int subtract(int a, int b) {
        while (b != 0) {
            int borrow = (~a) & b;
            a = a ^ b;
            b = borrow << 1;
        }
        return a;
    }

    // Method to multiply two numbers manually
    public static int multiply(int a, int b) {
        int result = 0;
        boolean isNegative = false;

        if (a < 0) {
            a = subtract(0, a);
            isNegative = !isNegative;
        }
        if (b < 0) {
            b = subtract(0, b);
            isNegative = !isNegative;
        }

        for (int i = 0; i < b; i++) {
            result = add(result, a);
        }

        return isNegative ? subtract(0, result) : result;
    }

    // Method to divide two numbers manually
    public static int divide(int a, int b) {
        if (b == 0) return 0; // Handle division by zero
        boolean isNegative = false;

        if (a < 0) {
            a = subtract(0, a);
            isNegative = !isNegative;
        }
        if (b < 0) {
            b = subtract(0, b);
            isNegative = !isNegative;
        }

        int quotient = 0;
        while (a >= b) {
            a = subtract(a, b);
            quotient = add(quotient, 1);
        }

        return isNegative ? subtract(0, quotient) : quotient;
    }

    // Convert a string to a number without using libraries
    public static int stringToNumber(String str) {
        int num = 0;
        boolean isNegative = false;

        if (str.charAt(0) == '-') {
            isNegative = true;
            str = str.substring(1);
        }

        for (char c : str.toCharArray()) {
            num = multiply(num, 10);
            num = add(num, c - '0');
        }

        return isNegative ? subtract(0, num) : num;
    }

    // Convert a number to a string without using libraries
    public static String numberToString(int num) {
        if (num == 0) return "0";

        boolean isNegative = num < 0;
        if (isNegative) {
            num = subtract(0, num);
        }

        StringBuilder result = new StringBuilder();
        while (num > 0) {
            int digit = divide(num, 10);
            result.append((char) add(subtract(num, multiply(digit, 10)), '0'));
            num = digit;
        }

        if (isNegative) {
            result.append("-");
        }

        return result.reverse().toString();
    }
}
