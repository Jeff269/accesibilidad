import React from 'react';
import PropTypes from 'prop-types';

const PanelText = ({ title, subtitle, imageSrc, imageSize }) => {
  const panelStyle = {
    backgroundColor: '#blue-300', 
    width: '15%', 
    height: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '30px',
    border: '1px solid #000', 
    borderRadius: '8px', //bordes redondeados
  };

  const imageStyle = {
    maxWidth: '100%', 
    maxHeight: imageSize || '50%', 
    marginTop: '10px', // Mueve img arriba.
  };

  return (
    <div style={panelStyle}>
      <h2 className="text-xl">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          style={imageStyle}
        />
      )}
      <button>ver más</button>
    </div>
  );
};

PanelText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSize: PropTypes.string, 
};

export default PanelText;