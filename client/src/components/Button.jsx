import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  padding: 12px 16px 12px 16px;
  background-color: ${props => props.theme.buttonBackgroundColor};
  color: #fff;
  cursor: pointer;
  width: 18rem;
  display: inline-block;
`;

const Button = () => {
  return (
    <StyledButton onClick={() => console.log(input)}>
      Find a Table
    </StyledButton>
  );
  }

  export default Button;