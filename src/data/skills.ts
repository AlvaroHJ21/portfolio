export interface Skill {
  category: string
  items: {
    name: string
    rating: number
  }[]
}

export default [
  {
    category: 'Frontend',
    items: [
      {
        name: 'HTML/5',
        rating: 6,
      },
      {
        name: 'CSS/3',
        rating: 6,
      },
      {
        name: 'Javascript/ES6',
        rating: 5,
      },
      {
        name: 'Typescript',
        rating: 5,
      },
      {
        name: 'SASS',
        rating: 4,
      },
      {
        name: 'React',
        rating: 6,
      },
      {
        name: 'NextJS',
        rating: 4,
      },
      {
        name: 'Vue',
        rating: 5,
      },
      {
        name: 'Angular',
        rating: 4,
      },
      {
        name: 'TailwindCSS',
        rating: 5,
      },
      {
        name: 'MaterialUI',
        rating: 5,
      },
      {
        name: 'JQuery',
        rating: 4,
      },
      {
        name: 'Bootstrap',
        rating: 3,
      },
      {
        name: 'Wordpress',
        rating: 3,
      },
    ],
  },

  {
    category: 'Movil',
    items: [
      {
        name: 'Dart',
        rating: 4,
      },
      {
        name: 'Flutter',
        rating: 4,
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'NodeJS/Express',
        rating: 5,
      },
      {
        name: 'Codeigniter 4',
        rating: 5,
      },
      {
        name: 'NestJS',
        rating: 3,
      },
      {
        name: 'Laravel 9',
        rating: 4,
      },
      {
        name: 'MySQL',
        rating: 4,
      },
      {
        name: 'Postgress',
        rating: 5,
      },
      {
        name: 'MongoDB',
        rating: 4,
      },
      {
        name: 'Firebase',
        rating: 4,
      },
      {
        name: 'Docker',
        rating: 3,
      },
    ],
  },
  {
    category: 'Herramientas/Otros',
    items: [
      {
        name: 'Git/Gihub',
        rating: 5,
      },
      {
        name: 'Figma',
        rating: 6,
      },
      {
        name: 'UX/UI',
        rating: 4,
      },
      {
        name: 'Jira/Atlassian',
        rating: 4,
      },
      {
        name: 'Scrumm/Agile',
        rating: 5,
      },
    ],
  },
];
