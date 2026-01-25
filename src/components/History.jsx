import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography, Paper } from '@mui/material';

export default function History() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            sx={{ p: 2 }}
          >
            <Typography variant="h6">3000 BCE</Typography>
            <Typography>
              Earliest evidence of saree-like drapes found in Indus Valley
              Civilization.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            sx={{ p: 2 }}
          >
            <Typography variant="h6">5th Century</Typography>
            <Typography>
              Sarees mentioned in ancient Sanskrit texts and temple sculptures.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="error" />
        </TimelineSeparator>
        <TimelineContent>
          <Paper
            elevation={3}
            sx={{ p: 2 }}
          >
            <Typography variant="h6">Modern Era</Typography>
            <Typography>
              Saree evolves into a fashion statement blending tradition and
              modern styles.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
