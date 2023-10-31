import React, { createContext, ReactNode, useEffect, useState } from 'react'

export interface IModalContext {
  dayToDisplay: number
  displayModal: boolean
  toggleDayModal: (day: number) => void
  children?: ReactNode
}

export const ModalContext = createContext<IModalContext | null>({
  dayToDisplay: 0,
  displayModal: false,
  toggleDayModal: () => {},
})

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [displayModal, setDisplayModal] = useState(false)
  const [dayToDisplay, setDayToDisplay] = useState(0)

  const toggleDayModal = (day: number) => {
    setDisplayModal(!displayModal)
    setDayToDisplay(day)
  }

  return (
    <ModalContext.Provider value={{ dayToDisplay, displayModal, toggleDayModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
