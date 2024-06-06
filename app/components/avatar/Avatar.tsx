// Avatar.jsx
import Image from 'next/image';
import React, { FC, useState } from 'react';

type AvatarProps = {
  src: string;
  name: string;
  alt: string;
  size?: string;

}
const Avatar: FC<AvatarProps> = ({ src, name, alt, size = 'w-24 h-24' }) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const getInitials = (name: string) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  const hasImageSrc = src === 'N/A' ? 'https://via.placeholder.com/150' : src;

  return (
    <div className={`flex items-center justify-center bg-gray-200 text-gray-700 rounded-full ${size}`}>
      {imageError || !src ? (
        <span className="text-3xl font-bold">{getInitials(name)}</span>
      ) : (
        <Image
          className={`object-cover rounded-full ${size}`}
          src={hasImageSrc}
          alt={alt || name}
          width={32}
          height={32}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default Avatar;
