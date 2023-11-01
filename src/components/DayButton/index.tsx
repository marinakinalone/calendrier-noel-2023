/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './DayButton.module.scss'
import useModal from '@/hooks/useModal'
import useCalendar from '@/hooks/useCalendar'

interface IDayButton {
  id: number
  day: number
  christmas: string
  clickable: boolean
}

const DayButton = ({ id, day, christmas, clickable }: IDayButton) => {
  const { toggleDayModal } = useModal()
  const { isChristmasOrLater } = useCalendar()

  const label = isChristmasOrLater ? christmas : day

  return (
    <div key={id} className={styles.frame}>
      {clickable ? (
        <button className={styles.dayButton} onClick={() => toggleDayModal(day)}>
          <h2>{label}</h2>
        </button>
      ) : (
        <div>
          <h2>{label}</h2>
        </div>
      )}
      <img src={`/frames/frame_${id}.png`} alt={`Image ${id + 1}`} />
    </div>
  )
}

export default DayButton
