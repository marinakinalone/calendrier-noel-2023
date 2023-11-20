import { ICalendarData } from './calendarData'

const inspiredCalendarInfo = [
  {
    day: 1,
    id: 0,
    christmas: 'D',
    description: 'drummers',
    palette: {
      color1: 'rgb(244, 226, 207)',
      color2: 'rgb(232, 193, 167)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 2,
    id: 19,
    christmas: '3',
    description: 'astropix',
    palette: {
      color1: 'rgb(243, 210, 119)',
      color2: 'rgb(244, 227, 205)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 3,
    id: 8,
    christmas: 'N',
    description: 'jazz keys',
    palette: {
      color1: 'rgb(219, 120, 87)',
      color2: 'rgb(197, 137, 75)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 4,
    id: 17,
    christmas: '0',
    description: 'elizabeth',
    palette: {
      color1: 'rgb(221, 120, 111)',
      color2: 'rgb(217, 220, 219)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 5,
    id: 3,
    christmas: 'X',
    description: '80000 hours',
    palette: {
      color1: 'rgb(185, 206, 201)',
      color2: 'rgb(135, 172, 171)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    day: 6,
    id: 11,
    christmas: 'L',
    description: 'neal.fun',
    palette: {
      color1: 'rgb(220, 119, 110)',
      color2: 'rgb(216, 188, 191)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 7,
    id: 22,
    christmas: '♡',
    description: 'cookbook',
    palette: {
      color1: 'rgb(243, 174, 122)',
      color2: 'rgb(217, 220, 219)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 8,
    id: 4,
    christmas: '♡',
    description: 'zero waste stlhm',
    palette: {
      color1: 'rgb(232, 193, 167)',
      color2: 'rgb(219, 120, 87)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 9,
    id: 9,
    christmas: 'O',
    description: '5 choices',
    palette: {
      color1: 'rgb(255, 215, 194)',
      color2: 'rgb(252, 186, 167)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 10,
    id: 18,
    christmas: '2',
    description: 'horoscope',
    palette: {
      color1: 'rgb(122, 140, 104)',
      color2: 'rgb(243, 174, 122)',
    },
    links: { website: 'https://freewillastrology.com/horoscopes/allsigns' },
  },
  {
    day: 11,
    id: 7,
    christmas: '♥',
    description: 'lindy hop',
    palette: {
      color1: 'rgb(135, 172, 171)',
      color2: 'rgb(220, 119, 110)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 12,
    id: 16,
    christmas: '2',
    description: 'accessibility maze',
    palette: {
      color1: 'rgb(241, 184, 158)',
      color2: 'rgb(160, 181, 181)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 13,
    id: 13,
    christmas: '♡',
    description: 'welcome to nightvale',
    palette: {
      color1: 'rgb(252, 186, 167)',
      color2: 'rgb(221, 120, 111)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 14,
    id: 23,
    christmas: '♥',
    description: 'anxiety',
    palette: {
      color1: 'rgb(244, 227, 205)',
      color2: 'rgb(220, 119, 110)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 15,
    id: 1,
    christmas: 'O',
    description: 'mondrian and me',
    palette: {
      color1: 'rgb(243, 174, 122)',
      color2: 'rgb(217, 142, 110)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 16,
    id: 10,
    christmas: 'Ë',
    description: 'sailor moon',
    palette: {
      color1: 'rgb(242, 209, 118)',
      color2: 'rgb(186, 171, 110)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 17,
    id: 6,
    christmas: '♡',
    description: 'window swap',
    palette: {
      color1: 'rgb(216, 188, 191)',
      color2: 'rgb(242, 209, 118)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 18,
    id: 15,
    christmas: '♡',
    description: 'the aesthetic of our fictions',
    palette: {
      color1: 'rgb(216, 188, 191)',
      color2: 'rgb(243, 210, 119)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 19,
    id: 20,
    christmas: '♡',
    description: 'apartment therapy',
    palette: {
      color1: 'rgb(160, 181, 181)',
      color2: 'rgb(182, 182, 141)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 20,
    id: 12,
    christmas: '♥',
    description: 'questionnaire de danse',
    palette: {
      color1: 'rgb(197, 137, 75)',
      color2: 'rgb(241, 184, 158)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 21,
    id: 5,
    christmas: '♡',
    description: 'chris guillebeau',
    palette: {
      color1: 'rgb(217, 142, 110)',
      color2: 'rgb(255, 215, 194)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 22,
    id: 14,
    christmas: '♡',
    description: 'user in your face',
    palette: {
      color1: 'rgb(186, 171, 110)',
      color2: 'rgb(122, 140, 104)',
    },
    links: { youtube: 'link' },
  },
  {
    day: 23,
    id: 2,
    christmas: 'U',
    description: 'neil de grasse tyson',
    palette: {
      color1: 'rgb(235, 207, 198)',
      color2: 'rgb(216, 188, 191)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    day: 24,
    id: 21,
    christmas: '♡',
    description: 'le voyage à',
    palette: {
      color1: 'rgb(217, 220, 219)',
      color2: 'rgb(212, 177, 86)',
    },
    links: { youtube: 'link' },
  },
] as ICalendarData[]

export default inspiredCalendarInfo
