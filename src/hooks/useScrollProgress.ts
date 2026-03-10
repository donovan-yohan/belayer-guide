import { useScroll, useTransform, MotionValue } from 'framer-motion'

export function useScrollProgress(): {
  scrollYProgress: MotionValue<number>
  scrollY: MotionValue<number>
} {
  const { scrollYProgress, scrollY } = useScroll()
  return { scrollYProgress, scrollY }
}

export function useParallax(scrollY: MotionValue<number>, rate: number = 0.3) {
  return useTransform(scrollY, (v) => v * rate)
}
