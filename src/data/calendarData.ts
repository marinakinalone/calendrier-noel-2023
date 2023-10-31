export interface ICalendarData {
  id: number
  day: number
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

const calendarData = [
  {
    id: 0,
    day: 1,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 1,
    day: 15,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 2,
    day: 23,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 3,
    day: 5,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 4,
    day: 8,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 5,
    day: 21,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 6,
    day: 17,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 7,
    day: 11,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 8,
    day: 3,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 9,
    day: 9,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 10,
    day: 16,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 11,
    day: 6,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 12,
    day: 20,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 13,
    day: 13,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 14,
    day: 22,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 15,
    day: 18,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 16,
    day: 12,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 17,
    day: 4,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 18,
    day: 10,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 19,
    day: 2,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 20,
    day: 19,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 21,
    day: 24,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 22,
    day: 7,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
  {
    id: 23,
    day: 14,
    description: 'today`s song or video is about...',
    palette: {
      color1: '#123456',
      color2: '#678901',
    },
    links: { youtube: 'link', deezer: 'link', spotify: 'link' },
  },
] as ICalendarData[]

export default calendarData
