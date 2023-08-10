import React, { useState } from 'react';
import randm from '../src/images/randm.png'
import vg from '../src/images/vg.png'

import './App.css';

interface project {
  name: string
  image: string
  description: string
  technologies: string
  date: string
  link: string
}

function App() {
  const [projects , setProjects] = useState([
    {
      name: 'Rick and Morti',
      image: randm,
      description : 'This was my first experience in building a full-stack Single Page Application (SPA).',
      tecnologies: 'Javascript, Css, React, Redux, Sequelize, PosgreSQL',
      date: 'April 2023',
      link: ''
    },
    {
      name: 'Videogames Store',
      image: vg,
      description : 'As a requirement within this incredible and intensive bootcamp prior to completing the second stage, each and every student is tasked with constructing a personal SPA (Single Page Application). They are then expected to showcase their project to an expert, defending it against technical inquiries in a live, real-time meeting. ',
      tecnologies: 'Javascript, Css, React, Redux, Sequelize, PosgreSQL',
      date: 'June 2023',
      link: 'https://deploy-ruby-mu.vercel.app/'
    },
    {
      name: 'Livinng.co',
      image: '',
      description : 'As a requirement within this incredible and intensive bootcamp prior to completing the second stage, each and every student is tasked with constructing a personal SPA (Single Page Application). They are then expected to showcase their project to an expert, defending it against technical inquiries in a live, real-time meeting. ',
      tecnologies: 'Javascript, Css, React, Redux, Sequelize, PosgreSQL',
      date: 'Augost 2023',
      link: 'https://livinng.vercel.app/'
    }
  ])
  return (
    <div className="App">
      <h1> Diego Sapia Porfolio</h1>
      <ul>
        {
          projects.map(pro => {
            return (
              <li key={pro.name}>
                <img src={pro.image} alt={` ${pro.name}`} />
                <h4>{pro.tecnologies}</h4>
                <p>{pro.date}</p>
                <p>{pro.description}</p>
                <a href={pro.link}>{pro.link}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
