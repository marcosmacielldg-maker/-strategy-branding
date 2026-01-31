import { RefObject, useEffect, useState } from "react"

export const useMouseVector = (
  containerRef?: RefObject<HTMLElement | SVGElement>
) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      let newX = x
      let newY = y

      if (containerRef && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        newX = x - rect.left
        newY = y - rect.top
      }

      setPosition({ x: newX, y: newY })
    }

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY)
    }

    const handleTouchMove = (ev: TouchEvent) => {
      if (ev.touches.length > 0) {
        const touch = ev.touches[0]
        updatePosition(touch.clientX, touch.clientY)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [containerRef])

  return { position }
}