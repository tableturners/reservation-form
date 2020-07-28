import React, { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  padding: 12px 16px 12px 16px;
  background-color: #da3743;
  color: #fff;
  cursor: pointer;
  width: 18rem;
  display: inline-block;
  /* height: 100%; */

`;

const Button = ({ className, children }) => {
  
    const [activated, setActivated] = React.useState(false);
    return (
      <StyledButton
        className={`button ${className}`}
        aria-pressed={activated ? 'true' : 'false'}
        onClick={() => setActivated(!activated)}
      >
        {children} Find a Table
      </StyledButton>
    );
  }

  export default Button;