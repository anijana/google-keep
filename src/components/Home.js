import { Box } from "@mui/material";
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Notes from "./notes/Notes";
import SwipeDrawer from "./SwipeDrawer";
import DeleteNotes from "./delete/DeleteNotes";
import Archives from "./archive/Archives";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      <Router>
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />}/>
          <Route path="/archive" element={<Archives />}/>
          <Route path="/delete" element={<DeleteNotes />}/>
        </Routes>
      </Router>
    </Box>
  );
};

export default Home;
