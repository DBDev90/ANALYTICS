import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const ContainerPrincipal = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  height: 100vh;
`;

export const CardTitle = styled.span`
  font-size: ${(props) => props.theme.FONT_SIZES.md};
  font-weight: 500;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CardBodyTitle = styled.span`
  font-size: ${(props) => props.theme.FONT_SIZES.lg};
  font-weight: 700;
`;

export const CardBodyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ContainerWithIMGbg = styled.div`
  flex: 1;
  background-image: url("");
`;
