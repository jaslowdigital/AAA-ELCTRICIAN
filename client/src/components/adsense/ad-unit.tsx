import { useEffect, useRef } from 'react';

interface AdUnitProps {
  slot: string;
  format: 'rectangle' | 'leaderboard' | 'banner' | 'responsive';
  className?: string;
}

export default function AdUnit({ slot, format, className = '' }: AdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Initialize AdSense if available
      if (window.adsbygoogle && adRef.current) {
        (window.adsbygoogle as any[]).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  const getAdStyle = () => {
    switch (format) {
      case 'leaderboard':
        return { display: 'block', width: '728px', height: '90px' };
      case 'rectangle':
        return { display: 'block', width: '300px', height: '250px' };
      case 'banner':
        return { display: 'block', width: '320px', height: '50px' };
      case 'responsive':
        return { display: 'block' };
      default:
        return { display: 'block' };
    }
  };

  return (
    <div className={`bg-gray-100 border border-gray-200 rounded-lg p-4 text-center ${className}`}>
      <div ref={adRef}>
        <ins
          className="adsbygoogle"
          style={getAdStyle()}
          data-ad-client="ca-pub-6582191414113662"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={format === 'responsive' ? 'true' : undefined}
        />
      </div>
    </div>
  );
}

// Extend window object for TypeScript
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}
