'use client'

import {useRef} from "react";

export default function Qr() {
    const btn = useRef<HTMLButtonElement>(null)
    const stt = () => {
        const URL = 'https://www.crftd.nl/vcards/olavsajtos-vcard.vcf'
        if (typeof window !== "undefined"){
            window.location.href = URL
        }
    }
  return (
      <main>
<h1 className="text-crftd-white">QR</h1>
          <button
              ref={btn}
                onClick={stt}
              className="text-crftd-white"
          >test</button>
      </main>
  )
}
