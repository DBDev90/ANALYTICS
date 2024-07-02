import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const ContainerPrincipal = styled.div`
  width: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const CardTitle = styled.span`
  font-size: ${(props) => props.theme.FONT_SIZES.lg};
  font-weight: 800;
  color: ${(props) => props.theme.COLORS.authCardTitleColor};
`;

export const ContainerWithIMGbg = styled.div`
  flex: 1;
  background-image: url("");
`;
