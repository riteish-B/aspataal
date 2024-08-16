import { Patient } from "../../types/types";

type PatientsPropType = {
  patients: Patient[];
};
export default function Patients(props: PatientsPropType) {
  return (
    <div className="flex flex-col items-center w-full h-full p-2">
      <h1 className="text-3xl">Patients List</h1>
      {props.patients.map((patient: Patient) => (
        <div
          className="flex flex-col gap-2 w-5/6 p-2 rounded justify-center m-2 cursor-pointer border border-solid border-white"
          onClick={() => (window.location.href = `/patients/${patient.id}`)}
        >
          <p className="font-bold">Name: {patient.name}</p>
          <p className="font-bold">Contact: {patient.contact}</p>
        </div>
      ))}
    </div>
  );
}
