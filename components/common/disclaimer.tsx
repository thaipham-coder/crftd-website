'use client'

import Modal from 'react-modal'
import { useState } from 'react'
import Image from 'next/image'
import arrowIcon from '@/public/icons/arrow-right-dark.svg'

export default function Disclaimer() {
  const [isOpen, setIsOpen] = useState(true)
  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <div className="flex flex-col items-center">
          <p className="mb-2 text-xl text-center">
            🚧 &nbsp;Deze website is volop in ontwikkeling. &nbsp;🚧
          </p>
          <p className="mb-8">
            Bekijk{' '}
            <a
              className="ia text-crftd-purple"
              data-type="button"
              href="https://github.com/olavgit/crftd-website"
            >
              hier
            </a>{' '}
            de repo.
          </p>
          <button
            type="button"
            data-type="button"
            className="ia group flex w-fit items-center gap-4"
            onClick={() => setIsOpen(false)}
          >
            <p>Toch benieuwd hoe ver we zijn?</p>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center before:absolute before:h-8 before:w-8 before:rounded-full before:border before:border-crftd-gray before:transition-all before:duration-300 before:ease-out group-hover:before:h-12 group-hover:before:w-12 group-hover:before:border-0 group-hover:before:bg-crftd-purple"
            >
              <Image src={arrowIcon} alt="arrow right icon" className="z-0" />
            </button>
          </button>
        </div>
      </Modal>
    </div>
  )
}
