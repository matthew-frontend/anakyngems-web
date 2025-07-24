"use client";
import React from 'react';

export default function ErrorBoundary({ children, fallback, error }) {
  if (error) {
    return (
      <div className="error-boundary">
        <div className="container">
          <div className="text-center py-5">
            <h3 className="h4 mb-3">Something went wrong</h3>
            <p className="text-muted mb-4">
              We're having trouble loading this content. Please try refreshing the page.
            </p>
            {fallback && fallback}
            <button 
              onClick={() => window.location.reload()} 
              className="tf-btn btn-outline"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  return children;
}