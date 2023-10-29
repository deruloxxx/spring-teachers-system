package com.example.springmybatis.controller;

import com.example.springmybatis.model.Teacher;
import com.example.springmybatis.service.TeacherService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Tag(name = "Teacher", description = "Teacher management APIs")
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/teachers")
public class TeacherRestController {

  private final TeacherService service;

  @GetMapping
  public ResponseEntity<?> getAllTeachers(@PageableDefault(size = 5) Pageable pageable) {
    try {
      return ResponseEntity.ok(service.selectAll(pageable));
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server Error");
    }
  }

  @PostMapping
  public ResponseEntity<?> createTeacher(@Valid @RequestBody Teacher teacher) {
    try {
      service.save(teacher);
      return ResponseEntity.ok("{\"message\":\"Success\"}");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server Error");
    }
  }

  @GetMapping("/{id}")
  public ResponseEntity<Teacher> getTeacher(@PathVariable Long id) {
    try {
      Teacher teacher = service.selectByPrimaryKey(id);
      if (teacher == null) {
        return ResponseEntity.notFound().build();
      }
      return ResponseEntity.ok(teacher);
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @PutMapping("/{id}")
  public ResponseEntity<?> updateTeacher(@PathVariable Long id, @Valid @RequestBody Teacher teacher) {
    try {
      if (service.selectByPrimaryKey(id) == null) {
        return ResponseEntity.notFound().build();
      }
      teacher.setId(id);
      service.save(teacher);
      return ResponseEntity.ok().build();
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteTeacher(@PathVariable Long id) {
    try {
      service.deleteByPrimaryKey(id);
      return ResponseEntity.ok().build();
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }
  }
}
