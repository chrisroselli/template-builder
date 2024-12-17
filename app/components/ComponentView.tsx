import React, { useState } from 'react'
import { Copy, Download } from 'lucide-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CodeViewProps } from '@/app/types/types'

export default function CodeView({ html, css }: CodeViewProps) {
  const [activeTab, setActiveTab] = useState<string>('html')

  const copyBtn = () => {
    navigator.clipboard.writeText(activeTab === 'css' ? css : html)
  }
  const downloadBtn = () => {
    const blob = new Blob([activeTab === 'css' ? css : html], {
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
          >
            {css}
          </SyntaxHighlighter>
        )}
        {activeTab === 'html' && (
          <SyntaxHighlighter
            className="rounded-xl"
            language="htmlbars"
            style={atomOneDark}
          >
            {html}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  )
}
