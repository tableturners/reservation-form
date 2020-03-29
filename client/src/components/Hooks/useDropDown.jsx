import React, { useState } from 'react';
import styled from 'styled-components';

const SelectWrapper = styled.select`
  align-items: center;
  display: flex;
  width: 260px;
  height: 30px;
  padding: 5px 24px 5px 30px;
  margin-left: 3px;
  border-radius: 3px;
  border-color: #cccccc;
  background-color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const Label = styled.div`
  display: block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 4px;
  text-size-adjust: 100%;

`;

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const Dropdownmaker = () => (
      <Label htmlFor={label}>
        {label}
          <SelectWrapper
          id={label}
          value={state}
          onChange={e=>setState(e.target.value)}
          onBlur={e=>setState(e.target.value)}
          disabled={!options.length}
            >
            <option>All</option>
            {options.map(item=>
            <option key={item} value={item}>{item}</option>)}
          </SelectWrapper>
    </Label>
    );
    return [state, Dropdownmaker, setState]
    }

    export default useDropdown