'use client'

import { MotionProps } from "motion/react"
import * as motion from "motion/react-m"

export default function TextRevealEffect({
  children,
  className
}: {
  children: string
} & React.ComponentProps<'span'> & MotionProps) {

  const chars = children.split('')

  return (
    <>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline', whiteSpace: 'pre-wrap' }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: i * 0.015,
            ease: [1, 0, 0, 1],
            duration: 0.6
          }}
          viewport={{ once: true }}
          className={className}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}