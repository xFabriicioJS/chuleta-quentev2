import React from 'react';
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
export default function AlertError({ message }) {
  return (
    <Box>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription color={'blackAlpha.700'}>{message}</AlertDescription>
      </Alert>
    </Box>
  );
}