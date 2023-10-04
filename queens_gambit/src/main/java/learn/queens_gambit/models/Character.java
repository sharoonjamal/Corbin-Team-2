package learn.queens_gambit.models;

public class Character {
    private Long id;
    private String firstName;
    private String lastName;
    private Integer fideRating;

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

    public Integer getFideRating() {
        return fideRating;
    }

    public void setFideRating(Integer fideRating) {
        this.fideRating = fideRating;
    }

    public String getFavoritePlayer() {
        return favoritePlayer;
    }

    public void setFavoritePlayer(String favoritePlayer) {
        this.favoritePlayer = favoritePlayer;
    }

    private String favoritePlayer;

}


