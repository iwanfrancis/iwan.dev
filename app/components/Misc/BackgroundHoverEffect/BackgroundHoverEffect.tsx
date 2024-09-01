'use client'

import useMountEffect from '@/app/hooks/useMountEffect/useMountEffect'
import { useRef } from 'react'

function BackgroundHoverEffect() {
  const overlayRef = useRef<HTMLDivElement>(null)

  useMountEffect(() => {
    const overlay = overlayRef.current

    if (!overlay) return

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      overlay.style.transform = `translate(${clientX}px, ${clientY}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  })

  return <div ref={overlayRef} className="bg-hover-effect" />
}

export default BackgroundHoverEffect
