'use client';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Button, Drawer, List, ListItem, ListItemText, ListItemButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#333',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{ width: 250, backgroundColor: '#333', height: '100%', color: '#fff' }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={Link} href="/" passHref sx={{ color: '#fff' }}>
                    <ListItemText primary="ポートフォリオサイト" />
                  </ListItemButton>
                </ListItem>
                <Divider sx={{ backgroundColor: '#555' }} />
                <ListItem disablePadding>
                  <ListItemButton component={Link} href="/bloglist" passHref sx={{ color: '#fff' }}>
                    <ListItemText primary="Blog" />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
            }}
          >
            <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>ポートフォリオサイト</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color="inherit" component={Link} href="/bloglist">
              Blog
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};