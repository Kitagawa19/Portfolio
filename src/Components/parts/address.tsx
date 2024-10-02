import React from "react";
import { Typography, Box, Container,List,ListItem,ListItemIcon,ListItemText } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

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
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText>
                Email： ktc2243020001@edu.kyoto-tech.ac.jp
              </ListItemText>
            </ListItem>
        </List>
      </Container>
    )
}