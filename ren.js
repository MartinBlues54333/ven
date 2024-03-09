def factorial(n):
    """Calculate the factorial of a number using recursion."""
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Get the number from the user
num = int(input("Enter a number: "))

# Calculate and print the factorial
print("Factorial of", num, "is", factorial(num))
