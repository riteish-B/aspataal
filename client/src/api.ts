import { Patient, Visit } from "./types/types";

export const getPatientsForName = async (name: String) => {
  const url = `/api/patients/search/${name}`;
  return await makeApiCall(url, "GET", null);
};

export const getPatientById = async (id: String) => {
  const url = `/api/patients/${id}`;
  return await makeApiCall(url, "GET", null);
};

export const createPatient = async (patient: Patient) => {
  const url = `/api/patients`;
  return await makeApiCall(url, "POST", patient);
};

export const getVisitsForPatient = async (patientId: String) => {
  const url = `/api/visits/${patientId}`;
  return await makeApiCall(url, "GET", null);
};

export const addVisitForPatient = async (visit: Visit) => {
  const url = `/api/visits`;
  return await makeApiCall(url, "POST", visit);
};

const makeApiCall = async (url: string, method: string, data: unknown) => {
  const body = data ? JSON.stringify(data) : null;
  const requestOptions: Request = new Request(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: body,
  });

  const response = await fetch(requestOptions);

  if (!response.ok) {
    const error = new Error(`Failed to ${method} ${url}`);
    throw error;
  }
  return await response.json();
};
