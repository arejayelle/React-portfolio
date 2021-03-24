import React from 'react';
import MuiTimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDotSeparator from "./TimelineDotSeparator"
import TimelineOpposite from "./TimelineOpposite";

export default function TimelineItem(props) {
    const { date, children, isLast } = props;

  return (
      <MuiTimelineItem>
        <TimelineOpposite date={date}/>
        <TimelineDotSeparator isLast={isLast}/>
        <TimelineContent>{children}</TimelineContent>
      </MuiTimelineItem>
  );
}