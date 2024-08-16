package patientService

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-playground/validator/v10"
	"github.com/google/uuid"
)


var validate = validator.New()
func CreatePatientHandler(w http.ResponseWriter, r *http.Request) {
	var patient Patient

	// Decode the request body to a Patient struct
	err := json.NewDecoder(r.Body).Decode(&patient)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, "Error: %s", err)
		return
	}

	// check if the request is valid
	err = validate.Struct(patient)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, "Error: %s", err)
		return
	}

	// id is generated using uuid in the server side
	patient.ID = uuid.NewString()
	addPatient(patient)

	w.WriteHeader(http.StatusOK)
	fmt.Fprintf(w, "Patient Created %s", patient.ID)
}

func GetPatientHandler(w http.ResponseWriter, r *http.Request) {
	var patientId = r.URL.Query().Get("id");

	patient := findPatientById(patientId)
	if patient.ID == "" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintf(w, "Patient not found")
		return
	}
	w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(http.StatusCreated)
    json.NewEncoder(w).Encode(patient)
}