package com.talentime.openinnov.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentime.openinnov.entity.DataExportRequest;

@Repository
public interface DataExportRequestRepository extends JpaRepository<DataExportRequest, Long> {
}