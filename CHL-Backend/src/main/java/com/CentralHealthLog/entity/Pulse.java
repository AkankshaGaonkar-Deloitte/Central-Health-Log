package com.CentralHealthLog.entity;

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
    public Date date;
    @Column(nullable = false)
    public Integer pulse;

}
