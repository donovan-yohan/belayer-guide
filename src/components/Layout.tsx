import Nav from './Nav'
import ProgressBar from './ProgressBar'
import RopeThread from './RopeThread'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <ProgressBar />
      <RopeThread />
      <main className="pt-16">{children}</main>
    </>
  )
}
