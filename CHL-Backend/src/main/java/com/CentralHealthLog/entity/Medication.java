package com.CentralHealthLog.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Medication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long patientId;

    @Column(nullable = false, unique = true)
    private String medicine;

    private String dosage;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date startingDate;

    @Column(nullable = false)
    private Long recordId;

    @Column(nullable = false)
    private boolean isCurrent;
}
