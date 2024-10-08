import type { RefObject } from 'react'
import { Typography } from '@mui/material'
import { motion, useTransform } from 'framer-motion'
import DotGrid from './DotGrid'
import { useIsMediumScreen } from '@/hooks/useMaxWidth'
import useScrollProgress from '@/hooks/useScrollProgress'
import type { BaseBlock } from '@/components/Home/types'
import css from './styles.module.css'

const Content = ({ containerRef, title }: { containerRef: RefObject<HTMLDivElement>; title: BaseBlock['title'] }) => {
  const isMobile = useIsMediumScreen()
  const { scrollYProgress } = useScrollProgress(containerRef)

  const scrollParams = [0, 0.25, 0.75, 1.0]
  const opacityParams = [0, 1, 1, 0]
  const opacity = useTransform(scrollYProgress, scrollParams, opacityParams)

  return (
    <motion.div
      className={css.content}
      style={{
        opacity: isMobile ? 1 : opacity,
      }}
    >
      <Typography align="center" variant="h1">
        {title}
      </Typography>
      <DotGrid containerRef={containerRef} />
    </motion.div>
  )
}

export default Content
