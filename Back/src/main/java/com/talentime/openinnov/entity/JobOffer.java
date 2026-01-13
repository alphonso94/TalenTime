package com.talentime.openinnov.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "job_offer")
@Data
public class JobOffer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private Company company;

    private String title;
    private String description;
    private String type;
    private String location;
    private String duration;

    @Column(name = "required_level")
    private String requiredLevel;

    @Column(name = "required_skills")
    private String requiredSkills;

    @Column(name = "is_active")
    private boolean isActive = true;
}