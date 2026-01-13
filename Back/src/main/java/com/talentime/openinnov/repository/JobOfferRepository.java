package com.talentime.openinnov.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentime.openinnov.entity.JobOffer;

@Repository
public interface JobOfferRepository extends JpaRepository<JobOffer, Long> {
}