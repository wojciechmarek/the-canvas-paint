import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CommonModelsProps {}

const StyledCommonModels = styled.div`
  color: pink;
`;

export function CommonModels(props: CommonModelsProps) {
  return (
    <StyledCommonModels>
      <h1>Welcome to CommonModels!</h1>
    </StyledCommonModels>
  );
}

export default CommonModels;
