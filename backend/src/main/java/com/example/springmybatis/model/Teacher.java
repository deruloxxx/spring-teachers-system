package com.example.springmybatis.model;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class Teacher {
  private Long id;

  @NotBlank
  @Size(max = 60)
  private String userName;

  @NotBlank
  @Email
  @Size(max = 254)
  private String email;
}
