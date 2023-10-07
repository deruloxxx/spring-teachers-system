package com.example.springmybatis.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

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
