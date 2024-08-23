import { useNavigate } from "react-router-dom";
import { Patient } from "../../types/types";

type PatientsPropType = {
  patients: Patient[];
  onClose: () => void;
};

export default function Patients(props: PatientsPropType) {
  const navigate = useNavigate();
  return (
    <div className="my-2 flex flex-col gap-2 w-full h-full">
      <p
        className="text-l text-blue-500 cursor-pointer"
        onClick={() => props.onClose()}
      >
        Go back
      </p>
      <div className="flex flex-col items-center w-full h-full p-2">
        <h1 className="text-3xl">Patients List</h1>
        {props.patients.map((patient: Patient) => (
          <div
            className="flex flex-col gap-2 w-5/6 p-2 rounded justify-center m-2 cursor-pointer border border-solid border-white"
            key={patient.id}
            onClick={() => navigate(`/patients/${patient.id}`)}
          >
            <p className="font-bold">Name: {patient.name}</p>
            <p className="font-bold">Contact: {patient.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
