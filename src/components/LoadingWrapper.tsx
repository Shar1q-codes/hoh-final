'use client'

import { AnimatePresence } from 'framer-motion'
import LoadingScreen from './LoadingScreen'
import { useLoadingState } from '@/hooks/useLoadingState'

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const isLoading = useLoadingState()

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div key="content">
          {children}
        </div>
      )}
    </AnimatePresence>
  )
} 