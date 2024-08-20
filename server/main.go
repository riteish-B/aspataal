package main

import (
	"log"
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
	log.Println("Server Started. Listening on port ", port)
	log.Fatal(http.ListenAndServe(port, r))
}	