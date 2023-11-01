import React, { useState } from 'react'
import calendarData from '@/data/calendarData'
import styles from './CalendarGrid.module.scss'
import DayButton from '../DayButton'
import useCalendar from '@/hooks/useCalendar'
import useModal from '@/hooks/useModal'
import DayModal from '../DayModal'
import BlobMarker from '../BlobMarker'

const CalendarGrid = () => {
  const { today, isChristmasOrLater } = useCalendar()
  const { displayModal } = useModal()

  if (displayModal) {
    return <DayModal />
  }

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {calendarData.map(({ id, day, christmas }) => {
          const isClickable = today === day || today > day

          return (
            <div key={id} className={styles.dayFrame}>
              {!isChristmasOrLater && <BlobMarker day={day} />}
              <DayButton key={id} id={id} day={day} christmas={christmas} clickable={isClickable} />
            </div>
          )
        })}
      </div>
      <footer className={styles.footer}>
        calendrier 2023, par&nbsp;
        <a
          href="https://github.com/marinakinalone/calendrier-noel-2023"
          target="_blank"
          rel="noreferrer"
        >
          @mks
        </a>
      </footer>
    </main>
  )
}

export default CalendarGrid
