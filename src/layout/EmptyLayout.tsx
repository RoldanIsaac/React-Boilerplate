import { Outlet } from "react-router-dom";

type EmptyLayoutProps = {};

const EmptyLayout = ({}: EmptyLayoutProps) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default EmptyLayout;
