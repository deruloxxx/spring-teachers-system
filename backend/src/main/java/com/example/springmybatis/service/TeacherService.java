package com.example.springmybatis.service;

import com.example.springmybatis.model.Teacher;
import com.example.springmybatis.repository.TeacherMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.session.RowBounds;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Transactional
@Service
public class TeacherService {
  private final TeacherMapper mapper;

  public Page<Teacher> selectAll(Pageable pageable) {
    var teachers = mapper.selectAll(pageable);

    var total = mapper.count();
    return new PageImpl<>(teachers, pageable, total);
  }

  public List<Teacher> selectAll() {
    return mapper.selectAll();
  }

  public Teacher selectByPrimaryKey(Long id) {
    return mapper.selectByPrimaryKey(id);
  }

  public void save(Teacher teacher) {
    if (teacher.getId() == null) {
      mapper.insert(teacher);
    } else {
      mapper.updateByPrimaryKey(teacher);
    }
  }

  public void deleteByPrimaryKey(Long id) {
    mapper.deleteByPrimaryKey(id);
  }
}
