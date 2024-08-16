import { Button, Input } from "@nextui-org/react";

export default function PatientForm() {
  return (
    <div className="flex flex-col gap-4 w-5/6 h-1/6 border border-solid p-4 my-4 rounded justify-center">
      <h1 className="text-3xl">Add New Patient</h1>
      <Input
        type="text"
        label="Patient Name"
        key="name"
        color="default"
        placeholder="Patient Name"
      />
      <Input
        type="text"
        label="Patient Contact"
        key="contact"
        color="default"
        placeholder="Patient Contact"
      />
      <Input
        type="text"
        label="Patient Address"
        key="address"
        color="default"
        placeholder="Patient Address"
      />
      <Button
        color="success"
        size="md"
        radius="md"
        className="w-3/6 self-center"
        variant="ghost"
        isDisabled={false}
      >
        Add new Patient
      </Button>
    </div>
  );
}
