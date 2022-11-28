package com.CentralHealthLog.entity;

import lombok.Data;
import javax.persistence.*;
@Entity
@Data
@Table(name = "roles")
public class roles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false, length = 45)
    private String name;
}