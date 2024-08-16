export const getPatientsForName = async (name: String) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/patients/search/${name}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPatientById = async (id: String) => {
  try {
    const response = await fetch(`http://localhost:3000/api/patients/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
