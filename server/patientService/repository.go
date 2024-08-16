package patientService

var Patients []Patient = []Patient{};

func addPatient(Patient Patient){
	Patients = append(Patients, Patient);
	println("Patient Added: ", Patient.Name)
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