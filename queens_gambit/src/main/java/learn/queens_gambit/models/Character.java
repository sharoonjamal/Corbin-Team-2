package learn.queens_gambit.models;

public class Character {
    private Long characterId;
    private String firstName;
    private String lastName;
    private String gender;
    private String country;
    private Long fideRating;


    public Long getCharacterId() {
        return characterId;
    }

    public void setCharacterId(Long characterId) {
        this.characterId = characterId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Long getFideRating() {
        return fideRating;
    }

    public void setFideRating(Long fideRating) {
        this.fideRating = fideRating;
    }
}




