package com.talentime.openinnov.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentime.openinnov.entity.JobDating;

@Repository
public interface JobDatingRepository extends JpaRepository<JobDating, Long> {
}