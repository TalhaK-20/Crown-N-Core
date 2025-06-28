import { ReactNode } from "react";
import Header from "../components/Header";

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <>
      <Header />
      <div className="main-body">{children}</div>
    </>
  );
};

export default MainLayout;
