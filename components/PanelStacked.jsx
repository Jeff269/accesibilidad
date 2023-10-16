import React from 'react';
import PropTypes from 'prop-types';

const PanelStacked = ({
  title,
  subtitle,
  imageSrc,
  isLeft,
  backgroundColor,
  iconSvg,
}) => {
  const marginClass = isLeft ? 'ml-36' : 'mr-36'; // margen izquierdo

  const panelClasses = `w-full md:w-1/6 lg:w-1/2 h-40 flex flex-col items-center mb-10 ${marginClass} mx-auto`;
  const panelStyles = {
    backgroundColor: backgroundColor || 'transparent', // Definir el color de fondo del panel
  };

  const buttonStyle = {
    width: '200px',
    height: '200px',
    position: 'relative',
  };

  const iconStyle = {
    position: 'absolute',
    top: '10px',
    left: '60px',
    width: '60px', // Ajusta el tamaño del icono según tus necesidades
    height: '60px',
  };

  return (
    <div className={panelClasses} style={panelStyles}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
        />
      )}
      <h2 className="text-xl">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      <button style={buttonStyle}>
        {iconSvg && <img src={iconSvg} alt="Icon" style={iconStyle} />}
      </button>
    </div>
  );
};

PanelStacked.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageSrc: PropTypes.string,
  isLeft: PropTypes.bool, // si es un panel izquierdo
  backgroundColor: PropTypes.string, // color de fondo del panel
  iconSvg: PropTypes.string, // ruta al archivo SVG del icono
};

export default PanelStacked;