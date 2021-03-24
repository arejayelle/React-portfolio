import React from 'react';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import { Typography } from '@material-ui/core';

export default function TimelineOpposite(props) {
    const { date } = props;

    return (
        <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
                {date}
            </Typography>
        </TimelineOppositeContent>
    );
}
