import React from 'react';
import './Skeleton.css';

/**
 * Reusable Skeleton loader component that matches the premium dark industrial theme.
 */
export const Skeleton = ({ width, height, borderRadius, className = "", style = {} }) => {
  return (
    <div 
      className={`skeleton-base ${className}`} 
      style={{ 
        width: width || '100%', 
        height: height || '20px', 
        borderRadius: borderRadius || '4px',
        ...style 
      }} 
      aria-hidden="true"
    />
  );
};

export const CardSkeleton = () => {
  return (
    <div className="glass-card skeleton-card">
      <Skeleton width="48px" height="48px" borderRadius="8px" className="mb-4" />
      <Skeleton width="70%" height="24px" className="mb-2" />
      <Skeleton width="100%" height="16px" className="mb-2" />
      <Skeleton width="85%" height="16px" />
    </div>
  );
};

export const HeroSkeleton = () => {
  return (
    <div className="skeleton-hero">
      <Skeleton width="120px" height="24px" borderRadius="100px" className="mb-6 mx-auto" />
      <Skeleton width="80%" height="60px" className="mb-4 mx-auto" />
      <Skeleton width="60%" height="60px" className="mb-8 mx-auto" />
      <Skeleton width="70%" height="20px" className="mb-4 mx-auto" />
      <Skeleton width="50%" height="20px" className="mb-10 mx-auto" />
      <div className="flex justify-center gap-4">
        <Skeleton width="160px" height="48px" borderRadius="6px" />
        <Skeleton width="160px" height="48px" borderRadius="6px" />
      </div>
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="page-loader" aria-live="polite" aria-busy="true">
      <div className="loader-spinner"></div>
      <span className="sr-only">Loading content...</span>
    </div>
  );
};
