import React, { useContext, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import language from '../Lang/lang';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import TimelineCard from './TimelineCard';

export default function AlternateTimeline() {
    const { lang } = useContext(LangContext)
    const { theme } = useContext(ThemeContext)

    const timeline = lang ? language.FR.experience.timeline : language.EN.experience.timeline
    const themeColor = theme ? 'dark' : 'light'


    return (
        <Timeline position="alternate">
            {timeline.map((item, index) => {
                return (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <div className={`timeline-year theme-title-${themeColor} p-1 my-3`} >{item.year}</div>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <TimelineCard
                                item={item}
                                index={index}
                                themeColor={themeColor}
                            />
                        </TimelineContent>
                    </TimelineItem>
                )
            })}

        </Timeline >
    );
}
