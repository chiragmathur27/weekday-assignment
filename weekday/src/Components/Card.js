import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CardActionArea,
  Chip,
  Grid,
  Paper,
} from "@mui/material";
import "../App.css";

export default function CompanyCard() {
  return (
    <Grid item xs={12} md={6} lg={4} className="card-body grid-content">
      <Paper elevation={1} className="card-main-body">
        <Box className="chip">
          <Box className="chip-body">
            <Box className="chip-content">
              <Typography
                variant="body1"
                className="chip-text"
                sx={{
                  fontFamily: "Lexend",
                  fontWeight: "400",
                  lineHeight: "1.5",
                  fontSize: "9px",
                }}
              >
                ⏳ Posted 4 days ago
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className="job-content"
          sx={{ flex: "1 1 0%", padding: "8px 16px" }}
        >
          <Box className="comp-role">
            <img
              src="https://logo.clearbit.com/dropbox.com"
              style={{ width: "25px", height: "2.5rem" }}
              alt=""
            />
            <div>
              <div className="comp-info">
                <Typography variant="h3" className="MuiBox-root">
                  Company Name
                </Typography>
                <Typography variant="h2">Senior Engineer</Typography>
              </div>
              <p className="card-sub-text MuiBox-root">
                India | Exp: 5-5 years
              </p>
            </div>
          </Box>
          <Typography variant="body2" className="card-salary">
            Estimated Salary: ₹30 - 60 LPA
            <span> ✅</span>
            <br />
          </Typography>
          <Box className="comp-about">
            <Box>
              <Typography variant="p" className="comp-about-head">
                About Company
              </Typography>
              <Box
                sx={{
                  whiteSpace: "pre-wrap",
                  fontSize: "14px",
                  marginTop: "-10px",
                }}
              >
                <p>
                  <strong>About us</strong>
                </p>
                <p style={{ fontFamily: "Lexend", fontWeight: "400" }}>
                  This is a sample job and you must have displayed it to
                  understand that its not just some random lorem ipsum text but
                  something which was manually written. Oh well, if random text
                  is what you were looking for then here it is: Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages and now in this assignment.
                </p>
              </Box>
            </Box>
          </Box>
          <Box className="view-job">
            <a
              href=""
              className="MuiTypography-root MuiTypography-body1 job-link"
            >
              View job
            </a>
          </Box>
          <div className="exp">
            <h3 style={{ marginTop: "10px" }}>Minimum Experience</h3>
            <h2>1 years</h2>
          </div>
          <Box className="status-container">
            <Box className="apply">
              <Button
                className="apply-button"
                size="medium"
                color="primary"
                style={{
                  backgroundColor: "rgb(85, 239, 196)",
                  width: "100%",
                  fontWeight: "400",
                  color: "#000",
                  padding: "8px 18px",
                }}
              >
                ⚡Easy Apply
              </Button>
            </Box>
            <Button
              size="medium"
              color="primary"
              className="apply-button"
              style={{
                backgroundColor: "rgb(73, 67, 218)",
                width: "100%",
                fontWeight: "400",
                color: "#fff",
                padding: "8px 18px",
              }}
            >
              <Box className="referral">
                <AvatarGroup className="ref-avatar-grp">
                  <Avatar
                    className="ref-avatar"
                    variant="circular"
                    src={""}
                    sx={{ width: "24px", height: "24px" }}
                  />
                </AvatarGroup>
                <Typography variant="body1" className="ref-text">
                  Ask for referral
                </Typography>
              </Box>
            </Button>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}
