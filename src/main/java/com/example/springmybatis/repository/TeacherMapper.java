package com.example.springmybatis.repository;

import com.example.springmybatis.model.Teacher;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface TeacherMapper {
  @Select("SELECT * FROM teacher")
  List<Teacher> selectAll();
}
