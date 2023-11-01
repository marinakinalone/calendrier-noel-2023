/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './DayButton.module.scss'
import useModal from '@/hooks/useModal'
import BlobMarker from '@/components/BlobMarker'

interface IDayButton {
  id: number
  day: number
  clickable: boolean
}

const DayButton = ({ id, day, clickable }: IDayButton) => {
  const { toggleDayModal } = useModal()

  return (
    <div key={id} className={styles.frame}>
      {clickable ? (
        <button className={styles.dayButton} onClick={() => toggleDayModal(day)}>
          <h2>{day}</h2>
        </button>
      ) : (
        <div onClick={() => toggleDayModal(day)}>
          <h2>{day}</h2>
        </div>
      )}
      <img src={`/frames/frame_${id}.png`} alt={`Image ${id + 1}`} />
    </div>
  )
}

export default DayButton
