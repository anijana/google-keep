import { Box } from '@mui/material'
import React from 'react'
import Notes from './notes/Notes'
import SwipeDrawer from './SwipeDrawer'

const Home = () => {
  return (
      <Box style={{display:'flex', width:'100%'}}>
    <SwipeDrawer/>
    <Notes/>
    </Box>
  )
}

export default Home