import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureTopMenuProps {}

const StyledFeatureTopMenu = styled.div`
  color: pink;
`;

export function FeatureTopMenu(props: FeatureTopMenuProps) {
  return (
    <StyledFeatureTopMenu>
      <h1>Welcome to FeatureTopMenu!</h1>
    </StyledFeatureTopMenu>
  );
}

export default FeatureTopMenu;
