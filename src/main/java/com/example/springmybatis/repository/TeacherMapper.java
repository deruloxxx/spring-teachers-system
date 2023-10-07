package com.example.springmybatis.repository;

import com.example.springmybatis.model.Teacher;
import org.apache.ibatis.annotations.*;
import org.apache.ibatis.session.RowBounds;

import java.util.List;

@Mapper
public interface TeacherMapper {
  Long count();

  List<Teacher> selectAll(RowBounds rowBounds);

  List<Teacher> selectAll();

  Teacher selectByPrimaryKey(Long id);

  int insert(Teacher record);

  int updateByPrimaryKey(Teacher record);

  int deleteByPrimaryKey(Long id);
}
