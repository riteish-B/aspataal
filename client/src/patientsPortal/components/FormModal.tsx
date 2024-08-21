import { Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

type ModalProps = {
  header: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  content: JSX.Element;
  size:
    | "full"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | undefined;
};

export default function FormModal({
  header,
  isOpen,
  onOpenChange,
  content,
  size,
}: ModalProps) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size={size}
        placement="top-center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-2 text-3xl">
                {header}
              </ModalHeader>
              <ModalBody className="flex">{content}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
