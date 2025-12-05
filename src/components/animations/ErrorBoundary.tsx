import React from 'react'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
  error?: Error | null
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // You can add logging here (Sentry, LogRocket, etc.)
    // console.error('Unhandled error caught by ErrorBoundary', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-white">
          <div className="max-w-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-sm text-gray-600">An unexpected error occurred. Please refresh the page or contact support.</p>
            <pre className="text-xs text-left mt-4 text-red-600 whitespace-pre-wrap">{String(this.state.error)}</pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
