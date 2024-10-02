import React from "react";
import { Typography, Box, Container,List,ListItem,ListItemIcon,ListItemText } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";

export const Address:React.FC = () => {
    return (
      <Container>
        <Typography variant="h5">連絡先</Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <GitHubIcon />
            </ListItemIcon>
          </ListItem>
            <ListItemText>
              Github:
              <Link href="https://github.com/Kitagawa19" target="_blank" rel="noopener noreferrer">マイアカウント</Link>
            </ListItemText>
        </List>
      </Container>
    )
}