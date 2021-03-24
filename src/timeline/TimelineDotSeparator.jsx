import React from 'react';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Face } from '@material-ui/icons';

export default function TimelineDotSeparator({isLast}) {
  return (
        <TimelineSeparator>
          <TimelineDot>
              <Face/>
          </TimelineDot>
          {isLast?<></>:<TimelineConnector />}
        </TimelineSeparator>
  );
}