import { useEffect, useRef } from 'react';

interface AdSenseDisplayProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSenseDisplay({ 
  adSlot, 
  adFormat = 'auto', 
  className = '',
  style = {} 
}: AdSenseDisplayProps) {
  useEffect(() => {
    try {
      // Only push ad if adsbygoogle is available
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-6582191414113662"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Pre-configured ad components for common placements
export function HeaderBannerAd({ className }: { className?: string }) {
  return (
    <AdSenseDisplay
      adSlot="1234567890" // Replace with actual ad slot ID
      adFormat="horizontal"
      className={className}
      style={{ minHeight: '90px' }}
    />
  );
}

export function SidebarAd({ className }: { className?: string }) {
  return (
    <AdSenseDisplay
      adSlot="2345678901" // Replace with actual ad slot ID
      adFormat="vertical"
      className={className}
      style={{ minHeight: '250px', minWidth: '300px' }}
    />
  );
}

export function InContentAd({ className }: { className?: string }) {
  return (
    <AdSenseDisplay
      adSlot="3456789012" // Replace with actual ad slot ID
      adFormat="rectangle"
      className={className}
      style={{ minHeight: '250px' }}
    />
  );
}

export function FooterBannerAd({ className }: { className?: string }) {
  return (
    <AdSenseDisplay
      adSlot="4567890123" // Replace with actual ad slot ID
      adFormat="horizontal"
      className={className}
      style={{ minHeight: '90px' }}
    />
  );
}