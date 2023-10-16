import React from 'react';
import PropTypes from 'prop-types';

const PanelCommon = ({ title, subtitle, imageSrc }) => {
  return (
    <div className="bg-green-300 w-40 h-60 flex flex-col items-center mb-30">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="max-w-full h-auto mb-5"
        />
      )}
      <h2 className="text-xl">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      <button>{"Ver más"}</button>
    </div>
  );
};

PanelCommon.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default PanelCommon;