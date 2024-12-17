import type { PagePreviewProps } from '@/app/types/types'
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { Copy, Download } from 'lucide-react'

export default function PageView({ hero, services }: PagePreviewProps) {
  const [activeTab, setActiveTab] = useState<string>('html')
  const combinedCSS = [hero?.css, services?.css].filter(Boolean).join('\n\n')
  const combinedHTML = [hero?.html, services?.html].filter(Boolean).join('\n\n')
  // TODO: util out copy/download functions
  const copyBtn = () => {
    navigator.clipboard.writeText(
      activeTab === 'css' ? combinedCSS : combinedHTML,
    )
  }

  const downloadBtn = () => {
    const blob = new Blob([activeTab === 'css' ? combinedCSS : combinedHTML], {
      type: 'text/plain',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = activeTab === 'css' ? 'styles.css' : 'markup.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex flex-col">
      <div className="flex justify-between mb-2 border-b border-gray-200">
        <div className="flex justify-end space-x-4 mb-2">
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'html'
                ? 'border-b-2 border-primary-dark text-primary-dark'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('html')}
          >
            HTML
          </button>
          <button
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === 'css'
                ? 'border-b-2 border-primary-dark text-primary-dark'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('css')}
          >
            CSS
          </button>
        </div>
        <div className="flex justify-end space-x-4 mb-2">
          <button
            onClick={copyBtn}
            className="flex items-center px-3 py-1 bg-primary-dark text-white rounded-md hover:bg-primary"
          >
            <Copy className="w-4 h-4 mr-1" />
            Copy
          </button>
          <button
            onClick={downloadBtn}
            className="flex items-center px-3 py-1 bg-primary-dark text-white rounded-md hover:bg-primary"
          >
            <Download className="w-4 h-4 mr-1" />
            Download
          </button>
        </div>
      </div>
      <div className="text-sm">
        {activeTab === 'css' && (
          <SyntaxHighlighter
            className="rounded-xl"
            language="css"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedCSS}
          </SyntaxHighlighter>
        )}
        {activeTab === 'html' && (
          <SyntaxHighlighter
            className="rounded-xl"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedHTML}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  )
}
