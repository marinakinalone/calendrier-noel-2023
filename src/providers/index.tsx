import CalendarProvider from './Calendar'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CalendarProvider>{children}</CalendarProvider>
}

export default Providers
