import { ILink } from '../types/types';

const navigationLinks: ILink[] = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/albums',
    text: 'Albums',
  },
  {
    to: '/agenda',
    text: 'Agenda',
  },
  {
    to: '/about',
    text: 'About',
  },
  {
    to: '/contact',
    text: 'Contact',
  },
];

export const linksConfig = { navigationLinks } as const;
