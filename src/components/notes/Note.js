import { Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { styled } from "@mui/material/styles";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import {
  ColorLensOutlined as Color,
  PhotoOutlined as Photo,
  PersonAddAltOutlined as Person,
  AddAlertOutlined as Add,
} from "@mui/icons-material";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 10px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const Note = ({ note }) => {
    const {notes, setNotes, setArchiveNotes,setDeleteNotes} = useContext(DataContext);
    const archiveNote = (note) =>{
       const updatedNotes = notes.filter(data => data.id !== note.id)
       setNotes(updatedNotes);
       setArchiveNotes(prevArr => [note, ...prevArr])
    }
    const deleteNote = (note) =>{
        const updatedNotes = notes.filter(data => data.id !== note.id)
       setNotes(updatedNotes);
       setDeleteNotes(prevArr => [note, ...prevArr])
    }
    const colorNote =() =>{
        return (
            
        )
    }
  return (
        <StyledCard>
        <CardContent>
            <Typography>{note.heading}</Typography>
            <Typography>{note.text}</Typography>
        </CardContent>
        <CardActions>
            <Archive 
            fontSize="small" 
            style={{ marginLeft: "auto" }}
            onClick ={() => archiveNote(note)}
            />
            <Delete 
            fontSize="small"
            onClick ={() => deleteNote(note)} 
            />
            <Color fontSize="small" onClick ={() => colorNote(note)} />
            <Photo fontSize="small" />
            <Person fontSize="small" />
            <Add fontSize="small" />
        </CardActions>
        </StyledCard>
  );
};

export default Note;
