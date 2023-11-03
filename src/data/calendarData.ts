import inspiredCalendarInfo from './inspiredCalendar'
import calendarJazzInfo from './jazzCalendar'
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

export const getDayInfo = (
  day: number,
  calendarData: ICalendarData[],
): ICalendarData | undefined => {
  return calendarData.find((data) => data.day === day)
}

export const getCalendarData = (jazzParam: string | null) => {
  if (jazzParam) {
    return inspiredCalendarInfo.map((item, index) => {
      return {
        ...item,
        description: calendarJazzInfo[index].description,
        links: calendarJazzInfo[index].links,
      }
    })
  }
  return inspiredCalendarInfo
}

// const calendarData = getCalendarData() as ICalendarData[]

// export default calendarData
