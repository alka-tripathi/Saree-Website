import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        mt: 6,
        py: 4,
        color: '#8b1e3f',
        fontWeight: 500,
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          {/* Brand / About */}
          <Grid
            item
            xs={12}
            md={4}
          >
            <Typography
              variant="h6"
              gutterBottom
            >
              <b>Satika Sarees</b>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Discover timeless elegance with handcrafted sarees from across
              India. Tradition woven with modern style.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid
            item
            xs={12}
            md={4}
          >
            <Typography
              variant="h6"
              gutterBottom
            >
              Quick Links
            </Typography>
            <Box>
              <Link
                href="/"
                underline="hover"
                color="inherit"
                display="block"
              >
                <Typography color="text.secondary">Home</Typography>
              </Link>
              <Link
                href="/collection"
                underline="hover"
                color="inherit"
                display="block"
              >
                <Typography color="text.secondary">Collections</Typography>
              </Link>
              <Link
                href="/about"
                underline="hover"
                color="inherit"
                display="block"
              >
                <Typography color="text.secondary">About Us</Typography>
              </Link>
              <Link
                href="/contact"
                underline="hover"
                color="inherit"
                display="block"
              >
                <Typography color="text.secondary">Contact</Typography>
              </Link>
            </Box>
          </Grid>

          {/* Social */}
          <Grid
            item
            xs={12}
            md={4}
          >
            <Typography
              variant="h6"
              gutterBottom
            >
              Follow Us
            </Typography>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: '#8b1e3f', borderWidth: 1.3 }} />

        {/* Copyright */}
        <Typography
          variant="body2"
          style={{ color: '#8b1e3f' }}
          align="center"
        >
          © {new Date().getFullYear()} Satika Sarees. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
