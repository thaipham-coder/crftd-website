'use client'

import Clock from 'react-live-clock'
import { useEffect, useState } from 'react'

/**
 * A component that displays a live clock with the current time in the 'Europe/Amsterdam' timezone.
 * The clock continuously updates and shows the time in the 'LT' format (e.g., 9:30 PM).
 */

export default function LiveClock() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    setShouldRender(true)
  }, [])

  return shouldRender ? (
    <Clock
      format="LT"
      ticking={true}
      timezone={'Europe/Amsterdam'}
      className="lowercase"
    />
  ) : null
}
