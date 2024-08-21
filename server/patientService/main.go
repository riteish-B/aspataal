package patientService

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type PatientService struct{}

type Insurance struct {
	ID   string `json:"id"`
	Name string `json:"name" validate:"required"`
	Company string `json:"company" validate:"required"`	
	Group string `json:"group" validate:"required"`
}

type Patient struct {
	ID   string `json:"id"`
	Name string `json:"name" validate:"required"`
	Address string `json:"address" validate:"required"`
	Insurance Insurance `json:"insurance" validate:"required"`
	Contact string `json:"contact" validate:"required"`
}

func New() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/{patientId}", GetPatientHandler)
	r.Get("/search/{patientName}", SearchPatientsHandler)
	r.Post("/", CreatePatientHandler)
	r.Delete("/{patientId}", DeletePatientHandler)
	return r
}