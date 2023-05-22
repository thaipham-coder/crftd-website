import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

/**
 * A component that displays a live clock with the current time in the 'Europe/Amsterdam' timezone.
 * The clock continuously updates and shows the time in the 'LT' format (e.g., 9:30 PM).
 */

const DynamicClock = dynamic(() => import('react-live-clock'), { ssr: false })

export default function LiveClock() {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        setShouldRender(true)
    }, [])

    return shouldRender ? (
        <DynamicClock
            format={'LT'}
            ticking={true}
            timezone={'Europe/Amsterdam'}
            className="lowercase"
        />
    ) : null
}
