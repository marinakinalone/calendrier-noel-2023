import React from 'react'
import useModal from '@/hooks/useModal'
import calendarData, { ICalendarData } from '@/data/calendarData'
import styles from './DayModal.module.scss'

const getModalData = (day: number): ICalendarData | undefined => {
  return calendarData.find((data) => data.day === day)
}

const DayModal = () => {
  const { dayToDisplay, toggleDayModal } = useModal()

  const data = getModalData(dayToDisplay)
  const { day, description, links } = data || {}

  return (
    data && (
      <main className={styles.main}>
        <section className={styles.modal}>
          <button className={styles.closeButton} onClick={() => toggleDayModal(0)}>
            X
          </button>
          <div>
            <p>ornament</p>
          </div>
          <h2 className={styles.modalTitle}>{`Jour ${day}`}</h2>
          <p className={styles.modalDescription}>{description}</p>
          <div className={styles.links}>
            {links &&
              Object.entries(links).map(([name, url]) => (
                <a
                  className={styles.modalLink}
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
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
