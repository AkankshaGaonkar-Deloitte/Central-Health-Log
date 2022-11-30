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
public class Pulse {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Long id;
    @Column
    @JsonFormat(pattern="yyyy-MM-dd")
    public Date date;
    @Column(nullable = false)
    public Integer pulse;

}
