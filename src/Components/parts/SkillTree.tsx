import React from 'react';
import { SkillGraph } from '@/Components/parts/skillGraph';
import { Container, Typography, Box } from '@mui/material';

const frontendSkills = [
    { name: 'HTML/CSS', level: 4 },
    { name: 'PHP', level: 2 },
    { name: 'Java', level: 2 },
    { name: 'Javascript', level: 3 },
    { name: 'TypeScript', level: 4 }
]

const backendSkills = [
    {name: 'Python', level: 4 },
    {name: 'Go', level: 3 },
    {name: 'C#', level: 2 },
]

export const SkillTreePage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h5">Frontend Skills</Typography>
            <Box>
                <SkillGraph skills={frontendSkills} />
            </Box>
            <Typography variant="h5">Backend Skills</Typography>
            <Box>
                <SkillGraph skills={backendSkills} />
            </Box>
        </Container>
    )
}