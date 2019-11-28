import styled from 'styled-components';

const Wrapper = styled.button`
  border: none;
  padding: 1rem 1.4rem;
  color: #fff;
  background-color: ${props => props.backgroundColor || '#CCC'};
`;

export { Wrapper };