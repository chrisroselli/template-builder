'use client'

import type React from 'react'
import { useEffect, useRef, useState } from 'react'

interface DynamicIframeProps {
  srcDoc: string
  title: string
  className?: string
}

const DynamicIframe: React.FC<DynamicIframeProps> = ({
  srcDoc,
  title,
  className = '',
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const updateHeight = () => {
      const iframe = iframeRef.current
      if (iframe && iframe.contentWindow) {
        const newHeight =
          iframe.contentWindow.document.documentElement.scrollHeight
        setHeight(newHeight)
      }
    }

    // Update height initially and whenever srcDoc changes
    updateHeight()

    // Add event listener for window resize
    window.addEventListener('resize', updateHeight)

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [srcDoc])

  return (
    <iframe
      ref={iframeRef}
      srcDoc={srcDoc}
      title={title}
      width="100%"
      height={height}
      className={`border-none ${className}`}
      style={{ overflow: 'hidden' }}
    />
  )
}

export default DynamicIframe
