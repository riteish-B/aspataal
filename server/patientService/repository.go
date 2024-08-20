package patientService

import "strings"

var Patients []Patient = []Patient{};

func addPatient(Patient Patient){
	Patients = append(Patients, Patient);
}

func deletePatient(Patient Patient){
	for i, v := range Patients {
		if v.ID == Patient.ID {
			Patients = append(Patients[:i], Patients[i+1:]...)
			return
		}
	}	
}

func findPatientById(id string) Patient {
	for _, v := range Patients {
		if v.ID == id {
			return v
		}
	}
	return Patient{}
}

func getPatientsForName(patientName string) []Patient {
	var patients []Patient
	for _, v := range Patients {
		if strings.Contains(v.Name, patientName) {
			patients = append(patients, v)
		}
	}
	return patients
}