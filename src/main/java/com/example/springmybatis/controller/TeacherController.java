package com.example.springmybatis.controller;

import com.example.springmybatis.repository.TeacherMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Controller
public class TeacherController {

  private final TeacherMapper mapper;

  @GetMapping("/")
  public String getAllTeachers(Model model) {
    model.addAttribute("page", mapper.selectAll());
    return "list";
  }
}
