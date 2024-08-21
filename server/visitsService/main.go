package visitService

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)


type Visit struct {
	ID   string `json:"id"`
	PatientId string `json:"patientId" validate:"required"`
	Date string `json:"date" validate:"required"`
	Summary string `json:"summary" validate:"required"`
	Doctor string `json:"doctor" validate:"required"`
	Notes string `json:"notes" validate:"required"`	
}

func New() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Post("/", CreateVisitHandler)
	r.Get("/{patientId}", GetVisitsHandler)
	return r
}