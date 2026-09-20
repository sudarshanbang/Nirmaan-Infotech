import { ImageResponse } from 'next/og';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          border: '32px solid #00BFA6',
          color: '#071A36',
          fontSize: 320,
          fontWeight: 900,
          fontFamily: 'sans-serif',
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
