package learn.queens_gambit.security;

import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@ConditionalOnWebApplication
public class SecurityConfig {

    private final JwtConverter jwtConverter;

    public SecurityConfig(JwtConverter jwtConverter) {
        this.jwtConverter = jwtConverter;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, AuthenticationConfiguration authConfig) throws Exception {

        http.csrf().disable();

        http.cors();

        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, "/api/login").permitAll()
                .antMatchers(HttpMethod.POST, "/api/register").permitAll()
                .antMatchers(HttpMethod.POST, "/api/refresh-token").authenticated()
                .antMatchers(HttpMethod.GET,  "/api/fans").permitAll()
                .antMatchers(HttpMethod.GET,  "/api/fans/*").permitAll()
                .antMatchers(HttpMethod.POST, "/api/fans").authenticated()
                .antMatchers(HttpMethod.PUT, "/api/fans/*").authenticated()
                .antMatchers(HttpMethod.DELETE, "/api/fans/*").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.GET, "/api/characters").permitAll()
                .antMatchers(HttpMethod.POST, "/api/characters").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/characters/*").hasAuthority("ADMIN")
                .antMatchers(HttpMethod.DELETE, "/api/characters/*").hasAuthority("ADMIN")
                .antMatchers("/**").denyAll()
                .and()
                .addFilter(new JwtRequestFilter(authenticationManager(authConfig), jwtConverter))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        return http.build();
    }

    @Bean
    AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
}
