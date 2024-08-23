import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { Visit } from "../../types/types";
import { addVisitForPatient } from "../../api";
import AlertButton from "./AlertButton";

export default function PatientVisitForm({ patientId }: { patientId: string }) {
  const [visit, setVisit] = useState<Visit>({
    date: new Date().toUTCString(),
    notes: "",
    summary: "",
    doctor: "",
    patientId: patientId,
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    const key = e.target.id.split("-")[1];
    setVisit({ ...visit, [key]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await addVisitForPatient(visit);
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  return (
    <div className="flex flex-col w-full h-full p-2 gap-2">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          label="Visit date"
          color="secondary"
          value={visit.date}
          onChange={handleChange}
          id="visit-date"
          type="text"
          size="lg"
        />
        <Input
          id="visit-doctor"
          type="text"
          label="Doctor"
          placeholder="Doctor name"
          color="secondary"
          value={visit.doctor}
          onChange={handleChange}
          size="lg"
        />
        <Textarea
          label="Notes"
          placeholder="Visit notes"
          id="visit-notes"
          color="secondary"
          onChange={handleChange}
          type="text"
          size="lg"
        />
        <Textarea
          label="Summary"
          placeholder="Visit summary"
          id="visit-summary"
          color="secondary"
          onChange={handleChange}
          type="text"
          size="lg"
        />
        <Button
          color="primary"
          variant="ghost"
          className="w-full"
          type="submit"
          size="lg"
        >
          Add
        </Button>
      </form>
      {error && (
        <div
          className="p-4 text-lg text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 flex justify-between"
          role="alert"
        >
          <span className="font-medium">
            Error Adding Visit for Patient. Please Try Again.
          </span>
          <AlertButton onClick={() => setError(false)} />
        </div>
      )}
      {success && (
        <div
          className="p-4 text-lg text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 flex justify-between"
          role="alert"
        >
          <span className="font-medium">
            Visit For Patient Added Successfully!!
          </span>
          <AlertButton onClick={() => setSuccess(false)} />
        </div>
      )}
    </div>
  );
}
