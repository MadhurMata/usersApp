import { Avatar as AvatarMui } from '@mui/material';

interface AvatarProps {
  imageUrl: string;
  alt: string;
  width: number;
  height: number;
}

const Avatar = ({ imageUrl, alt, width, height }: AvatarProps) => {
  return <AvatarMui src={imageUrl} alt={alt} sx={{ width, height }} />;
};

export default Avatar;
