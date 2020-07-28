import React, { useState } from 'react';
import { format, addMonths, subMonths, addDays, startOfWeek, startOfMonth, endOfMonth, endOfWeek,
     isSameMonth, isSameDay, toDate} from 'date-fns';
import styled from 'styled-components';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';

const StyledChevronLeft = styled(ChevronLeft)`
    color: black;
    height: 16px;
    display: flex;
    flex-direction: end;
    &:hover {
        border: solid 1px red;
    }
    border-radius: 50%;
    /* flex-grow: 1; */
`;

const StyledChevronRight = styled(ChevronRight)`
    color: black;
    height: 16px;
    display: flex;
    flex-direction: left;
    &:hover {
        border: solid 1px red;
    }
    border-radius: 50%;
    /* flex-grow: 1; */

`;

const CalendarWrapper = styled.div`
    /* padding-top: 16px;
    padding-bottom: 16px;
    margin-left: 1px;
    margin-right: 1px; */
    /* /* box-sizing: border-box;
    display: block;
    width: 100%;
    background-color: #d8d9db;
    border: 1px solid lightgray;
    height: 100px; */ 
    /* margin:0 auto; */
    
`;

const Header = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 75%;
`;

const Column = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* justify-content: left; */
    flex-direction: row;
    /* width: 100%; */
    /* font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5; */
    background-color: #d8d9db;


`;


const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Days = styled.span`
    text-transform: uppercase;
    font-weight: 700;
    color: gray;
    font-size: 70%;
    /* display: flex; */
    /* display: flex;
    flex-direction: column; */
    /* padding: .75em 0; */
    /* border: 1px solid lightgray; */
`;

const DaysWrapper = styled.div`
    display: flex:
    flex-direction: row;

`;
const Cell = styled.span`
    position: relative;
    border: 1px solid lightgray;
    overflow: hidden;
    cursor: pointer;
    transition: 0.25s ease-out;
    &:hover {
        border: solid 1px red;
    }
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    justify-content: center;
    text-align: center;

`;

const Calendar = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())
    const { selectOption } = props;
    
    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    }
    
    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    }
    const onClickEvent = day => {
        const dateFormat = 'MMM d';
        let dayFormatted = format(day, dateFormat)
        setSelectedDate(day);
        selectOption(dayFormatted);
    }

    const header = () => {
        const dateFormat = 'MMMM yyyy';
        return (
            <Header>
                    <StyledChevronLeft onClick={(e) => {e.stopPropagation(); prevMonth()}}/>
                    {format(currentDate, dateFormat)}
                    <StyledChevronRight onClick={(e) => {e.stopPropagation(); nextMonth()}}/>
            </Header> 
        )
    }

    const daysOfWeek = () => {
        const dateFormat = 'eee ';
        const days = [];
        let startDate = startOfWeek(currentDate);

        for (let i = 0; i < 7; i++) {
            days.push(
                <Days key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </Days>
            )
        }
        return <Column>{days}</Column>
    }

    const cells = () => {
        
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        const dateFormat = 'd';
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = '';

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;

                days.push(
                    <Cell
                        // className={`column cell ${!isSameMonth(day, monthStart)
                        // ? "disabled" : isSameDay(day, selectedDate) 
                        // ? "selected" : "" }`} 
                        key={day} 
                        onClick={() => onClickEvent(toDate(cloneDay))}
                    > 
                        {formattedDate}
                    </Cell>  
                );
                
                day = addDays(day, 1);
            }
            rows.push(
                <Row key={day}> {days} </Row>
            );
            days = [];
        };

       return <div>{rows}</div>;
    }
    
    return (
        <CalendarWrapper>
            {/* <Body> */}
                
                {header()}
            
                {/* <DaysWrapper> */}
                {daysOfWeek()}
                {/* </DaysWrapper> */}
                {/* <Cell> */}
                {cells()}
                {/* </Cell> */}
            {/* </Body> */}
        </CalendarWrapper>
    )  
    
}

export default Calendar;

