import Nav from './Nav'
import RopeThread from './RopeThread'
import ScrollToTop from './ScrollToTop'
import SectionNav from './SectionNav'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <RopeThread />
      <SectionNav />
      <main className="pt-16">{children}</main>
    </>
  )
}
