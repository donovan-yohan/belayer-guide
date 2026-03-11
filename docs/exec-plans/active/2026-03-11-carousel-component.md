# Carousel Component

> **Status**: Completed | **Created**: 2026-03-11 | **Completed**: 2026-03-11
> **Spec**: GOAL.json climb guide-4
> **For Claude:** Use /harness:orchestrate to execute this plan.

## Decision Log

| Date | Phase | Decision | Rationale |
|------|-------|----------|-----------|
| 2026-03-11 | Design | Use AnimatePresence for slide transitions | Matches existing Framer Motion patterns in the project |
| 2026-03-11 | Design | Accept ReactNode children as slides | Maximum flexibility — any diagram or content can be a slide |
| 2026-03-11 | Design | Amber dot indicators with opacity states | Consistent with accent color and opacity patterns in SectionGraphic |
| 2026-03-11 | Design | Support swipe gestures via Framer Motion drag | Mobile-first, no extra dependencies |

## Progress

- [x] Task 1: Create Carousel component with slide state management _(completed 2026-03-11)_
- [x] Task 2: Add Framer Motion slide transitions with AnimatePresence _(completed 2026-03-11)_
- [x] Task 3: Add dot indicators with active state _(completed 2026-03-11)_
- [x] Task 4: Add swipe/drag gesture support for mobile _(completed 2026-03-11)_
- [x] Task 5: Verify build succeeds _(completed 2026-03-11)_

## Surprises & Discoveries

| Date | Finding | Impact | Action |
|------|---------|--------|--------|
| 2026-03-11 | Framer Motion Variants type requires cubic-bezier array, not 'easeOut' string | Minor — no functional impact | Used `[0.25, 0.1, 0.25, 1]` cubic-bezier equivalent |

## Plan Drift

_No drift — implementation matched spec._

---

## Task 1: Create Carousel component with slide state management

**File:** `src/components/Carousel.tsx`

Create the Carousel component that:
- Accepts `children` as ReactNode array (each child is a slide)
- Tracks `currentIndex` state
- Renders only the active slide
- Exports as default

**Interface:**
```tsx
interface CarouselProps {
  children: React.ReactNode[]
  className?: string
}
```

## Task 2: Add Framer Motion slide transitions with AnimatePresence

Wrap the active slide in `AnimatePresence` with `mode="wait"`. Transition:
- Enter: fade in + slide from right (x: 40 → 0, opacity: 0 → 1)
- Exit: fade out + slide to left (x: 0 → -40, opacity: 1 → 0)
- Duration: 0.3s with easeOut
- Track direction so going backward reverses the animation direction

## Task 3: Add dot indicators with active state

Below the slide content, render dot indicators:
- One dot per slide
- Active dot: `bg-accent` (amber), scale 1
- Inactive dot: `bg-accent/30`, scale 0.75
- Clickable to navigate to that slide
- Framer Motion `layoutId` or scale animation on active state change
- Dots are `w-2.5 h-2.5 rounded-full` with `gap-3` spacing

## Task 4: Add swipe/drag gesture support for mobile

Use Framer Motion's `drag="x"` on the slide container:
- `dragConstraints={{ left: 0, right: 0 }}`
- `onDragEnd` handler: if drag distance > 50px, advance/retreat slide
- `dragElastic={0.2}` for natural feel

## Task 5: Verify build succeeds

Run `npm run build` to ensure no type errors or build failures.

---

## Outcomes & Retrospective

_Filled by /harness:complete when work is done._

**What worked:**
- Single worker for same-file tasks was efficient — no merge conflicts
- Type design review caught a real direction-state bug that would have caused wrong animations
- Non-empty tuple type `[T, ...T[]]` is a zero-cost way to express array constraints

**What didn't:**
- Initial implementation missed overflow-hidden and had a stale AnimatePresence custom prop

**Learnings to codify:**
- Framer Motion `custom` prop on AnimatePresence can read stale state — prefer setting it only on child motion.div
- Always add overflow-hidden to drag containers with AnimatePresence slide transitions
