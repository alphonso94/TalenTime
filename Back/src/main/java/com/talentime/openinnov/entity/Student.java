package com.talentime.openinnov.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "student")
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String phone;
    private Integer age;
    private String school;
    private String level;

    @Column(name = "field_of_study")
    private String fieldOfStudy;

    @Column(name = "cv_url")
    private String cvUrl;

    @Column(name = "photo_url")
    private String photoUrl;

    private String bio;
    private String skills;

    @Column(name = "is_deleted")
    private boolean isDeleted = false;
}