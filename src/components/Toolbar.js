import React from 'react';

function Toolbar({filters, selected, onSelectFilter}) {

  const onSelect = (e) => {
    onSelectFilter(e.target.textContent);
  };

  return <div className='filter-list'>
    {filters.map((item, index) => {
      if (item === selected) {
        return <li className='filter-item selected' key={index}>{item}</li>;
      }
      else {
        return <li className='filter-item' onClick={onSelect} key={index}>{item}</li>;
      }
    })}
  </div>
}

export default Toolbar;