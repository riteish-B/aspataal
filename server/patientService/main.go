package patientService

import (
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
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
	  
	// enable cors
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins:   []string{"https://*", "http://*"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	}))
	r.Use(middleware.Logger)
	r.Get("/{patientId}", GetPatientHandler)
	r.Get("/search/{patientName}", SearchPatientsHandler)
	r.Post("/", CreatePatientHandler)
	r.Delete("/{patientId}", DeletePatientHandler)
	return r
}