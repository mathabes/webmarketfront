import React from 'react';


interface CampoTextoProps {
    placeholderText: string;
  }

const CampoTexto: React.FC<CampoTextoProps> = ( {placeholderText} ) => {
  return (
      <input type="text" id={placeholderText} name={placeholderText}
        placeholder={placeholderText.charAt(0).toUpperCase() + placeholderText.substring(1)} 
        className="px-2 py-1 rounded-md border border-rgba(202, 195, 195, 1) shadow-bottom" />
  );
};

export default CampoTexto;