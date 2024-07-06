import React from 'react';

function ProjectList({projects}) {

const listItems = projects.map((el, index) => 
  <img key={index} src={el.img} />
);

return <div className='project-list'>
  {listItems}
</div>  
  
}

export default ProjectList;