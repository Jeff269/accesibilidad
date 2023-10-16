import React from 'react';
import PropTypes from 'prop-types';

const PanelImagen = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="relative w-40 h-60 mb-6">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 flex flex-col justify-between p-4 bg-black bg-opacity-50 text-white">
        <div>
          <h2 className="text-xl">{title}</h2>
          {subtitle && <p className="text-sm text-gray-300">{subtitle}</p>}
        </div>
        <button className="bg-green-500 text-white py-2 px-4 rounded-full">
          ver más
        </button>
      </div>
    </div>
  );
};

PanelImagen.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default PanelImagen;