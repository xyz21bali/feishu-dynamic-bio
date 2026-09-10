export default function Home() {
  const timestamp = Date.now();

  return (
    <>
      <head>
        <title>Feishu Dynamic Bio</title>
        <meta property="og:title" content="✨ Dynamic Status" />
        <meta
          property="og:image"
          content={`https://YOUR-PROJECT-NAME.vercel.app/api/og?t=${timestamp}`}
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="400" />
        <meta property="og:description" content="Live status powered by Vercel OG" />
      </head>

      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          padding: 40,
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: 42, marginBottom: 16 }}>Feishu Dynamic Bio</h1>
        <p style={{ fontSize: 18, opacity: 0.8, maxWidth: 500, lineHeight: 1.6 }}>
          Halaman ini khusus untuk link preview di bio Feishu.
          <br />
          Gambar akan berubah secara dinamis setiap kali Feishu mengambil preview.
        </p>
      </main>
    </>
  );
}