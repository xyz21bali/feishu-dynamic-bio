import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // ===== Status Themes =====
  const statusThemes = [
    { text: 'Coding...', emoji: '💻' },
    { text: 'Deep Work Mode', emoji: '🧠' },
    { text: 'Meeting 🔥', emoji: '📅' },
    { text: 'Coffee Time', emoji: '☕' },
    { text: 'Bug Hunting', emoji: '🐛' },
    { text: 'Focus Mode ON', emoji: '🎯' },
    { text: 'Shipping Features', emoji: '🚀' },
    { text: 'Reading Docs', emoji: '📖' },
    { text: 'Debugging Life', emoji: '🔍' },
    { text: 'Almost Weekend', emoji: '🎉' },
  ];

  const randomTheme = statusThemes[Math.floor(Math.random() * statusThemes.length)];

  // ===== Dynamic Color berdasarkan jam =====
  const hour = new Date().getHours();
  let gradient = '';

  if (hour >= 5 && hour < 11) {
    gradient = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'; // Pagi
  } else if (hour >= 11 && hour < 15) {
    gradient = 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)'; // Siang
  } else if (hour >= 15 && hour < 19) {
    gradient = 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'; // Sore
  } else {
    gradient = 'linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%)'; // Malam
  }

  const time = new Date().toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const date = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: gradient,
          fontFamily: 'sans-serif',
          color: 'white',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.08) 0%, transparent 50%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 42,
              opacity: 0.9,
              marginBottom: 12,
              letterSpacing: 2,
            }}
          >
            FEISHU DYNAMIC BIO
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span>{randomTheme.emoji}</span>
            <span>{randomTheme.text}</span>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 36,
              opacity: 0.95,
              fontWeight: 500,
            }}
          >
            {time}
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 22,
              opacity: 0.75,
            }}
          >
            {date}
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}