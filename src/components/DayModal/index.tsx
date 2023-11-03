import React from 'react'
import useModal from '@/hooks/useModal'
import { getDayInfo } from '@/data/calendarData'
import styles from './DayModal.module.scss'
import ModalOrnament from '../ModalOrnament'
import useCalendar from '@/hooks/useCalendar'

const DayModal = () => {
  const { dayToDisplay, toggleDayModal } = useModal()
  const { calendarData } = useCalendar()

  const data = getDayInfo(dayToDisplay, calendarData)
  const { id, day, description, links } = data || {}

  return (
    data && (
      <main className={styles.main}>
        <section className={styles.modal}>
          <ModalOrnament id={id || 0} />
          <button className={styles.closeButton} onClick={() => toggleDayModal(0)}>
            X
          </button>
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
