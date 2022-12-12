package com.CentralHealthLog.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.io.File;
import java.sql.Blob;
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

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date uploadDate;

    private String diagnosis;

    private Long prescriptionId;

    private String uploadedBy;

    private Integer severity;

}
