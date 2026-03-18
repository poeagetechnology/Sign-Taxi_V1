import React, { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/AppRouter'
import Spinner from './components/common/Spinner'

function App() {
  return (
    <>
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-slate-50">
          <Spinner size="lg" />
        </div>
      }>
        <AppRouter />
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#ffffff',
            color: '#0f172a',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            fontSize: '14px',
            fontFamily: 'Inter, sans-serif',
          },
          success: {
            iconTheme: { primary: '#10b981', secondary: '#ffffff' },
          },
          error: {
            iconTheme: { primary: '#ef4444', secondary: '#ffffff' },
          },
        }}
      />
    </>
  )
}

export default App
