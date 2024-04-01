import React from 'react';
import { useProfile } from '../../context/ProfileContext';
import './cardProjects.css';

function CardProjects() {
    const { profile } = useProfile();

    return (
        
            profile?.projects.map((project, index) => (
                <div className='projects__info' key={index}>
                     
                    <ul className='projects__list'>
                        <li className='projects__item'>
                           
                            <div className='projects__description'>
                            <h3 className="tertiary-title">{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.link} target='_blank'>See More &rarr;</a>
                            </div>
                            <div className="image">
                                 <img src={project.img} alt="ecommerce" />
                            </div>
                        </li>
                    </ul>
                </div>
            ))
        
    );
}

export default CardProjects;



