package learn.queens_gambit.models;

public class Fan {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String country;

    //@OneToOne(cascade = CascadeType.ALL)
    //@JoinColumn(name = "address_id", referencedColumnName = "id")
    private Character favoriteCharacter;
    private Long favoriteCharacterId;
    private Long fideRating;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Character getFavoriteCharacter() {
        return favoriteCharacter;
    }

    public void setFavoriteCharacter(Character favoriteCharacter) {
        this.favoriteCharacter = favoriteCharacter;
    }

    public Long getFideRating() {
        return fideRating;
    }

    public void setFideRating(Long fideRating) {
        this.fideRating = fideRating;
    }
    public Long getFavoriteCharacterId() {
        return favoriteCharacterId;
    }

    public void setFavoriteCharacterId(Long favoriteCharacterId) {
        this.favoriteCharacterId = favoriteCharacterId;
    }
}
