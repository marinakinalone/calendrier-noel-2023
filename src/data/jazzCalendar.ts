import { ICalendarData } from './calendarData'

interface ICalendarJazzItem {
  id: number
  description: string
  links: {
    youtube: string
    deezer?: string
    spotify?: string
  }
}

const calendarJazzInfo = [
  {
    id: 0,
    description:
      'Smooth jazz for a relaxing holiday season. Enjoy the soothing melodies and rhythms of Christmas jazz.',
    links: { youtube: 'jazz-link-0', deezer: 'jazz-link-0', spotify: 'jazz-link-0' },
  },
  {
    id: 1,
    description:
      'Get into the jazzy spirit with lively tunes that will make your holiday season swing!',
    links: { youtube: 'jazz-link-1' },
  },
  {
    id: 2,
    description:
      'Unwind with the mellow sounds of jazz, adding a touch of elegance to your Christmas celebrations.',
    links: { youtube: 'jazz-link-2', deezer: 'jazz-link-2', spotify: 'jazz-link-2' },
  },
  {
    id: 3,
    description:
      'Experience the magic of Christmas with a blend of jazz and traditional favorites.',
    links: { youtube: 'jazz-link-3', deezer: 'jazz-link-3', spotify: 'jazz-link-3' },
  },
  {
    id: 4,
    description: 'Feel the warmth of the holiday season with these heartwarming jazz compositions.',
    links: { youtube: 'jazz-link-4', deezer: 'jazz-link-4', spotify: 'jazz-link-4' },
  },
  {
    id: 5,
    description:
      'Jazz up your Christmas playlist with these enchanting melodies that will melt your heart.',
    links: { youtube: 'jazz-link-5', deezer: 'jazz-link-5', spotify: 'jazz-link-5' },
  },
  {
    id: 6,
    description:
      'Get in the groove with some upbeat jazz tunes that will make your holiday season swing!',
    links: { youtube: 'jazz-link-6', deezer: 'jazz-link-6', spotify: 'jazz-link-6' },
  },
  {
    id: 7,
    description:
      'Celebrate the holidays with a jazzy twist, bringing joy and rhythm to your Christmas.',
    links: { youtube: 'jazz-link-7', deezer: 'jazz-link-7', spotify: 'jazz-link-7' },
  },
  {
    id: 8,
    description:
      'Let the jazzy sounds of Christmas fill your heart with cheer and festive delight.',
    links: { youtube: 'jazz-link-8', deezer: 'jazz-link-8', spotify: 'jazz-link-8' },
  },
  {
    id: 9,
    description:
      'Elevate your holiday spirit with a touch of jazz that adds elegance to your festivities.',
    links: { youtube: 'jazz-link-9', deezer: 'jazz-link-9', spotify: 'jazz-link-9' },
  },
  {
    id: 10,
    description:
      'Experience the joy of Christmas with a unique blend of jazz and holiday classics.',
    links: { youtube: 'jazz-link-10', deezer: 'jazz-link-10', spotify: 'jazz-link-10' },
  },
  {
    id: 11,
    description:
      'Celebrate the season with heartwarming jazz tunes that resonate with the spirit of Christmas.',
    links: { youtube: 'jazz-link-11', deezer: 'jazz-link-11', spotify: 'jazz-link-11' },
  },
  {
    id: 12,
    description:
      'Experience the magic of the holidays with these festive jazz compositions that will warm your heart.',
    links: { youtube: 'jazz-link-12', deezer: 'jazz-link-12', spotify: 'jazz-link-12' },
  },
  {
    id: 13,
    description:
      'Get into the jazzy holiday spirit with these enchanting melodies that will make your season bright.',
    links: { youtube: 'jazz-link-13', deezer: 'jazz-link-13', spotify: 'jazz-link-13' },
  },
  {
    id: 14,
    description:
      'Celebrate the holidays with a touch of jazz, adding elegance and charm to your Christmas celebrations.',
    links: { youtube: 'jazz-link-14', deezer: 'jazz-link-14', spotify: 'jazz-link-14' },
  },
  {
    id: 15,
    description:
      'Embrace the enchanting sounds of Christmas with these jazzy tunes that will light up your holiday season.',
    links: { youtube: 'jazz-link-15', deezer: 'jazz-link-15', spotify: 'jazz-link-15' },
  },
  {
    id: 16,
    description:
      'Experience the magic of Christmas with a jazzy twist, bringing joy and rhythm to your celebrations.',
    links: { youtube: 'jazz-link-16', deezer: 'jazz-link-16', spotify: 'jazz-link-16' },
  },
  {
    id: 17,
    description:
      'Celebrate the holiday season with a fusion of jazz and tradition, creating a unique festive atmosphere.',
    links: { youtube: 'jazz-link-17', deezer: 'jazz-link-17', spotify: 'jazz-link-17' },
  },
  {
    id: 18,
    description:
      'Experience the joy of Christmas with the perfect blend of jazz and holiday classics.',
    links: { youtube: 'jazz-link-18', deezer: 'jazz-link-18', spotify: 'jazz-link-18' },
  },
  {
    id: 19,
    description:
      'Celebrate the season with jazzy holiday tunes that resonate with the spirit of Christmas.',
    links: { youtube: 'jazz-link-19', deezer: 'jazz-link-19', spotify: 'jazz-link-19' },
  },
  {
    id: 20,
    description:
      'Let the enchanting sounds of Christmas fill your heart with holiday cheer and festive delight.',
    links: { youtube: 'jazz-link-20', deezer: 'jazz-link-20', spotify: 'jazz-link-20' },
  },
  {
    id: 21,
    description:
      'Celebrate the holidays with a touch of jazz, adding elegance and charm to your Christmas festivities.',
    links: { youtube: 'jazz-link-21', deezer: 'jazz-link-21', spotify: 'jazz-link-21' },
  },
  {
    id: 22,
    description:
      'Feel the warmth of the season with heartwarming jazz compositions that will make your Christmas special.',
    links: { youtube: 'jazz-link-22', deezer: 'jazz-link-22', spotify: 'jazz-link-22' },
  },
  {
    id: 23,
    description: 'Celebrate the season with festive jazz tunes that will bring joy and rhythm',
    links: { youtube: 'jazz-link-22', deezer: 'jazz-link-22', spotify: 'jazz-link-22' },
  },
] as ICalendarJazzItem[]

export default calendarJazzInfo
