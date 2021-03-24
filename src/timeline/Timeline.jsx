import React from 'react';
import MuiTimeline from '@material-ui/lab/Timeline';
import TimelineItem from "./TimelineItem"
import ProjectCard from '../projectCards/ProjectCard';
import ArtCard from '../projectCards/ArtCard';

export default function Timeline() {
    return (
        <MuiTimeline >
            <TimelineItem
                date="Winter 2022"
                isLast
            >
                <ProjectCard title="Hello">AAA</ProjectCard>
            </TimelineItem>
        </MuiTimeline>
    );
}