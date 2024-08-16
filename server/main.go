package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/riteshb/aspataal/patientService"
)

func main() {
	port := ":3000"
	r := chi.NewRouter()
	r.Use(middleware.Logger)
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})
	r.Mount("/api/patients", patientService.New())
	http.ListenAndServe(port, r)
}	