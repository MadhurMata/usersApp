import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton as IconButtonMui, Tooltip } from '@mui/material';
interface IconButtonProps {
  children: React.ReactNode;
  srcUrl: string;
  label: string;
}

export const IconButton = ({ children, srcUrl, label }: IconButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(srcUrl);
  };

  return (
    <Tooltip title="Back">
      <IconButtonMui edge="start" color="inherit" aria-label={label} onClick={handleClick}>
        {children}
      </IconButtonMui>
    </Tooltip>
  );
};
