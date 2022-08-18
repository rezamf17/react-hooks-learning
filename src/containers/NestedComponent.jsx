import React from 'react';
import {Box, Typography} from '@mui/material'
import Section from '../components/NestedComponentSection'
import Header from '../components/NestedComponentHeader'

const NestedComponent = () => {
    return(
        <Box>
            <Typography variant='h5'>Nested-Component : (Non-Context)</Typography>
            <Section>
                <Header level={1}>Title</Header>
                <Section>
                    <Header level={2}>Header 2</Header>
                    <Header level={2}>Header 2</Header>
                    <Header level={2}>Header 2</Header>
                    <Section>
                        <Header level={3}>Header 3</Header>
                        <Header level={3}>Header 3</Header>
                        <Header level={3}>Header 3</Header>
                    </Section>
                </Section>
            </Section>
        </Box>
    )
}

export default NestedComponent