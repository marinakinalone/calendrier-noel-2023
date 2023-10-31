import React from 'react'
import useModal from '@/hooks/useModal'
import calendarData, { ICalendarData } from '@/data/calendarData'

const getModalData = (day: number): ICalendarData | undefined => {
  return calendarData.find((data) => data.day === day)
}

const DayModal = () => {
  const { dayToDisplay, toggleDayModal } = useModal()

  const data = getModalData(dayToDisplay)
  const { day, description, links } = data || {}

  return (
    data && (
      <main>
        <section>
          <button onClick={() => toggleDayModal(0)}>X</button>
          <p>ornament</p>
          <h2>{`Jour ${day}`}</h2>
          <p>{description}</p>
          <div>
            {links &&
              Object.entries(links).map(([name, url]) => (
                <a key={name} href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ))}
          </div>
        </section>
      </main>
    )
  )
}

export default DayModal
