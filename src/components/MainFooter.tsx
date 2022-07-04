import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: #e2e8f0;
`;

function MainFooter() {
  return (
    <StyledFooter>
      This is the footer
    </StyledFooter>
  );
}

export { MainFooter };