public class SumOfSquares {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int num : array) {
            sum += num * num;
        }
        System.out.println("Sum of squares: " + sum);
    }
}
