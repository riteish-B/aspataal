package visitService

import "strings"

var Visits []Visit = []Visit{}

func addVisit(visit Visit) {
	Visits = append(Visits, visit)
}

func getVisitsForAPatient(patientId string) []Visit {
	var patientVisits []Visit
	for _, v := range Visits {
		if strings.Contains(v.PatientId, patientId) {
			patientVisits = append(patientVisits, v)
		}
	}
	return patientVisits
}	