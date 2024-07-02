import {
  CardBody,
  CardBodyTitle,
  CardTitle,
  ContainerPrincipal,
  ContainerWithIMGbg,
  Wrapper,
} from "./styles";

export const Login = () => {
  return (
    <Wrapper>
      <ContainerPrincipal>
        <CardTitle>FOCUS ANALYTICS</CardTitle>

        <CardBody>
          <CardBodyTitle>FAÇA SEU LOGIN</CardBodyTitle>
        </CardBody>
      </ContainerPrincipal>

      <ContainerWithIMGbg />
    </Wrapper>
  );
};
