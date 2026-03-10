import Nav from './Nav'
import RopeThread from './RopeThread'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <RopeThread />
      <main className="pt-16">{children}</main>
    </>
  )
}
