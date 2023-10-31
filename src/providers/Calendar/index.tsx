import React, { createContext, ReactNode, useEffect, useState } from 'react'

export interface ICalendarContext {
  today: number
  isChristmasOrLater: boolean
  children?: ReactNode
}

export const CalendarContext = createContext<ICalendarContext>({
  today: 0,
  isChristmasOrLater: false,
})

const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [today, setToday] = useState(0)
  const [isChristmasOrLater, setIsChristmasOrLater] = useState(false)

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

  console.log('today', today)

  return (
    <CalendarContext.Provider value={{ today, isChristmasOrLater }}>
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarProvider
