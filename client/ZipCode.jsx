import React from 'react';

const ZipCode = props => {

  const clickHandler = event => {
    const value = event.target.previousSibling.value;
    props.setZipCode(value);
  }

  return (
    <div id="zip-form">
      <input placeholder='Enter your Zip Code' />
      <button onClick={clickHandler}>Go</button>

    </div>
  )
}

export default ZipCode
