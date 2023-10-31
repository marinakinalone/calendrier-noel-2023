'use client'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export interface ICalendarContext {
  today: Date
  isChristmasOrLater: boolean
  children?: ReactNode
}

export const CalendarContext = createContext<ICalendarContext>({
  today: new Date(),
  isChristmasOrLater: false,
})

const CalendarProvider = ({ children }: { children: ReactNode }) => {
  const [today, setToday] = useState(new Date())
  const [isChristmasOrLater, setIsChristmasOrLater] = useState(false)

  useEffect(() => {
    setToday(new Date())
  }, [])

  useEffect(() => {
    const currentYear = today.getFullYear()
    const isChristmasOrLater =
      currentYear >= 2023 && today.getMonth() === 11 && today.getDate() >= 25

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
