import * as React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Typography, Paper, Box } from '@mui/material';

export default function History() {
  return (
    <Box sx={{ px: 2, py: 4, maxWidth: 1000, mx: 'auto' }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 3, fontWeight: 600, color: '#8b1e3f' }}
      >
        The History of the Indian Saree and Its Evolution in Fashion
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 5, textAlign: 'center', color: 'text.secondary' }}
      >
        The saree is more than just an outfit — it's a symbol of India's rich
        cultural heritage, craftsmanship, and evolution through centuries.
      </Typography>

      <Timeline position="alternate">
        {/* Indus Valley */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
              }}
            >
              <Box
                component="img"
                src="https://tse3.mm.bing.net/th/id/OIP.PAXGt63xJfVI0fHu_jRDawHaNi?w=591&h=1080&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Indus Valley Civilization"
                sx={{
                  width: 180,
                  height: 240,
                  objectFit: 'cover',
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography variant="h6">
                  2800–1800 BCE (Indus Valley Civilization)
                </Typography>
                <Typography color="text.secondary">
                  <ul>
                    <li>Earliest evidence of saree-like drapes</li>
                    <li>Figurines show draped garments</li>
                    <li>Cotton cultivation and weaving evidence</li>
                  </ul>
                </Typography>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Vedic Age */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
              }}
            >
              <Box
                component="img"
                src="https://i.pinimg.com/originals/5c/b5/2d/5cb52deb4fa60e5128f0a6d1778e4b09.jpg"
                alt="Vedic Age Clothing"
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography variant="h6">1500–500 BCE (Vedic Age)</Typography>
                <Typography color="text.secondary">
                  References in the Rig Veda to garments like Nivi and Uttariya.
                </Typography>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Maurya & Gupta */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
              }}
            >
              <Box
                component="img"
                src="https://i.pinimg.com/736x/6f/56/ff/6f56fff2eef6c75d6c01e164d55ac534.jpg"
                alt="Gupta Period Saree"
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography variant="h6">
                  Maurya & Gupta Periods (322 BCE–550 CE)
                </Typography>
                <Typography color="text.secondary">
                  Saree became staple attire, often worn without stitched
                  blouses.
                </Typography>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Medieval */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
              }}
            >
              <Box
                component="img"
                src="https://i.pinimg.com/736x/85/2c/10/852c10b234275da1b0b6ddfe81d6ba45.jpg"
                alt="Medieval Sarees"
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography variant="h6">
                  Medieval Era (6th–13th Century)
                </Typography>
                <Typography color="text.secondary">
                  Regional weaving traditions flourished like Banarasi and
                  Kanjeevaram.
                </Typography>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Mughal */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
              }}
            >
              <Box
                component="img"
                src="https://i.pinimg.com/736x/7c/9c/23/7c9c23bf51f21cdb07e904790e94c162.jpg"
                alt="Mughal Sarees"
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography variant="h6">Mughal Period (1526–1857)</Typography>
                <Typography color="text.secondary">
                  Luxurious silks, brocades, and zari elevated sarees into royal
                  fashion.
                </Typography>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* Modern */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" />
          </TimelineSeparator>
          <TimelineContent>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                display: 'flex',
                gap: 2,
                alignItems: 'flex-start',
              }}
            >
              <Box
                component="img"
                src="https://i.pinimg.com/1200x/fb/e0/74/fbe074adc201ca8752771ac5ad0f4922.jpg"
                alt="Modern Saree Fashion"
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: 'cover',
                  borderRadius: 1,
                  flexShrink: 0,
                }}
              />

              <Box>
                <Typography variant="h6">21st Century</Typography>
                <Typography color="text.secondary">
                  Modern, fusion, and designer sarees redefine tradition.
                </Typography>
              </Box>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}
