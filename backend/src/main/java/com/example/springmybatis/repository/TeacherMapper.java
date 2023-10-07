package com.example.springmybatis.repository;

import com.example.springmybatis.model.Teacher;
import org.apache.ibatis.annotations.*;
import org.springframework.data.domain.Pageable;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface TeacherMapper {
  Long count();

  List<Teacher> selectAll(@Param("pageable") Pageable pageable);

  List<Teacher> selectAll();

  Teacher selectByPrimaryKey(Long id);

  int insert(Teacher record);

  int updateByPrimaryKey(Teacher record);

  int deleteByPrimaryKey(Long id);
}
