import React, { useState } from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  order: 6;
`;

const Button = ({ className, children }) => {
  
    const [activated, setActivated] = React.useState(false);
    return (
      <ButtonWrapper
        className={`button ${className}`}
        aria-pressed={activated ? 'true' : 'false'}
        onClick={() => setActivated(!activated)}
      >
        {children} Find a Table
      </ButtonWrapper>
    );
  }

  export default Button;