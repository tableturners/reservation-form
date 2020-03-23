import React, { useState } from 'react';
import styled from 'styled-components';

const PartySelectorWrapper = styled.div`
  display: inline-block;
`;

const SelectWrapper = styled.select`
  width: 200px;
  height: 30px;
  padding: 5px 24px 5px 30px;
  margin-left: 3px;
  border-radius: 3px;
  border-color: #cccccc;
  background-color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
const PartySelector = (props) => {
    const defaultState = '';
    const label = 'party-selector';
    const partysizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    const [state, setState] = useState(defaultState);
    const{ onPartySelect } = props;
    
    return (   
        <PartySelectorWrapper>
            <label htmlFor={label}>
                {/* {label} */}
                <SelectWrapper 
                id={label}
                value={state}
                onChange={e => {setState(e.target.value);
                    onPartySelect(e.target.value)}}
                    onBlur={e => setState(e.target.value)}
                    disabled={!partysizes.length}
                    > 
                    {partysizes.map(item => 
                        <option key={item} value={item}>{item}</option>)}
                </SelectWrapper>
            </label>
    </PartySelectorWrapper>
    )
}

export default PartySelector;