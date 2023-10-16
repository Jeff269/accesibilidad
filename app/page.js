import React from 'react';
import { Article } from '@/components/Article';
import { SubSection } from '@/components/SubSection';
import Image from 'next/image';
import Talker from '../components/Talker';
import PanelCommon from '../components/PanelCommon';
import PanelStacked from '@/components/PanelStacked';
import PanelImagen from '@/components/PanelImagen';
import PanelText from '@/components/PanelText';
//import PanelConsult from '../components/PanelConsult';



function renderCommonPanels(titulos, subtitulos, imagenes) {
  return titulos.map((titulo, index) => (
    <PanelCommon
      key={index}
      title={titulo}
      subtitle={subtitulos[index]}
      imageSrc={imagenes[index]}
    />
  ));
}

function renderStackedPanels(titulos, subtitulos, iconos, colores, imagenes) {
  return titulos.map((titulo, index) => (
    <PanelStacked
      key={index}
      title={titulo}
      subtitle={subtitulos[index]}
      isLeft={index % 2 === 0}
      iconSvg={iconos[index]}
      backgroundColor={colores[index]}
    />
  ));
}

function renderImagePanels(titulos, subtitulos, imagenes) {
  return titulos.map((titulo, index) => (
    <PanelImagen
      key={index}
      imageSrc={imagenes[index]}
      title={titulo}
      subtitle={subtitulos[index]}
    />
  ));
}

function renderTextPanels(titulos, subtitulos, imagenes) {
  return titulos.map((titulo, index) => (
    <PanelText
      key={index}
      title={titulo}
      subtitle={subtitulos[index]}
      imageSrc={imagenes[index]}
      imageSize="30%" // Ajusta el tamaño de la imagen como desees
    />
  ));
}

export default function Home() {
  const titulos = [
    'NOTICIA1',
    'NOTICIA2',
    'NOTICIA3',
    'NOTICIA4',
    'NOTICIA5',
  ];

  const subtitulos = [
    '22 Setiembre',
    '20 Setiembre',
    '18 Setiembre',
    '16 Setiembre',
    '12 Setiembre',
  ];

  const imagenes = [
    '/not1.jpg',
    '/not1.jpg',
    '/not3.jpg',
    '/not4.jpg',
    '/not1.jpg',
  ];

  const colores_d = [
    '#e69b1f',
    '#078739',
    '#cdd6dc',
    '#585858',
    '#047df4',
  ];

  const titulos_2 = [
    'GESDOC - Administrativos',
    'SERVICIO2',
    'SERVICIO3',
    'SERVICIO4',
    'SERVICIO5',
  ];

  const subtitulos_2 = [
    'Personal Administrativo - Registro de Expedientes',
    'CARACTERITICAS_SERVICIO2',
    'CARACTERITICAS_SERVICIO3',
    'CARACTERITICAS_SERVICIO4',
    'CARACTERITICAS_SERVICIO5',
  ];

  const titulos_3 = [
    'PUBLICACION_1',
    'PUBLICACION_2',
    'PUBLICACION_3',
    'PUBLICACION_4',
    'PUBLICACION_5',
  ];

  const subtitulos_3 = [
    'CARACTERITICAS_PUBL1',
    'CARACTERITICAS_PUBL2',
    'CARACTERITICAS_PUBL3',
    'CARACTERITICAS_PUBL4',
    'CARACTERITICAS_PUBL5',
  ];

  const imagenes_3 = [
    '/PORT_1.png',
    '/PORT_2.png',
    '/PORT_3.png',
    '/PORT_4.png',
    '/PORT_5.jpg',
  ];

  const iconos_d = [
    '/MagnifyingGlassCircle.svg',
    '/Squares2x2.svg',
    '/Home.svg',
    '/Cloud.svg',
    '/CurrencyDollar.svg',
  ];

  const titulos_4 = [
    'Historia 1',
    'Historia 2',
    'Historia 3',
    'Historia 4',
    'Historia 5',
    'Historia 6',
  ];

  const subtitulos_4 = [
    'Descripción historia 1',
    'Descripción historia 2',
    'Descripción historia 3',
    'Descripción historia 4',
    'Descripción historia 5',
    'Descripción historia 6',
  ];

  const imagenes_4 = [
    '/HIST_1.jpg',
    '/HIST_1.jpg',
    '/HIST_1.jpg',
    '/HIST_1.jpg',
    '/HIST_1.jpg',
    '/HIST_1.jpg',
  ];

  return (
    <>
      <Article
        title={'BIENVENIDOS'}
        resume={'Resumen asdjkasdkasdhashuipasdhuiasdhioasuhasduioasuiodhaiosuhdasuiodhasuiohasduio'}
      >
        <SubSection
          subtitle={'ANUNCIOS'}
          resume={'loremloremloremloremloremloremloremloremloremloremloremloremloremloremloremloremlorem'}
        >
        </SubSection>
      </Article>

      {/* "NOTICIAS UNCP" */}
      <SubSection subtitle={'NOTICIAS UNCP'}>
        <div className="flex justify-between flex-wrap">
          {renderCommonPanels(titulos, subtitulos, imagenes)}
        </div>
      </SubSection>

      {/* "Te ofrecemos nuestros servicios" */}
      <SubSection subtitle={'Te ofrecemos nuestros servicios'}>
        <div className="flex flex-wrap">
          {renderStackedPanels(titulos_2, subtitulos_2, iconos_d, colores_d)}
        </div>
      </SubSection>

      {/* "Publicaciones" */}
      <SubSection subtitle={'Publicaciones'}>
        <div className="flex justify-between flex-wrap">
          {renderImagePanels(titulos_3, subtitulos_3, imagenes_3)}
        </div>
      </SubSection>

      {/* Nueva subsection "Historias que inspiran" */}
      <SubSection subtitle={'Historias que inspiran'}>
        <div className="flex justify-between flex-wrap">
          {renderTextPanels(titulos_4, subtitulos_4, imagenes_4)}
        </div>
      </SubSection>



    </>
  );
}