INSERT
INTO
  past_record
  (patient_id, doctor_id, doctor_name, upload_date, diagnosis, uploaded_by, severity)
VALUES
  (43190, 45241, 'Dr. Prasad', '2022-11-21', 'Polio', 'Doctor', 9),
  (43190, 45241, 'Dr. Prasad', '2012-9-12', 'Tuberculosis', 'Doctor', 6),
  (43190, 33421, 'Dr. Tashmeet', '2021-01-25', 'Hep-C', 'Doctor', 8),
  (43190, 55765, 'Dr. Akanksha', '2019-10-15', 'Pneumonia', 'Self', 5),
  (89197, 33421, 'Dr. Tashmeet', '2011-09-17', 'Hep-A', 'Doctor', 4);


INSERT
INTO
  medication
  (medicine, record_id, dosage, starting_date, is_current, patient_id)
VALUES
  ('Albendazole', 1, '0-0-1', '2022-11-21', true, 43190),
  ('HCQS 200', 1, '0-1-0', '2022-11-21', true, 43190),
  ('Pioz 15', 2, '0-0-1', '2012-09-12', true, 43190),
  ('Minoxidil 5% sol', 3, '0-0-1', '2021-01-25', true, 43190),
  ('Luliconazole 3% sol', 4, '1-0-1', '2021-01-25', false, 43190),
  ('Crocin', 2, '1-1-1', '2012-09-12', false, 43190),
  ('Shelcal XT', 3, '0-0-1', '2021-01-25', false, 43190);

INSERT INTO
BMI VALUES
  (1,20,'2021-09-09'),
  (2,24,'2021-10-09'),
  (3,22,'2021-11-09'),
  (4,28,'2021-12-09'),
  (5,23,'2022-01-09');

INSERT INTO
blood_pressure VALUES
  (1,'2021-09-09',90,43190,110),
  (2,'2021-10-09',80,43190,120),
  (3,'2021-11-09',75,43190,105),
  (4,'2021-12-09',82,43190,100),
  (5,'2022-01-09',67,43190,110);

INSERT INTO
pulse VALUES
  (1,'2021-09-09',100),
  (2,'2021-10-09',110),
  (3,'2021-11-09',90),
  (4,'2021-12-09',85),
  (5,'2022-01-09',97);

INSERT
INTO
  medical_data
  (patient_id, is_current, height, weight, bmi, pulse_rate, blood_pressure, blood_group, allergies, immunizations, chronic_health_problems, family_medical_history, upload_date)
VALUES
  (43190, TRUE, 6, 80, 24, 70, '120/80', 'AB+', 'Pollen', 'Polio,Encephalitis', 'Diabetes,Low BP', 'Allopecia', '2022-11-21'),
  (43190, FALSE, 6, 81, 24.3, 65, '120/80', 'AB+', 'Pollen', 'Polio,Encephalitis', 'Diabetes,Low BP', 'Allopecia', '2021-10-12');

INSERT
INTO
  patient
  (address, age, email, firstname, gender, lastname, password, phone_no, username)
VALUES
  ('Mangalore',21,'akanksha@gmail.com','Akanksha','Female','Gaonkar','password','9632946608','ashu@123');

INSERT
INTO
  patient
  (id, username, password, firstname, lastname, phone_no, email, gender, age, address)
VALUES
  (43190, 'Rohit123', '123', 'Rohit', 'Pandey', '626493438', 'rohit12@gmail.com', 'Male', 29, 'Sector 2, HSR layout, Bangalore, Karnataka, 560087'),
  (12345, 'Tash12', '123', 'Tashmeet', 'Kaur', '6264934388', 'tash12@gmail.com', 'Female', 23, 'Sector 2, HSR layout, Bangalore, Karnataka, 560087');

INSERT
INTO
  doctor
  (username, password, doctor_name, phone_no, registration_no, year_of_reg, state_medical_council, qualification, email, speciality, age, gender, status_code, comment)
VALUES
  ('Amit23', '123', 'Amit Tiwari', '99999999', 456, 1997, 'Goa Medical Council', 'MBBS(Neurology)', 'tiwari@gmail.com', 'Neurologist', 49, 'Male', 'REGISTERED', ''),
  ('Akanksha', '123', 'Akanksha Jain', '99999946', 456, 1997, 'Goa Medical Council', 'MBBS(Neurology)', 'ashu@gmail.com', 'Neurologist', 49, 'Female', 'TO_BE_REGISTERED', ''),
  ('Prasad15', '123', 'Prasad Singh', '99999993', 456, 1997, 'Goa Medical Council', 'MBBS(Neurology)', 'prasi@gmail.com', 'Neurologist', 49, 'Male', 'TO_BE_REGISTERED', ''),
  ('Bhishma', '123', 'Bhishma Malhotra', '99999992', 456, 1997, 'Goa Medical Council', 'MBBS(Neurology)', 'bhi@gmail.com', 'Neurologist', 49, 'Male', 'IN_PROGRESS', '');

INSERT
INTO
  admin (name, username, password)
VALUES
  ('Kunal Shukla', 'admin', 'admin');