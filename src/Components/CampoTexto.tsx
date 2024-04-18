import React from 'react';


interface CampoTextoProps {
    placeholderText: string;
  }

const CampoTexto: React.FC<CampoTextoProps> = ( {placeholderText} ) => {
  return (
      <input type="text" placeholder={placeholderText} className="px-2 py-1 rounded-md border border-rgba(202, 195, 195, 1) shadow-bottom" />
  );
};

export default CampoTexto;