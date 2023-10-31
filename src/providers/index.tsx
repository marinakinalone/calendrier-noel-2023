'use client'
import CalendarProvider from './Calendar'
import ModalProvider from './Modal'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CalendarProvider>
      <ModalProvider>{children}</ModalProvider>
    </CalendarProvider>
  )
}

export default Providers
