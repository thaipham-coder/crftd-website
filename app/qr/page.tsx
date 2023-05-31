'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Qr() {
  const router = useRouter()

  useEffect(() => {
    window.location.href = 'https://www.crftd.nl/vcards/olavsajtos-vcard.vcf'
    router.push('/')
  }, [])
  return null
}
