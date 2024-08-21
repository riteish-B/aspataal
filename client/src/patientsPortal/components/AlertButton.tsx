export default function AlertButton({
  onClick,
}: {
  onClick: (val: Boolean) => void;
}) {
  return (
    <div
      className="font-medium text-lg cursor-pointer w-10 border border-solid border-slate-700 rounded flex justify-center hover:bg-slate-700 hover:text-white"
      onClick={() => onClick(false)}
    >
      X
    </div>
  );
}
