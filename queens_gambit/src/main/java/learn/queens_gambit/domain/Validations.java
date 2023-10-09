package learn.queens_gambit.domain;

public class Validations {

    public static boolean isNullOrBlank(String value) {
        return value == null || value.isBlank();
    }

    public static boolean isBlank(Long value) {
        return value == null || value.intValue()==0;
    }

}
