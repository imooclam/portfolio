import { nanoid } from '@reduxjs/toolkit';
import React from 'react';

import { FcProcess } from 'react-icons/fc';
import { TbBrandRedux } from 'react-icons/tb';
export const data = [
  // {
  //   id: 0,
  //   img: 'Comfy.PNG',
  //   link: 'https://ecomy-app.netlify.app/',
  //   name: 'comfy',
  //   icon: <FcProcess className="process" />,
  // },
  {
    id: nanoid(),
    img: 'Comfy.PNG',
    link: 'https://react-course-comfy-sloth-store.netlify.app/',
    name: 'comfy',
    icon: 'React',
  },
  {
    id: nanoid(),
    img: 'JobTrack.PNG',
    link: 'https://job-tracked.netlify.app/',
    name: 'Job-Track',
    icon: <TbBrandRedux />,
  },
  {
    id: nanoid(),
    img: 'movie.PNG',
    link: 'https://movie-lala-project.netlify.app/',
    name: 'Movie-Search',
    icon: <TbBrandRedux />,
  },
  {
    id: nanoid(),
    img: 'CartRedux.PNG',
    link: 'cart-redux-nanoid.netlify.app',
    name: 'Cart',
    icon: <TbBrandRedux />,
  },
  {
    id: 1,
    img: 'omifood-app.png',
    link: 'https://omifood-app.netlify.app/',
    name: 'omifood',
    icon: 'JS',
  },
  {
    id: 2,
    img: 'immer.PNG',
    link: 'https://counter-immer.netlify.app/',
    name: 'Counter (immer)',
    icon: 'React',
  },
  {
    id: 3,
    img: 'menu.PNG',
    link: 'https://menu-foo.netlify.app/',
    name: 'Menu-app',
    icon: 'React',
  },
  {
    id: 4,
    img: 'Slider.PNG',
    link: 'https://slider-app.netlify.app/',
    name: 'Slider-app',
    icon: 'React',
  },
  {
    id: 5,
    img: 'navbar.PNG',
    link: 'https://navbar-app-v1.netlify.app/',
    name: 'Responsive-Navbar-app',
    icon: 'React',
  },
  {
    id: 6,
    img: 'Bootstrap.PNG',
    link: 'https://business-bs.netlify.app/',
    name: 'Responsive(ws)-Bootstrap',
    icon: 'BS',
  },
  {
    id: 7,
    img: 'time-zoneExercise.PNG',
    link: 'https://time-zone-js.netlify.app/',
    name: 'Time-zone',
    icon: 'JS',
  },
  {
    id: 8,
    img: 'Dad-jokes.PNG',
    link: 'https://dad-joke-app-ajax.netlify.app/',
    name: 'Dad-jokes(Ajax)',
    icon: 'JS',
  },
  {
    id: 9,

    img: 'signature.PNG',
    link: 'https://signature-app.netlify.app/',
    name: 'signature-app',
    icon: 'React',
  },
  {
    id: 10,

    img: 'BirthDay-Reminder.PNG',
    link: 'https://birth-day-reminder-remove-clear-reset.netlify.app/',
    name: 'BirthDay-Reminder',
    icon: 'React',
  },
];
