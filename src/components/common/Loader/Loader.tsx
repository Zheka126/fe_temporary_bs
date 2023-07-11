import { Loadercontainer, StyledLoader } from "./Loader.styles";

interface LoaderProps {
  size: "mini" | "medium" | "big";
}

export const Loader = ({ size }: LoaderProps) => {
  return (
    <Loadercontainer>
      <StyledLoader size={size} />
    </Loadercontainer>
  );
};