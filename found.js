public class StringIndexOf {
    public static void main(String[] args) {
        String str = "Hello, World!";
        int index = str.indexOf("World");
        if (index != -1) {
            System.out.println("Substring 'World' found at index " + index);
        } else {
            System.out.println("Substring 'World' not found.");
        }
    }
}
