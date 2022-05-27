import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteNote from "./DeleteNote";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";


const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { deletedNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ width: "100%", p: 3 }}>
        <DrawerHeader />
        
        <Grid container style={{marginTop : '16px'}}>
          {
          deletedNotes.map((note) => (
            <Grid item>
              <DeleteNote note={note} />
            </Grid>
          ))
          }
        </Grid>
        
      </Box>
    </Box>
  );
};

export default DeleteNotes;
