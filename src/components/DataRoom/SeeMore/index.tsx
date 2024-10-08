import type { BaseBlock } from '@/components/Home/types'
import { useRef } from 'react'
import dynamic from 'next/dynamic'
import css from './styles.module.css'

const SlidingContent = dynamic(() => import('./SlidingContent'))

const SeeMore = ({ text }: BaseBlock) => {
  const backgroundRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={backgroundRef} className={css.sectionContainer}>
      <SlidingContent text={text} containerRef={backgroundRef} />
    </div>
  )
}

export default SeeMore
