package learn.queens_gambit.data;


import learn.queens_gambit.models.AppUser;

public interface AppUserRepository {
    AppUser findByUsername(String username);

    AppUser add(AppUser appUser);
}
