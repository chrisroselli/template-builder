import React, { useState } from 'react'
import CopyBtn from '@/app/components/CopyBtn'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { CodeViewProps } from '@/app/types/types'

export default function CodeView({ html, css, js }: CodeViewProps) {
  const [activeTab, setActiveTab] = useState<string>('html')

  const copyBtn = () => {
    navigator.clipboard.writeText(
      activeTab === 'css' ? css : activeTab === 'js' ? js : html,
    )
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
          {js && (
            <button
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'js'
                  ? 'border-b-2 border-primary-dark text-primary-dark'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('js')}
            >
              JS
            </button>
          )}
        </div>
        <div className="flex justify-end space-x-4 mb-2">
          <CopyBtn
            copyBtn={copyBtn}
            tabs={
              activeTab === 'css' ? 'CSS' : activeTab === 'js' ? 'JS' : 'HTML'
            }
          />
        </div>
      </div>
      <div className="text-sm">
        {activeTab === 'css' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="css"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {css}
          </SyntaxHighlighter>
        )}
        {activeTab === 'html' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {html}
          </SyntaxHighlighter>
        )}
        {activeTab === 'js' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="javascript"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {js}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  )
}
