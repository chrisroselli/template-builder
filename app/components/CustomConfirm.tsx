'use client'

import {useState} from 'react'
import {useConfirm} from '../hooks/useConfirm'

export default function CustomConfirmExample() {
  const [confirm, confirmDialog] = useConfirm()
  const [result, setResult] = useState<string>('')

  const handleClick = async () => {
    const isConfirmed = await confirm('Are you sure you want to proceed?')
    setResult(isConfirmed ? 'User confirmed the action.' : 'User cancelled the action.')
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Custom Confirm Example</h1>
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Trigger Confirmation
      </button>
      {result && <p className="mt-4">{result}</p>}
      {confirmDialog}
    </div>
  )
}

