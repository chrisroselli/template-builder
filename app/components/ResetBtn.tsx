import { RotateCcw } from 'lucide-react'
import { useState } from 'react'

export default function ResetBtn({
  reset,
  disabled,
}: {
  reset: () => void
  disabled: boolean
}) {
  const [showCopyIcon, setShowCopyIcon] = useState<boolean>(false)
  return (
    <button
      disabled={disabled}
      onClick={() => {
        reset()
        setShowCopyIcon(true)
        setTimeout(() => setShowCopyIcon(false), 300)
      }}
      className="flex items-center px-3 py-1 bg-red-700 text-white rounded-md font-semibold text-sm disabled:opacity-50"
    >
      <RotateCcw
        className={`${showCopyIcon && 'animate-spin-reverse'} w-4 h-4`}
      />
    </button>
  )
}
