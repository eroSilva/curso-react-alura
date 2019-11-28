import React from 'react';

import { Wrapper } from './styled';

const Button = ({
  children,
  backgroundColor,
  removeAuthor,
  indexAuthor
}) => {
  return (
    <Wrapper 
      type="button"
      backgroundColor={backgroundColor}
      onClick={() => removeAuthor(indexAuthor)}
    >
      { children } 
    </Wrapper>
  )
}

export default Button;