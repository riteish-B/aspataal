package visitService

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-playground/validator/v10"
	"github.com/google/uuid"
)
var validate = validator.New()
func CreateVisitHandler(w http.ResponseWriter, r *http.Request) {
	var visit Visit

	// Decode the request body to a Visit struct
	err := json.NewDecoder(r.Body).Decode(&visit)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, "Error: %s", err)
		return
	}	
	// check if the request is valid
	err = validate.Struct(visit)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		fmt.Fprintf(w, "Error: %s", err)
		return
	}
	// id is generated using uuid in the server side
	visit.ID = uuid.NewString()
	addVisit(visit)
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(visit)
}


func GetVisitsHandler(w http.ResponseWriter, r *http.Request) {	
	var patientId = chi.URLParam(r, "patientId")
	patientVisits := getVisitsForAPatient(patientId)
	if len(patientVisits) == 0 {
		w.WriteHeader(http.StatusNotFound)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(patientVisits)
}	