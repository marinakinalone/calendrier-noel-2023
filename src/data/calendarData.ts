export interface ICalendarData {
  id: number
  day: number
  christmas: string
  description: string
  palette: {
    color1: string
    color2: string
  }
  links: {
    youtube: string
    deezer?: string
    spotify?: string
  }
}

export const getDayInfo = (day: number): ICalendarData | undefined => {
  return calendarData.find((data) => data.day === day)
}

const calendarData = [
  {
    id: 0,
    day: 1,
    christmas: 'D',
    description: 'description',
    palette: {
      color1: 'rgb(244, 226, 207)',
      color2: 'rgb(232, 193, 167)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 1,
    day: 15,
    christmas: 'O',
    description: 'description',
    palette: {
      color1: 'rgb(243, 174, 122)',
      color2: 'rgb(217, 142, 110)',
    },
    links: { youtube: 'link' },
  },
  {
    id: 2,
    day: 23,
    christmas: 'U',
    description: 'description',
    palette: {
      color1: 'rgb(235, 207, 198)',
      color2: 'rgb(216, 188, 191)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 3,
    day: 5,
    christmas: 'X',
    description: 'description',
    palette: {
      color1: 'rgb(185, 206, 201)',
      color2: 'rgb(135, 172, 171)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 4,
    day: 8,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(232, 193, 167)',
      color2: 'rgb(219, 120, 87)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 5,
    day: 21,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(217, 142, 110)',
      color2: 'rgb(255, 215, 194)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 6,
    day: 17,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(216, 188, 191)',
      color2: 'rgb(242, 209, 118)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 7,
    day: 11,
    christmas: '♥',
    description: 'description',
    palette: {
      color1: 'rgb(135, 172, 171)',
      color2: 'rgb(220, 119, 110)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 8,
    day: 3,
    christmas: 'N',
    description: 'description',
    palette: {
      color1: 'rgb(219, 120, 87)',
      color2: 'rgb(197, 137, 75)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 9,
    day: 9,
    christmas: 'O',
    description: 'description',
    palette: {
      color1: 'rgb(255, 215, 194)',
      color2: 'rgb(252, 186, 167)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 10,
    day: 16,
    christmas: 'Ë',
    description: 'description',
    palette: {
      color1: 'rgb(242, 209, 118)',
      color2: 'rgb(186, 171, 110)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 11,
    day: 6,
    christmas: 'L',
    description: 'description',
    palette: {
      color1: 'rgb(220, 119, 110)',
      color2: 'rgb(216, 188, 191)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 12,
    day: 20,
    christmas: '♥',
    description: 'description',
    palette: {
      color1: 'rgb(197, 137, 75)',
      color2: 'rgb(241, 184, 158)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 13,
    day: 13,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(252, 186, 167)',
      color2: 'rgb(221, 120, 111)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 14,
    day: 22,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(186, 171, 110)',
      color2: 'rgb(122, 140, 104)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 15,
    day: 18,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(216, 188, 191)',
      color2: 'rgb(243, 210, 119)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 16,
    day: 12,
    christmas: '2',
    description: 'description',
    palette: {
      color1: 'rgb(241, 184, 158)',
      color2: 'rgb(160, 181, 181)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 17,
    day: 4,
    christmas: '0',
    description: 'description',
    palette: {
      color1: 'rgb(221, 120, 111)',
      color2: 'rgb(217, 220, 219)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 18,
    day: 10,
    christmas: '2',
    description: 'description',
    palette: {
      color1: 'rgb(122, 140, 104)',
      color2: 'rgb(243, 174, 122)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 19,
    day: 2,
    christmas: '3',
    description: 'description',
    palette: {
      color1: 'rgb(243, 210, 119)',
      color2: 'rgb(244, 227, 205)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 20,
    day: 19,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(160, 181, 181)',
      color2: 'rgb(182, 182, 141)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 21,
    day: 24,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(217, 220, 219)',
      color2: 'rgb(212, 177, 86)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 22,
    day: 7,
    christmas: '♡',
    description: 'description',
    palette: {
      color1: 'rgb(243, 174, 122)',
      color2: 'rgb(217, 220, 219)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 23,
    day: 14,
    christmas: '♥',
    description: 'description',
    palette: {
      color1: 'rgb(244, 227, 205)',
      color2: 'rgb(220, 119, 110)',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
] as ICalendarData[]

export default calendarData
