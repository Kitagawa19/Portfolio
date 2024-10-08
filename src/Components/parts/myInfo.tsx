import React from "react";
import { Typography, Box, Container,Avatar } from "@mui/material";

export const MyProfile:React.FC = () => {
  return (
    <Container maxWidth="md" style={{ padding: '60px 0' }}>
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    gap={3} 
    mb={6}
  >
    <Typography 
      variant="h2" 
      component="h1" 
      gutterBottom 
      style={{ fontWeight: 'bold', letterSpacing: '1px', color: '#333' }}
    >
      My Profile
    </Typography>
    <Avatar
      alt="Your Name"
      src="src/app/favicon.ico" 
      sx={{ width: 160, height: 160, boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
    />
    <Typography 
      variant="h4" 
      component="h1" 
      style={{ marginTop: '16px', fontWeight: '500', color: '#2c3e50' }}
    >
      Your Name
    </Typography>

    <Typography 
      variant="h6" 
      color="textSecondary" 
      style={{ marginBottom: '8px', fontStyle: 'italic', color: '#7f8c8d' }}
    >
      フルスタックエンジニア / AI開発者
    </Typography>
  </Box>
  <Box textAlign="center" mt={4}>
    <Typography 
      variant="h5" 
      component="h2" 
      gutterBottom 
      style={{ fontWeight: 'bold', color: '#2c3e50' }}
    >
      現在の目標
    </Typography>
    <Typography 
      variant="body1" 
      color="textSecondary" 
      paragraph 
      style={{ lineHeight: '1.8', color: '#7f8c8d' }}
    >
      現在、生成AIとクラウド技術を活用した新しいアプリケーションの開発に取り組んでいます。
      また、競技プログラミングのスキルを向上させることを目指し、アルゴリズムの学習を続けています。
    </Typography>
  </Box>
</Container>
  )
}