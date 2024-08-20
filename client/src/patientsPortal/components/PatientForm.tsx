import { Button, CheckboxIcon, Input } from "@nextui-org/react";
import { Patient } from "../../types/types";
import { useEffect, useState } from "react";
import { createPatient } from "../../api";

function getBasePatient(): Patient {
  return {
    name: "",
    contact: "",
    address: "",
    insurance: {
      name: "",
      group: "",
      id: "",
      company: "",
    },
  };
}

export default function PatientForm() {
  const [patient, setPatient] = useState<Patient>(getBasePatient());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
      setSuccess(false);
    }, 2000);
  }, [error, success]);

  const handleChange = (e: any) => {
    if (e.target.id.includes("insurance")) {
      const key = e.target.id.split("-")[1];
      setPatient({
        ...patient,
        insurance: {
          ...patient.insurance,
          [key]: e.target.value,
        },
      });
    } else {
      setPatient({ ...patient, [e.target.id]: e.target.value });
    }
  };

  const handleClick = async () => {
    try {
      setLoading(true);
      await createPatient(patient);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
      setPatient(getBasePatient());
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-5/6 h-1/6 border border-solid p-4 my-4 rounded justify-center">
        <h1 className="text-3xl">Add New Patient</h1>
        <Input
          type="text"
          label="Patient Name"
          key="name"
          id="name"
          color="default"
          placeholder="Patient Name"
          onChange={(e) => handleChange(e)}
          value={patient.name}
        />
        <Input
          label="Patient Contact"
          key="contact"
          id="contact"
          color="default"
          placeholder="Patient Contact"
          onChange={(e) => handleChange(e)}
          value={patient.contact}
          typeof="text"
        />
        <Input
          type="text"
          label="Patient Address"
          key="address"
          id="address"
          color="default"
          placeholder="Patient Address"
          onChange={(e) => handleChange(e)}
          value={patient.address}
        />
        <Input
          type="text"
          label="Insurance Company"
          key="insuranceCompany"
          id="insurance-company"
          color="default"
          placeholder="Insurance Company"
          onChange={(e) => handleChange(e)}
          value={patient.insurance?.company}
        />
        <Input
          type="text"
          label="Insurance name"
          key="insuranceName"
          id="insurance-name"
          color="default"
          placeholder="Insurance Name"
          onChange={(e) => handleChange(e)}
          value={patient.insurance?.name}
        />
        <Input
          type="text"
          label="Insurance Group"
          key="insuranceGroup"
          id="insurance-group"
          color="default"
          placeholder="Insurance Group"
          onChange={(e) => handleChange(e)}
          value={patient.insurance?.group}
        />
        <Input
          type="text"
          label="Insurance ID"
          key="insuranceId"
          id="insurance-id"
          color="default"
          placeholder="Insurance ID"
          onChange={(e) => handleChange(e)}
          value={patient.insurance?.id}
        />
        <Button
          color="success"
          size="md"
          radius="md"
          className="w-3/6 self-center"
          variant="ghost"
          isDisabled={false}
          onClick={handleClick}
          isLoading={loading}
        >
          Add new Patient
        </Button>
      </div>
      {error && !loading && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">
            Error Adding Patient, please try again.
          </span>
          <span className="font-medium">
            <CheckboxIcon />
          </span>
        </div>
      )}
      {success && !loading && (
        <div
          className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span className="font-medium">Patient Added Successfully!</span>
        </div>
      )}
    </>
  );
}
