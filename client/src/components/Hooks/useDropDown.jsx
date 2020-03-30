import React, { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.select`
  outline: none;
  border: none;
  border-style: none;
  border-bottom: 1px solid #d8d9db;  
  width: 100%;
  height: 30px;
  background-color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  &:hover {
        border-bottom: solid 2px #bf1722;
    }
  cursor: pointer;
`;

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const Dropdownmaker = () => (
      // <div>
          <SelectWrapper
          id={label}
          value={state}
          onChange={e=>setState(e.target.value)}
          onBlur={e=>setState(e.target.value)}
          disabled={!options.length}
            >
            {/* <option></option> */}
            {options.map(item=>
            <option key={item} value={item}>{item}</option>)}
          </SelectWrapper>
    // </div>
    );
    return [state, Dropdownmaker, setState]
    }

    export default useDropdown