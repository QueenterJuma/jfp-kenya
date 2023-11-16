import React from 'react'
import { BsDownload } from 'react-icons/bs';
const TERMS_AND_CONDITIONS = '/Terms & Conditions sample.png';
const NOMINATION_FORM = '/Nomination form.png';

const Resources = () => {
  const handleDownload = (url) => {
    const filename = url.split("/").pop();
    
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className='resources'>
      <h1>Resources</h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo earum excepturi ipsum in quo, consectetur alias cum id esse ea ab, suscipit incidunt. Soluta repellendus quisquam quaerat aliquam ipsum molestiae.</p>
      <button
        type='button'
        onClick={() => handleDownload(TERMS_AND_CONDITIONS)}
        className=""
        title="Terms & Conditions"
      >
        Terms & Conditions <BsDownload />
      </button>

      <button
        type='button'
        onClick={() => handleDownload(NOMINATION_FORM)}
        className=""
        title="Nomination Form"
      >
        Nomination Form <BsDownload />
      </button>
    </div>
  )
}

export default Resources;
