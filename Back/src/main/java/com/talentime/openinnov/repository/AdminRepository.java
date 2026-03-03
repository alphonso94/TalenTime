package com.talentime.openinnov.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentime.openinnov.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> {
}