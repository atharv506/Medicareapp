-- Insert sample data for hospital management system

-- Insert sample users
INSERT INTO users (email, password_hash, user_type) VALUES
('john.smith@email.com', '$2b$10$example_hash_1', 'patient'),
('emily.johnson@email.com', '$2b$10$example_hash_2', 'patient'),
('robert.davis@email.com', '$2b$10$example_hash_3', 'patient'),
('sarah.wilson@email.com', '$2b$10$example_hash_4', 'patient'),
('dr.sarah.wilson@hospital.com', '$2b$10$example_hash_5', 'doctor'),
('dr.michael.brown@hospital.com', '$2b$10$example_hash_6', 'doctor'),
('dr.emily.davis@hospital.com', '$2b$10$example_hash_7', 'doctor'),
('dr.james.miller@hospital.com', '$2b$10$example_hash_8', 'doctor'),
('admin@hospital.com', '$2b$10$example_hash_9', 'admin');

-- Insert sample patients
INSERT INTO patients (user_id, patient_id, first_name, last_name, date_of_birth, gender, blood_type, phone, address, emergency_contact_name, emergency_contact_phone) VALUES
(1, 'P-2024-001', 'John', 'Smith', '1990-05-15', 'Male', 'O+', '+1-555-123-4567', '123 Main St, City, State 12345', 'Jane Smith', '+1-555-123-4568'),
(2, 'P-2024-002', 'Emily', 'Johnson', '1996-03-22', 'Female', 'A+', '+1-555-234-5678', '456 Oak Ave, City, State 12345', 'Michael Johnson', '+1-555-234-5679'),
(3, 'P-2024-003', 'Robert', 'Davis', '1979-11-08', 'Male', 'B-', '+1-555-345-6789', '789 Pine Rd, City, State 12345', 'Linda Davis', '+1-555-345-6790'),
(4, 'P-2024-004', 'Sarah', 'Wilson', '1972-07-30', 'Female', 'AB+', '+1-555-456-7890', '321 Elm St, City, State 12345', 'David Wilson', '+1-555-456-7891');

-- Insert sample doctors
INSERT INTO doctors (user_id, doctor_id, first_name, last_name, specialization, license_number, phone, department) VALUES
(5, 'D-001', 'Sarah', 'Wilson', 'Internal Medicine', 'MD123456', '+1-555-111-2222', 'Internal Medicine'),
(6, 'D-002', 'Michael', 'Brown', 'Endocrinology', 'MD234567', '+1-555-222-3333', 'Endocrinology'),
(7, 'D-003', 'Emily', 'Davis', 'Cardiology', 'MD345678', '+1-555-333-4444', 'Cardiology'),
(8, 'D-004', 'James', 'Miller', 'Orthopedics', 'MD456789', '+1-555-444-5555', 'Orthopedics');

-- Insert sample medical records
INSERT INTO medical_records (patient_id, doctor_id, record_type, title, description, diagnosis, treatment, notes, record_date) VALUES
(1, 1, 'Consultation', 'Annual Physical Examination', 'Routine annual checkup', 'Hypertension Stage 1', 'Lifestyle modifications, medication', 'Patient advised to reduce sodium intake', '2024-01-15'),
(2, 2, 'Consultation', 'Diabetes Follow-up', 'Regular diabetes monitoring', 'Type 2 Diabetes Mellitus', 'Metformin, dietary counseling', 'Blood sugar levels improving', '2024-01-14'),
(3, 3, 'Emergency', 'Chest Pain Evaluation', 'Patient presented with chest pain', 'Coronary Artery Disease', 'Cardiac catheterization scheduled', 'Patient stable, monitoring required', '2024-01-13'),
(4, 4, 'Consultation', 'Joint Pain Assessment', 'Chronic joint pain evaluation', 'Rheumatoid Arthritis', 'Anti-inflammatory medication', 'Physical therapy recommended', '2024-01-12');

-- Insert sample prescriptions
INSERT INTO prescriptions (patient_id, doctor_id, medication_name, dosage, frequency, duration, instructions, prescribed_date, status) VALUES
(1, 1, 'Lisinopril', '10mg', 'Once daily', '30 days', 'Take with or without food', '2024-01-15', 'active'),
(1, 1, 'Aspirin', '81mg', 'Once daily', 'Ongoing', 'Take with food to reduce stomach irritation', '2024-01-15', 'active'),
(2, 2, 'Metformin', '500mg', 'Twice daily', '90 days', 'Take with meals', '2024-01-14', 'active'),
(3, 3, 'Atorvastatin', '20mg', 'Once daily', '30 days', 'Take in the evening', '2024-01-13', 'active'),
(4, 4, 'Ibuprofen', '400mg', 'Three times daily', '14 days', 'Take with food', '2024-01-12', 'completed');

-- Insert sample test reports
INSERT INTO test_reports (patient_id, doctor_id, test_type, test_name, test_date, results, normal_range, status) VALUES
(1, 1, 'Blood Test', 'Complete Blood Count', '2024-01-15', 'WBC: 7.2, RBC: 4.5, Hemoglobin: 14.2', 'WBC: 4.0-11.0, RBC: 4.2-5.4, Hgb: 12.0-16.0', 'completed'),
(1, 1, 'Blood Test', 'Lipid Panel', '2024-01-15', 'Total Cholesterol: 220, LDL: 140, HDL: 45', 'Total: <200, LDL: <100, HDL: >40', 'completed'),
(2, 2, 'Blood Test', 'HbA1c', '2024-01-14', '7.2%', '<7.0%', 'completed'),
(3, 3, 'Imaging', 'ECG', '2024-01-13', 'Abnormal - ST elevation in leads II, III, aVF', 'Normal sinus rhythm', 'completed'),
(3, 3, 'Imaging', 'Chest X-Ray', '2024-01-13', 'Clear lung fields, normal heart size', 'Normal', 'completed');

-- Insert sample appointments
INSERT INTO appointments (patient_id, doctor_id, appointment_date, appointment_time, appointment_type, status, notes) VALUES
(1, 1, '2024-01-16', '09:00:00', 'Follow-up', 'scheduled', 'Blood pressure check'),
(2, 2, '2024-01-16', '10:30:00', 'Consultation', 'confirmed', 'Diabetes management review'),
(3, 3, '2024-01-16', '14:00:00', 'Emergency', 'scheduled', 'Urgent cardiac evaluation'),
(4, 4, '2024-01-17', '11:00:00', 'Follow-up', 'scheduled', 'Joint pain assessment'),
(1, 1, '2024-01-20', '15:30:00', 'Consultation', 'scheduled', 'Medication review');

-- Insert sample bills
INSERT INTO bills (patient_id, bill_number, description, amount, bill_date, due_date, status) VALUES
(1, 'B-2024-001', 'Consultation and Blood Tests', 250.00, '2024-01-15', '2024-01-30', 'paid'),
(2, 'B-2024-002', 'Diabetes Consultation and HbA1c Test', 180.00, '2024-01-14', '2024-01-29', 'pending'),
(3, 'B-2024-003', 'Emergency Consultation, ECG, and X-Ray', 450.00, '2024-01-13', '2024-01-28', 'pending'),
(4, 'B-2024-004', 'Orthopedic Consultation', 120.00, '2024-01-12', '2024-01-27', 'overdue'),
(1, 'B-2024-005', 'Follow-up Consultation', 100.00, '2024-01-10', '2024-01-25', 'paid');
