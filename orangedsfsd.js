import java.util.Arrays;
import java.util.Collections;

public class ReverseStringArraySort {
    public static void main(String[] args) {
        String[] array = {"apple", "banana", "orange", "grape"};
        Arrays.sort(array, Collections.reverseOrder());
        System.out.println("Sorted array in reverse order:");
        for (String str : array) {
            System.out.println(str);
        }
    }
}
