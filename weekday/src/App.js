import "./App.css";
import CompanyCard from "./Components/Card";
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

function App() {
  return (
    <>
      <div>
        <h3 className="name">Company Name</h3>
        <h2 className="App">Frontend Engineer</h2>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa
          consequatur porro id cupiditate exercitationem praesentium ut, ad,
          nesciunt voluptas asperiores. Modi inventore consequuntur eum!
          Accusantium temporibus laudantium ducimus asperiores!
        </div>
      </div>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid container spacing-xs-3 className="grid_main">
          <Grid item xs={12} className="grid_item1">
            <Grid
              container
              spacing-xs-3
              className="grid_main"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <CompanyCard />
              <CompanyCard />
              <CompanyCard />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
