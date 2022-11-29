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