import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <span>HomePage</span>
      <Outlet />
    </div>
  );
}
