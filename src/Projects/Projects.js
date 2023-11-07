import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

import chat4You from '../Images/chat.webp';
import rentalCal from '../Images/RentalCarDubai.jpeg';
import savemoney from '../Images/saveMoney.png';
import ymaster from '../Images/saveMoney.png';

const Projects = () => {
  const { t } = useTranslation();

  const ymasterDescription = t('ymasterDescription')
  const changeYmoneyDescription = t('changeYmoneyDescription')
  const rentalCarDescription = t('rentalCarDescription')
  const chat4YouDescription = t('chat4YouDescription')

  const projects = [
    {
      title: 'Ymaster',
      descriptionKey: ymasterDescription,
      technologies: ['React Native', 'Redux', 'Firebase'],
      image: ymaster,
      link: 'https://ymaster.net/'
    },
    {
      title: 'Save money',
      descriptionKey: changeYmoneyDescription,
      technologies: ['React Native', 'Redux','Node.js'],
      image: savemoney,
      link: 'https://conotoxia.com/currency-mobile-application'
    },
    {
      title: 'Rental car in Dubai',
      descriptionKey: rentalCarDescription,
      technologies: ['React', 'Redux','Node.js'],
      image: rentalCal,
      link: 'https://superiorrental.ae/'
    },
    {
      title: 'Chat4You',
      descriptionKey: chat4YouDescription,
      technologies: ['React Native','Redux', 'Firebase'],
      image: chat4You,
      link: 'https://play.google.com/store/apps/details?id=gpt.chat.ai&hl=en_US'
    },
  ];

  return (
    <section id="projectsSection" className="projects-section">
    <h2 className="projects-heading">{t('my_projects')}</h2>
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{t(project.descriptionKey)}</p>
          <div>{t('technologies')}: {project.technologies.join(', ')}</div>
          <a href={project.link} target="_blank" rel="noopener noreferrer"> {t('view_project')}</a>
        </div>
      </div>
    ))}
  </section>
  );
};

export default Projects;