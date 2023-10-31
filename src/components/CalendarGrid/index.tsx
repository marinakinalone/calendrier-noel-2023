import React from 'react'
import calendarData from '@/data/calendarData'
import styles from './CalendarGrid.module.scss'

const CalendarGrid = () => {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {calendarData.map(({ id, day }) => (
          <div key={id} className={styles.gridItem}>
            <h2>{day}</h2>
            <img src={`/frames/frame_${id}.png`} alt={`Image ${id + 1}`} />
          </div>
        ))}
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
