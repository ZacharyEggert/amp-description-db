import { type FC } from "react";

interface FormHeaderProps {
  children: React.ReactNode;
}

const FormHeader: FC<FormHeaderProps> = ({ children }) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold">{children}</h1>
    </div>
  );
};

export default FormHeader;
