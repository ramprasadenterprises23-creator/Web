
import { PHONE_E164 } from '../lib/contact';
import {
  Component,
  type ComponentType,
  type ErrorInfo,
  type ReactNode,
} from 'react';

export interface ErrorFallbackProps {
  error: Error;
  resetError: () => void;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  FallbackComponent?: ComponentType<ErrorFallbackProps>;
  resetKey?: unknown;
}

interface ErrorBoundaryState {
  error: Error | null;
}

function toError(value: unknown): Error {
  if (value instanceof Error) {
    return value;
  }

  if (typeof value === 'string') {
    return new Error(value);
  }

  try {
    return new Error(JSON.stringify(value));
  } catch {
    return new Error(String(value));
  }
}

function DefaultFallback({
  error,
  resetError,
}: ErrorFallbackProps) {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-paper p-6">
      <div className="w-full max-w-lg text-center">
        <h1 className="font-display text-2xl font-bold text-ink">
          Something went wrong
        </h1>

        <p className="mt-2 text-sm text-steel">
          This page hit an unexpected problem. You can try again, or reach
          us directly and we will help you right away.
        </p>

        {import.meta.env.DEV && (
          <pre className="mt-4 overflow-x-auto rounded bg-panel border border-border p-3 text-left text-xs text-ink">
            {error.message || String(error)}
          </pre>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={resetError}
            className="rounded-sm bg-rust px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-rust-dark cursor-pointer"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-sm border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            Go to home
          </a>

          <a
            href={`tel:${PHONE_E164}`}
            className="rounded-sm border border-border px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            Call us
          </a>
        </div>
      </div>
    </main>
  );
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(
    error: unknown,
  ): ErrorBoundaryState {
    return {
      error: toError(error),
    };
  }

  componentDidCatch(
    error: unknown,
    info: ErrorInfo,
  ): void {
    console.error(
      'ErrorBoundary caught an error:',
      toError(error),
      info.componentStack,
    );
  }

  componentDidUpdate(
    previousProps: ErrorBoundaryProps,
  ): void {
    if (
      this.state.error !== null &&
      previousProps.resetKey !== this.props.resetKey
    ) {
      this.resetError();
    }
  }

  resetError = (): void => {
    this.setState({
      error: null,
    });
  };

  render(): ReactNode {
    const { error } = this.state;

    if (error === null) {
      return this.props.children;
    }

    const Fallback =
      this.props.FallbackComponent ?? DefaultFallback;

    return (
      <Fallback
        error={error}
        resetError={this.resetError}
      />
    );
  }
}

