import { Patient } from "./types/types";

export const getPatientsForName = async (name: String) => {
  const url = `/api/patients/search/${name}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch patients with name ${name}`);
  }
  return await response.json();
};

export const getPatientById = async (id: String) => {
  const url = `/api/patients/${id}`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to fetch patient with id ${id}`);
  }
  return await response.json();
};

export const createPatient = async (patient: Patient) => {
  const response = await fetch(`/api/patients`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(patient),
  });

  if (!response.ok) {
    throw new Error(`Failed to create patient`);
  }

  return await response.json();
};

export const getVisitsForPatient = async (patientId: String) => {
  const url = `/api/visits/${patientId}`;
  const response = await fetch(url);
  if (!response.ok) {
    const error = new Error(`Failed to fetch visits for patient ${patientId}`);
    throw error;
  }
  const data = await response.json();
  return data;
};

export const addVisitForPatient = async (visit: any) => {
  const response = await fetch(`/api/visits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(visit),
  });
  if (!response.ok) {
    const error = new Error(
      `Failed to add visit for patient ${visit.patientId}`
    );
    throw error;
  } else {
    return await response.json();
  }
};
