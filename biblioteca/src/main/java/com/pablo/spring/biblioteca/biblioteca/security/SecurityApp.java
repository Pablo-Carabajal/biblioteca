package com.pablo.spring.biblioteca.biblioteca.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
@Configuration
public class SecurityApp {
    @Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
                 http.csrf(csrf-> csrf.disable())
                .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
                .httpBasic(basic->{} );

               return http.build();
}


}
