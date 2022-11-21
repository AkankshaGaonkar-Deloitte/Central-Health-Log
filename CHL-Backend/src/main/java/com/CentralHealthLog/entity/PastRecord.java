package com.CentralHealthLog.entity;

import lombok.*;

import javax.persistence.*;
import java.io.File;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PastRecord {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long patientId;

    @Column(nullable = false)
    private Long doctorId;

    private String doctorName;

    private Date date;

    private String diagnosis;

    private File prescription;

    private String uploadedBy;
}
