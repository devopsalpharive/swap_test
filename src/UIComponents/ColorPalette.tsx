import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const gradients = [
  {
    name: 'Blue-Purple',
    gradient: 'linear-gradient(90.4deg, #DD00AC 10.66%, #7130C3 53.03%, #410093 96.34%)',
  },
  {
    name: 'Red-Orange',
    gradient: 'linear-gradient(90deg, hsl(0 84% 60%), hsl(30 100% 50%))',
  },
  {
    name: 'Green-Teal',
    gradient: 'linear-gradient(90deg, hsl(140 70% 45%), hsl(180 80% 45%))',
  },
]

const ColorPalette: React.FC = () => {
  const { setPrimaryGradient } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = (gradient: string) => {
    setPrimaryGradient(gradient)
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-16 right-5 z-50" ref={wrapperRef}>
      {/* 🎨 Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md border border-gray-300"
        title="Choose theme"
      >
        🎨
      </button>

      {/* Color palette */}
      {isOpen && (
        <div className="mt-2 flex gap-3 p-3 bg-white rounded-xl shadow-lg border border-gray-200">
          {gradients.map(({ name, gradient }) => (
            <button
              key={name}
              onClick={() => handleSelect(gradient)}
              className="w-8 h-8 rounded-full border-2 border-white shadow cursor-pointer"
              style={{
                backgroundImage: gradient,
                backgroundSize: 'cover',
              }}
              title={name}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ColorPalette
