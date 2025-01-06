import React from 'react';

const InstagramLink = () => {
  const instagramUsername = 'rosewatterchicounseling';

  return (
    <a
      href={`https://www.instagram.com/${instagramUsername}/`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
        alt="Instagram"
        style={{
          width: 24,
          height: 24,
          marginRight: 8,
        }}
      />
    </a>
  );
};

export default InstagramLink;
