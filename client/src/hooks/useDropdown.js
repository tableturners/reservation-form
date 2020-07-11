import React, { useState, useEffect, useCallback } from 'react';

const useDropdown = (label, defaultState, options) => {
 const [state, setState] = useState(defaultState);
 const DropdownMaker = () => {
     <label value={label}>
       {label}
        <select
           id={label}
           value={state}
           onChange={e => setState(e.target.value)}
        >
        <option>{value}</option>
        {options.map(item => 
          <option keu={item} value={item}>{item}</option>)}
         </select>
        
     </label>
 };
 return [state, DropdownMaker, setState]
}
export default useDropdown;