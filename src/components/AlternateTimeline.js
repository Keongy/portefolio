import React, { useContext } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { ThemeContext } from '../context/ThemeContext';
import TimelineCard from './TimelineCard';
import { v4 as uuidv4 } from 'uuid';

const AlternateTimeline = ({ timeline }) => {
    const { theme } = useContext(ThemeContext)

    const themeColor = theme ? 'dark' : 'light'


    return (
        <Timeline position="alternate">
            {timeline.map((item, index) => {
                const uuid = uuidv4()
                return (
                    <TimelineItem key={uuid}>
                        <TimelineSeparator>
                            <div className={`timeline-year theme-title-${themeColor} p-1 my-3`} >{item.year}</div>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard
                                item={item}
                                index={index}
                                uuid={uuid}
                                themeColor={themeColor}
                            />
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline >
    );
}

export default AlternateTimeline;
