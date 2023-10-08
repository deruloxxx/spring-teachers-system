package com.example.springmybatis.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Tag(name = "Tutorial", description = "Tutorial management APIs")
@RequestMapping("/api/v1/demo")
@RestController
public class Demo {
  @GetMapping("/data")
  public Map<String, Object> getDemoData() {
    Map<String, Object> data = new HashMap<>();
    data.put("message", "Hello World!");
    data.put("timestamp", LocalDateTime.now());
    return data;
  }
}
