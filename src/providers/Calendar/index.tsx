import { getCalendarData, ICalendarData } from '@/data/calendarData'
import inspiredCalendarInfo from '@/data/inspiredCalendar'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export interface ICalendarContext {
  today: number
  isChristmasOrLater: boolean
  calendarData: ICalendarData[]
  children?: ReactNode
}

export const CalendarContext = createContext<ICalendarContext>({
  today: 0,
  isChristmasOrLater: false,
  calendarData: inspiredCalendarInfo,
})

const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [today, setToday] = useState(0)
  const [isChristmasOrLater, setIsChristmasOrLater] = useState(false)
  const [calendarData, setCalendarData] = useState(inspiredCalendarInfo)

  useEffect(() => {
    const urlParams = new URLSearchParams((window as Window).location.search)
    const jazzParam = urlParams.get('jazz')
    const calendarInfo = getCalendarData(jazzParam)
    setCalendarData(calendarInfo)
  }, [])

  useEffect(() => {
    const todayFullDate = new Date()
    setToday(todayFullDate.getDate())
  }, [])

  useEffect(() => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const isChristmasOrLater =
      currentYear >= 2023 && currentDate.getMonth() === 11 && currentDate.getDate() >= 25

    setIsChristmasOrLater(isChristmasOrLater)
  }, [today])

  return (
    <CalendarContext.Provider value={{ today, isChristmasOrLater, calendarData }}>
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarProvider
