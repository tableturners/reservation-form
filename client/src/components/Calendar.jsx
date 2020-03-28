
import React, { useState } from 'react';
import { format, addMonths, subMonths, addDays, startOfWeek, startOfMonth, endOfMonth, endOfWeek,
     isSameMonth, isSameDay, toDate} from 'date-fns';
import styled from 'styled-components';
import { ChevronLeft } from '@styled-icons/boxicons-solid/ChevronLeft';
import { ChevronRight } from '@styled-icons/boxicons-solid/ChevronRight';

const StyledChevronLeft = styled(ChevronLeft)`
  color: black;
  
`;
import './Calendar.css';

    

const CalendarWrapper = styled.div`
    display: block;
    width: 90%;
    background: white;
    border: 1px solid lightgray;
    height: 100px;
    margin:0 auto;
`;

const Header = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    display: block;
    width: 100%;
    padding: 1.75em 0;
    border-bottom: 1px solid lightgray;
    background: white;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 115%;
    padding: 1.5em 0;
    border-bottom: 1px solid lightgray;
`;
const Body = styled.div`
    font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5;
    position: relative;
`;
const Row = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Number = styled.span`
    position: absolute;
    font-size: 82.5%;
    line-height: 1;
    top: .75em;
    right: .75em;
    font-weight: 700;
`;

const Cell = styled.div`
    position: relative;
    height: 6em;
    border-right: 1px solid lightgray;
    overflow: hidden;
    cursor: pointer;
    background: white;
    transition: 0.25s ease-out;
`;

const Column = styled.div`
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
    flex-direction: row;
`;
const Calendar = (props) => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())
    const { onDateClick } = props;
    
    const nextMonth = () => {
        setCurrentDate(addMonths(currentDate, 1));
    }
    
    const prevMonth = () => {
        setCurrentDate(subMonths(currentDate, 1));
    }
    const onClickEvent = day => {
        let dayString = JSON.stringify(day)
        console.log('clicked on date', dayString.slice(0, 11), typeof dayString )
        setSelectedDate(day);
        onDateClick(dayString)
    }

    const header = () => {
        const dateFormat = 'MMMM yyyy';
        return (
            <Header>
                <Column>
                    <div>
                        <div onClick={prevMonth}>
                            <StyledChevronLeft/>
                        </div>
                    </div>
                    <div>
                        <span>{format(currentDate, dateFormat)}</span>
                    </div>
                    <div>
                        <div onClick={nextMonth}>
                            <ChevronRight/>
                        </div>
                    </div>
                </Column>
            </Header> 
        )
    }
    const daysOfWeek = () => {
        const dateFormat = 'eee ';
        const days = [];
        let startDate = startOfWeek(currentDate);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            )
        }
        return <div>{days}</div>
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
                        className={`column cell ${!isSameMonth(day, monthStart)
                        ? "disabled" : isSameDay(day, selectedDate) 
                        ? "selected" : "" }`} 
                        key={day} 
                        onClick={() => onClickEvent(toDate(cloneDay))}
                    > 
                        <span>{formattedDate}</span>
                    </Cell>  
                );
                
                day = addDays(day, 1);
            }
            rows.push(
                <Row key={day}> {days} </Row>
            );
            days = [];
        };

       return <Body>{rows}</Body>;
    }
    
    return (
        <CalendarWrapper>
            <div>{header()}</div>
            <div>{daysOfWeek()}</div>
            <div>{cells()}</div>
        </CalendarWrapper>
    )  
    
}

export default Calendar;

