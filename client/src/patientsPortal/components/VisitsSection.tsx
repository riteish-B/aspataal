import { useEffect, useState } from "react";
import { getVisitsForPatient } from "../../api";
import { Button } from "@nextui-org/react";
import FormModal from "./FormModal";
import PatientVisitForm from "./PatientVisitForm";

export default function VisitsSection({ patientId }: { patientId: string }) {
  const [visits, setVisits] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const onOpenChange = (isOpen: boolean) => setIsOpen(isOpen);

  useEffect(() => {
    async function getVisits() {
      try {
        const visits = await getVisitsForPatient(patientId);
        setVisits(visits);
      } catch (err) {
        console.error(err);
      }
    }
    getVisits();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-2 w-full p-2 rounded justify-center">
        <Button
          color="secondary"
          size="lg"
          fullWidth={false}
          className="items-center self-end"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add Visit
        </Button>
      </div>
      <div className="flex flex-col items-center w-full h-full p-2">
        {visits.length > 0 &&
          visits.map((visit: any) => (
            <div
              className="flex flex-col gap-2 w-5/6 p-2 rounded justify-center m-2 cursor-pointer border border-solid border-white"
              key={visit.id}
              onClick={() =>
                (window.location.href = `/patients/${patientId}/visits/${visit.id}`)
              }
            >
              <p className="font-bold">Date: {visit.date}</p>
              <p className="font-bold">Doctor: {visit.doctor}</p>
            </div>
          ))}
        {visits.length == 0 && (
          <p className="text-3xl font-bolder">No visits found</p>
        )}
      </div>
      <FormModal
        size="5xl"
        header="Visit Info Form"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        content={<PatientVisitForm patientId={patientId} />}
      />
    </div>
  );
}
