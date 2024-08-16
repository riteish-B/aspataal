package patientService

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

type PatientService struct{}

type Patient struct {
	ID   string `json:"id"`
	Name string `json:"name" validate:"required"`
	Address string `json:"address" validate:"required"`
}

func New() *chi.Mux {
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", GetPatientHandler)
	r.Post("/", CreatePatientHandler)
	return r
}