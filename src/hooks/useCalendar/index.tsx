import { useContext } from 'react'
import { CalendarContext } from '@/providers/Calendar'

const useCalendar = () => {
  const calendarContext = useContext(CalendarContext)

  return { ...calendarContext }
}

export default useCalendar
