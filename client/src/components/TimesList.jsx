import React from 'react';
import styled from 'styled-components'

const TimeSelectorWrapper = styled.div`
    padding: 1em;
    margin: 1em;
    border: 1px solid grey;
    background-color: #f1f2f4;
    flex-basis: 25%;

`;
const TimesList = (props) => {
    return (
        <TimeSelectorWrapper>
            <div>At the moment, there’s no online availability within 2.5 hours of {props.timeSelected}. Have another time in mind?
            </div>

        </TimeSelectorWrapper>
    )
}
export default TimesList; 