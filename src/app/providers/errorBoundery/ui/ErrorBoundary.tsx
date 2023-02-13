import React, { Suspense, type ErrorInfo, type ReactNode } from 'react'
import { PageError } from 'widgets/pageError'

interface IErrorBoundaryProps {
  children: ReactNode
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor (props: IErrorBoundaryProps) {
    super(props)

    this.state = { hasError: false }
  }

  static getDerivedStateFromError (): IErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render () {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      // You can render any custom fallback UI
      return <Suspense fallback=""><PageError /></Suspense>
    }

    return <>{children}</>
  }
}

export default ErrorBoundary
