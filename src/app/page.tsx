"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [theme, setTheme] = useState({
    backgroundColor: 'white',
    color: 'black',
  });

  const toggleTheme = () => {
    if (theme.backgroundColor === 'white') {
      setTheme({
        backgroundColor: 'black',
        color: 'white',
      });
    } else {
      setTheme({
        backgroundColor: 'white',
        color: 'black',
      });
    }
  };

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, height: '100vh' }}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Персональный сайт на Next.js" />
      </Head>

      <header style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Hey yo, I'm Artur!</h1>
      </header>

      <main style={{ padding: '20px', textAlign: 'center' }}>
        <section>
          <h2>About me</h2>
          <p>I'm a 1st year student from Ukraine, that study in Poland.</p>
        </section>

        <section style={{ marginTop: '20px' }}>
          <h2>Interests:</h2>
          <ul>
            <li>Football and volleyball</li>
            <li>Programming on JavaScript</li>
            <li>Computer games</li>
            <li>Photo</li>
            <li>Hang out with friends</li>
            <li>Foreign languages</li>
          </ul>
        </section>

        <section style={{ marginTop: '20px' }}>
          <button 
            onClick={toggleTheme} 
            style={{
              padding: '10px 20px',
              backgroundColor: theme.color,
              color: theme.backgroundColor,
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}>
            Change theme
          </button>
        </section>
      </main>

      <footer style={{ padding: '10px', textAlign: 'center', marginTop: '20px' }}>
        <p>© 2024 Arthur. All rights reserved.</p>
      </footer>
    </div>
  );
}
