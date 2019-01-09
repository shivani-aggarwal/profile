import React from 'react';
import arrow from '../assets/rightArrow.png';

const Project = ({src, title, text, link}) => {
	return (
		<a href={link} target='_blank' rel="noopener noreferrer" class="card flex-row" style={{width: '60%', marginBottom: '20px', marginTop: '20px', color:'inherit', textDecoration:'none'}}>
			<div class="card-header">
           		<img src={src} alt="" height='180px' width='180px' className='grow'/>
        	</div>
        	<div class="card-block" style={{width: '60%'}}>
            	<h3 style={{marginLeft: '30px', marginTop:'15px'}}>{title}</h3>
            	<p style={{marginLeft: '30px'}}>{text}</p>
        	</div>
            <div class='card-block h-100' style={{margin:'auto'}}>
                <img src={arrow} alt='click for more information' height='45px' width='45px' className='grow'/> 
            </div>
        </a>
	);
}

export default Project;