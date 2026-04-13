/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import { HTMLMotionProps } from "motion/react"
import * as motion from "motion/react-m"
import React from "react"

export default function TextBlurEffect({
  children,
  ...props
}: { children: string } & HTMLMotionProps<'span'>) {

  const text =
    typeof children === "string"
      ? children
      : React.Children.toArray(children)
          .map(c => (typeof c === "string" || typeof c === "number" ? c : ""))
          .join("")

  return (
    <>
      {text.split('').map((char, i) => (
        // @ts-ignore
        <motion.span
          key={i}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          initial={{ opacity: 0, filter: 'blur(32px)', scale: 0.9, y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1, y: 0 }}
          transition={{ delay: i * 0.035, ease: [1, 0, 0, 1], duration: 0.7 }}
          {...props}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}