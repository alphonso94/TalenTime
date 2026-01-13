package com.talentime.openinnov.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.talentime.openinnov.entity.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
}