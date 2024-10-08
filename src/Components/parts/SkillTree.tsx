import React from 'react';
import { SkillGraph } from '@/Components/parts/skillGraph';
import { Container, Typography, Box } from '@mui/material';

const frontendSkills = [
  { name: 'HTML/CSS', level: 4 },
  { name: 'PHP', level: 2 },
  { name: 'Java', level: 2 },
  { name: 'Javascript', level: 3 },
  { name: 'TypeScript', level: 4 }
];

const backendSkills = [
  { name: 'Python', level: 4 },
  { name: 'Go', level: 3 },
  { name: 'C#', level: 2 }
];

export const SkillTreePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        スキルツリー
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{ gap: 4, mt: 4 }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', height: '400px', maxWidth: '500px', mx: 'auto' }}
        >
          <Typography variant="h6" align="center">
            Frontend Skills
          </Typography>
          <SkillGraph skills={frontendSkills} />
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '100%', height: '400px', maxWidth: '500px', mx: 'auto' }}
        >
          <Typography variant="h6" align="center">
            Backend Skills
          </Typography>
          <SkillGraph skills={backendSkills} />
        </Box>
      </Box>
    </Container>
  );
};
