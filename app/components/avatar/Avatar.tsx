// Avatar.jsx
import Image from 'next/image';
import React, { FC, useState } from 'react';

type AvatarProps = {
  src?: string;
  name: string;
  alt?: string;
};

const Avatar: FC<AvatarProps> = ({ src, name, alt = '' }) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
  };

  const getInitials = (name: string) => {
    const initials = name.split(' ').map(n => n[0]).join('');
    return initials.toUpperCase();
  };

  const width = 32;
  const height = 32;

  const isValidSrc = src && (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('/'));

  return (
    <div className={`flex items-center justify-center bg-gray-200 text-gray-700 rounded-full`} style={{ width, height }}>
      {imageError || !isValidSrc ? (
        <span className="font-bold">{getInitials(name)}</span>
      ) : (
        <Image
          className="object-cover rounded-full"
          src={src}
          alt={alt || name}
          width={width}
          height={height}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default Avatar;
