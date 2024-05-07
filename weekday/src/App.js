import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import CompanyCard from "./Components/Card";
import { Box, Grid } from "@mui/material";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(2);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const body = {
      limit: 12,
      offset: offset,
    };
    const res = await axios.post(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      body
    );

    setData((prev = []) => [...prev, ...res.data["jdList"]]);
    setLoading(false);
  };

  const handleScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setOffset((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid container spacing-xs-3 className="grid_main">
          <Grid item xs={12} className="grid_item1">
            <Grid
              container
              spacing-xs-3
              className="grid_main"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              {data?.map(() => (
                <CompanyCard />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
