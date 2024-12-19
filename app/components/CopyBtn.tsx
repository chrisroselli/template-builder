import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export interface CopyBtnProps {
  copyBtn: () => void
  tabs: string
}

export default function CopyBtn({ copyBtn, tabs }: CopyBtnProps) {
  const [showCopyIcon, setShowCopyIcon] = useState<boolean>(false)
  return (
    <button
      onClick={() => {
        setShowCopyIcon(true)
        setTimeout(() => setShowCopyIcon(false), 1500)
        {
          copyBtn()
        }
      }}
      className="flex items-center px-3 py-1 bg-primary-default_light text-white rounded-md hover:bg-primary font-semibold text-sm"
    >
      {showCopyIcon ? (
        <Check className="w-4 h-4 mr-2 text-white" />
      ) : (
        <Copy className="w-4 h-4 mr-2" />
      )}
      {tabs}
    </button>
  )
}
