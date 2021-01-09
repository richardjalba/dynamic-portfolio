//Import Images
import work1 from './img/work1.png';
import work01 from './img/work01.png';
import work2 from './img/work2.png';

export const MovieState = () => {
  return [
    {
      title: 'H2 Marketing Consultants',
      mainImg: work1,
      //   ytvideo: '',
      // There is no video on youtube - will update when available.
      secondaryImg: work01,
      url: '/work/work-1',
      points: [
        {
          title: 'Front End Development',
          description:
            'Worked as a web developer and designer for a marketing company and worked with various clients.',
        },
        {
          title: 'HTML/CSS',
          description:
            'This position made heavy use of mark-up languages and Responsive Web Design.',
        },
        {
          title: 'Remote',
          description:
            'This was a remote position where we communicated via weekly meetings and Teams.',
        },
      ],
    },
    {
      title: 'Cinnamon Roll Studios',
      mainImg: work2,
      //   ytvideo: 'https://youtu.be/rqLvxOXKk5A',
      // There is no video on youtube - will update when available.
      url: '/work/work-2',
      secondaryImg: work2,
      points: [
        {
          title: 'Unity VR/AR Development',
          description:
            'Worked as a software developer and built assets and functionality for a private project.',
        },
        {
          title: 'Unity / C#',
          description:
            'This position made heavy use C# to help build Virtual Reality projects.',
        },
        {
          title: 'Remote',
          description:
            'This was a remote position where we communicated regularly via in-house software.',
        },
      ],
    },
  ];
};
