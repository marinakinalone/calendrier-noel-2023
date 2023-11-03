/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './ModalOrnament.module.scss'

const getFrames = (id: number) => {
  const ornamentId = id % 4
  const nbOfFrames = id % 2 === 0 ? 1 : 2
  const frames = []

  for (let i = 0; i <= nbOfFrames; i++) {
    frames.push({
      src: `/ornament_${ornamentId}/pic_${i}.png`,
      className: styles[`modalAnimation-${i}`],
    })
  }

  return frames
}

const ModalOrnament = ({ id }: { id: number }) => {
  const images = getFrames(id)

  return (
    <div className={styles.ornamentFrame}>
      {images.map(({ src, className }) => {
        return <img key={src} src={src} alt={''} className={className} />
      })}
    </div>
  )
}

export default ModalOrnament
