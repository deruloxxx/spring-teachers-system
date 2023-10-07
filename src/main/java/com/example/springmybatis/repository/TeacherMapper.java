package com.example.springmybatis.repository;

import com.example.springmybatis.model.Teacher;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface TeacherMapper {
  List<Teacher> selectAll();

  Teacher selectByPrimaryKey(Long id);

  int insert(Teacher record);

  int updateByPrimaryKey(Teacher record);

  int deleteByPrimaryKey(Long id);
}
