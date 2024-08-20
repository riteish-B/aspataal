import { Patient } from "./types/types";

export const getPatientsForName = async (name: String) => {
  try {
    const response = await fetch(`/api/patients/search/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPatientById = async (id: String) => {
  try {
    const response = await fetch(`/api/patients/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPatient = async (patient: Patient) => {
  try {
    const response = await fetch(`/api/patients`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patient),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
