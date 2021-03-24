import React from 'react';
import MuiTimeline from '@material-ui/lab/Timeline';
import TimelineItem from "./TimelineItem"
import ProjectCard from '../projectCards/ProjectCard';
import ArtCard from '../projectCards/ArtCard';

export default function Timeline() {
    return (
        <MuiTimeline >
            <TimelineItem
                date="July 2020 - May 2021"
            >
                <ArtCard title="Switchboard">AAA</ArtCard>
            </TimelineItem>
            <TimelineItem
                date="Winter 2021"
            >
                <ProjectCard title="Hello">There are some bees!</ProjectCard>
            </TimelineItem>
            <TimelineItem
                date="Winter 2022"
                isLast
            >
                <ProjectCard title="Hello">AAA</ProjectCard>
            </TimelineItem>
        </MuiTimeline>
    );
}