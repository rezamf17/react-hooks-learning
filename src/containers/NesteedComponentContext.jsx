import React from 'react';
import { Box, Typography } from '@mui/material'
import Section from '../components/NestedComponentSection'
import Header from '../components/NestedComponentHeader'

const NestedComponentContext = () => {
    return (
        <Box>
            <Typography variant='h5'>Nested-Component : (Non-Context)</Typography>
            <Section>
                <Header >Title</Header>
                <Section>
                    <Header >Header 2</Header>
                    <Header>Header 2</Header>
                    <Header>Header 2</Header>
                    <Section>
                        <Header>Header 3</Header>
                        <Header>Header 3</Header>
                        <Header>Header 3</Header>
                        <Section>
                            <Header>Header 4</Header>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </Box>
    )
}

export default NestedComponentContext