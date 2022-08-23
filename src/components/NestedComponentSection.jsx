import React from 'react';
import {Box} from '@mui/material'
import {LevelContext }from '../context/LevelContext'

const NestedComponentSection = (props) => {
    return(
        <Box
            sx={{
                border : "1px solid grey",
                borderRadius : "10px"
            }}>
                <LevelContext.Provider value={props.level}>
                    {props.children}
                </LevelContext.Provider>
        </Box>
    )
}

export default NestedComponentSection
