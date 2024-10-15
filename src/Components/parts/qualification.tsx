import {  Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

export const QualificationsTable = () => {
  const qualifications = [
    { name: 'AI-900', date: '2025年10月' },
    { name: 'MOS', date: '2023年8月' },
    { name: 'ITパスポート', date: '2024年5月' },
    { name: '基本情報技術者試験', date: '2024年5月' },
  ];

  return (
    <Box sx={{ padding: '20px 0', borderRadius: '8px', maxWidth: 600, margin: 'auto' }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}
      >
        取得資格
      </Typography>

      <List>
        {qualifications.map((qualification, index) => (
          <Box key={index}>
            <ListItem sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ListItemText primary={qualification.name} />
              <ListItemText primary={qualification.date} sx={{ textAlign: 'right' }} />
            </ListItem>
            {index < qualifications.length - 1 && <Divider />}
          </Box>
        ))}
      </List>
    </Box>
  );
};
