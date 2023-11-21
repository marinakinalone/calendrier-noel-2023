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
    links: { youtube: 'https://www.youtube.com/watch?v=VNwNsHpoRvc' },
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
    links: { website: 'https://apod.nasa.gov/apod/astropix.html' },
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
    links: { website: 'https://jazzkeys.plan8.co/' },
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
    links: {
      website: 'https://www.elizabethfilips.com/post/the-best-reading-skill-no-one-ever-taught-you',
    },
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
    links: { website: 'https://80000hours.org/' },
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
    links: { website: 'https://neal.fun/spend/' },
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
    links: {
      website: 'https://marinakinalone.notion.site/Cookbook-78ac7804d20c4847b4968008300ab1ec',
    },
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
    links: { website: 'https://zerowastestockholm.org/projects/city-guide' },
  },
  {
    day: 9,
    id: 9,
    christmas: 'O',
    description: 'Freya Holmér',
    palette: {
      color1: 'rgb(255, 215, 194)',
      color2: 'rgb(252, 186, 167)',
    },
    links: { youtube: 'https://www.youtube.com/watch?v=aVwxzDHniEw&ab_channel=FreyaHolm%C3%A9r' },
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
    links: { youtube: 'https://www.youtube.com/watch?v=qzc7vY9VTnk&ab_channel=BlackPepperSwing' },
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
    links: { website: 'https://ncase.me/anxiety/' },
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
    links: { website: 'https://mondrianandme.com/' },
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
    links: { website: 'https://sailor-moon-quote-machine.vercel.app/' },
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
    links: { website: 'https://www.window-swap.com/' },
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
    links: { website: 'https://www.doc.cc/articles/the-aesthetics-of-our-new-fictions' },
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
    links: { website: 'https://www.apartmenttherapy.com/' },
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
    links: { website: 'https://la-la-dance.vercel.app/' },
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
    links: { website: 'https://chrisguillebeau.com/36-ways' },
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
    links: { website: 'https://userinyerface.com/' },
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
    links: { youtube: 'https://youtu.be/_yZiNnQftxU?feature=shared' },
  },
  {
    day: 24,
    id: 21,
    christmas: '♡',
    description: 'edith',
    palette: {
      color1: 'rgb(217, 220, 219)',
      color2: 'rgb(212, 177, 86)',
    },
    links: { website: 'https://www.speech.almeida.co.uk/edith-sampson' },
  },
] as ICalendarData[]

export default inspiredCalendarInfo
