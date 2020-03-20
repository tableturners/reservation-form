import React, { useState } from 'react';

import './styles.css';

const useDropDown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const DropdownMaker = () => (
        <div className="selectdiv"> 
        <label htmlFor={label}>
            {/* {label} */}
            <select 
            id={label}
            value={state}
            onChange={e => setState(e.target.value)}
            onBlur={e => setState(e.target.value)}
            disabled={!options.length}
            > 
                {options.map(item => 
                    <option key={item} value={item}>{item}</option>)}
            </select>
        </label>
        </div>
    );
    return [state, DropdownMaker, setState]
}

export default useDropDown;