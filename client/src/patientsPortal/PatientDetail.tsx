import { useEffect, useState } from "react";
import { getPatientById } from "../api";
import { Patient } from "../types/types";
import { Accordion, AccordionItem, Spinner } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import VisitsSection from "./components/VisitsSection";

export default function PatientDetail() {
  const patientId = window.location.pathname.split("/")[2];
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getPatient(patientId: String) {
      try {
        const patient = await getPatientById(patientId);
        setPatient(patient);
      } catch (err) {
        console.error(err);
        window.alert("Error fetching patient");
      } finally {
        setLoading(false);
      }
    }
    getPatient(patientId);
  }, []);
  return (
    <div className="my-2">
      {loading && (
        <div>
          <Spinner color="secondary" />
        </div>
      )}
      {!loading && patient.name && (
        <div>
          <Link className="text-blue-500" to="/">
            Go Back
          </Link>
          <Accordion
            variant="light"
            selectionMode="multiple"
            defaultExpandedKeys={["1", "2", "3"]}
            className="bg-slate-800 text-white"
          >
            <AccordionItem
              key="1"
              aria-label="Patient Details"
              title="Patient Details"
            >
              <p className="font-bold">Name: {patient.name}</p>
              <p className="font-bold">Contact: {patient.contact}</p>
              <p className="font-bold">Address: {patient.address}</p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Insurance Information"
              title="Insurance Information"
            >
              <p className="font-bold">Name: {patient.insurance.name}</p>
              <p className="font-bold">Group: {patient.insurance.group}</p>
              <p className="font-bold">Company: {patient.insurance.company}</p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Medical History"
              title="Medical History"
            ></AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Prescriptions"
              title="Prescriptions"
            ></AccordionItem>
            <AccordionItem key="5" aria-label="Visits" title="Visits">
              <VisitsSection patientId={patientId} />
            </AccordionItem>
            <AccordionItem
              key="6"
              aria-label="Appointments"
              title="Appointments"
            ></AccordionItem>
          </Accordion>
        </div>
      )}
    </div>
  );
}
