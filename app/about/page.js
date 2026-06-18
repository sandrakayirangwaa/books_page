import Nav from '../components/Nav';
import styles from './aboutPage.module.css';

export default function About() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px' }}>
      <div style={{ marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '42px',
            fontWeight: '800',
            letterSpacing: '-0.04em',
            background: 'linear-gradient(to right, #ffffff, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: '0 0 12px 0'
          }}>
          About Boundless
          </h1>

          <p style={{ color: '#94a3b8', fontSize: '18px', lineHeight: '1.6', margin: 0 }}>
          We believe that within pages lie endless worlds. Boundless is a carefully curated visual index designed for readers who appreciate beautiful stories and exceptional cover art.
          </p>
      </div>

        <div className={styles.grid}>
          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Curated Index</h3>
            <p className={styles.cardDesc}>
            Every title in our data registry is hand-selected based on unique global literary measures and impact.
            </p>
        </div>

          <div className={styles.infoCard}>
            <h3 className={styles.cardTitle}>Modern Architecture</h3>
            <p className={styles.cardDesc}>
            Built using React, Next.js, and CSS modules to ensure rapid page navigation speeds and fluid, responsive interfaces.
            </p>
          </div>
        </div>
        </main>
  );
}