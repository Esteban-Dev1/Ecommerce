import React from 'react';

interface AnnouncementBarProps {
  message: string;
}

const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ message }) => {
  return (
    <div className="bg-black text-white font-bold py-2 overflow-hidden text-xl">
      <div className="whitespace-nowrap">
        <p className="inline-block animate-scroll">
          {message}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
