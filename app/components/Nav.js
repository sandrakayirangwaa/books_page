import Link from "next/link";

export default function Nav() {
  return (
<nav style={{
      borderBottom: '1px solid #2d3142',
      backgroundColor: '#1f3e2ccc',
      backdropFilter: 'blur(8px)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'between'
      }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#618a73' }}>
          Boundless
        </div>
        <div style={{ display: 'flex', gap: '24px', fontSize: '14px', marginLeft: 'auto' }}>
          <Link href="/" style={{ fontWeight: "bold", color: '#94a3b8', textDecoration: 'none', display: "flex", gap: "1px", marginTop: "0.7rem"}}>Home</Link>
          <Link href="/about" style={{fontWeight: "bold", color: '#94a3b8', textDecoration: 'none', display: "flex", gap: "16px", marginTop: "0.7rem" }}>About</Link>
        </div>
      </div>
    </nav>
  );
}
