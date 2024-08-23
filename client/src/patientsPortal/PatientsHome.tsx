import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Patient } from "../types/types";
import { getPatientsForName } from "../api";
import Patients from "./components/Patients";
import PatientForm from "./components/PatientForm";

export default function PatientsHome() {
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState<Patient[]>([]);

  const handleSearch = async () => {
    try {
      const data = await getPatientsForName(search);
      setPatients([...data]);
    } catch (error) {
      console.error(error);
      window.alert("Error fetching patients");
      setPatients([]);
    } finally {
      setSearch("");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:gap-2 justify-center lg:items-start items-center p-2">
        {patients.length == 0 && (
          <div
            className="flex flex-col
         gap-4 w-5/6 h-1/6 border border-solid p-4 my-4 rounded justify-center bg-slate-800 text-white"
          >
            <h1 className="text-3xl">Search For Patients</h1>
            <Input
              type="text"
              label="Search Patient"
              key="search"
              color="default"
              placeholder="Search Patient"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button
              color="secondary"
              size="md"
              radius="md"
              className="w-3/6 self-center"
              onClick={handleSearch}
              variant="ghost"
              isDisabled={!search}
            >
              Search
            </Button>
          </div>
        )}

        {patients.length == 0 && <PatientForm />}
        {patients.length > 0 && (
          <Patients patients={patients} onClose={() => setPatients([])} />
        )}
      </div>
    </>
  );
}
