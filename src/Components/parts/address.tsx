import React from "react";
import { Typography, Box, Container } from "@mui/material";

export const Address:React.FC = () => {
    return (
      <Container>
        <Typography variant="h5">連絡先</Typography>
        <Box>
          <Typography>GiTHub:</Typography>
          <Typography>メールアドレス:</Typography>
          <Typography>電話番号: 0123-456-7890 </Typography>
        </Box>
      </Container>
    )
}