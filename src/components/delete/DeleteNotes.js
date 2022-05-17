import React from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Form from "./Form";
import Note from "./Note";
import { useContext } from "react";

import { DataContext } from "../context/DataProvider";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useContext(DataContext);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box sx={{ width: "100%", p: 3 }}>
        <DrawerHeader />
        <Form />
        {
          notes.length > 0 ?
        
        <Grid container style={{marginTop : '16px'}}>
          {notes.map((note) => (
            <Grid item>
              <Note note={note} />
            </Grid>
          ))}
        </Grid>
        : <EmptyNotes/>
        }
      </Box>
    </Box>
  );
};

export default Notes;
