package com.example.springmybatis.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;

@Configuration
public class OpenAPIConfig {
  @Bean
  public OpenAPI myOpenAPI() {
    Info info = new Info().title("Tutorial Management API").version("1.0").description("This API exposes endpoints to manage tutorials.");

    return new OpenAPI().info(info);
  }
}
