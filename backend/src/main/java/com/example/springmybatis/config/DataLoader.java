package com.example.springmybatis.config;

import com.example.springmybatis.model.Teacher;
import com.example.springmybatis.service.TeacherService;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;


import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class DataLoader implements ApplicationRunner {

  private final TeacherService service;

  @Override
  public void run(ApplicationArguments args) throws Exception {
    for (int i = 0; i < 50; i++) {
      var teacher = new Teacher();
      teacher.setUserName("テスト");
      teacher.setEmail("test@example.com");
      service.save(teacher);
    }
  }
}
