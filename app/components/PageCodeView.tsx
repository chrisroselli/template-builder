import type { PagePreviewProps } from '@/app/types/types'
import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import CopyBtn from '@/app/components/CopyBtn'

export default function PageCodeView({
  hero,
  services,
  whyChoose,
  reviews,
  beforeAfter,
  textBlock,
  videoBlock,
}: PagePreviewProps) {
  const [activeTab, setActiveTab] = useState<string>('html')
  const combinedCSS = [
    hero?.css,
    services?.css,
    whyChoose?.css,
    reviews?.css,
    beforeAfter?.css,
    textBlock?.css,
    videoBlock?.css,
  ]
    .filter(Boolean)
    .join('\n\n')
  const combinedHTML = [
    hero?.html,
    services?.html,
    whyChoose?.html,
    reviews?.html,
    beforeAfter?.html,
    textBlock?.html,
    videoBlock?.html,
  ]
    .filter(Boolean)
    .join('\n\n')
  const combinedJs = [
    hero?.js,
    services?.js,
    whyChoose?.js,
    reviews?.js,
    beforeAfter?.js,
    textBlock?.js,
    videoBlock?.js,
  ]
    .filter(Boolean)
    .join('\n\n')

  const copyBtn = () => {
    navigator.clipboard.writeText(
      activeTab === 'css'
        ? combinedCSS
        : activeTab === 'js'
          ? combinedJs
          : combinedHTML,
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
          {combinedJs && (
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
        {activeTab === 'html' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="htmlbars"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedHTML}
          </SyntaxHighlighter>
        )}
        {activeTab === 'css' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="css"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedCSS}
          </SyntaxHighlighter>
        )}
        {activeTab === 'js' && (
          <SyntaxHighlighter
            className="text-sm h-[600px]"
            language="javascript"
            style={atomOneDark}
            customStyle={{ padding: '1rem' }}
          >
            {combinedJs}
          </SyntaxHighlighter>
        )}
      </div>
    </div>
  )
}
