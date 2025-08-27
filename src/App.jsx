function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <h2 style={{ fontSize: 22, margin: 0, marginBottom: 10 }}>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, Arial, sans-serif', background: '#0b1220', minHeight: '100vh', color: '#e6ebf4' }}>
      <div style={{ maxWidth: 920, margin: '0 auto', padding: '36px 20px' }}>
        {/* Header */}
        <header style={{
          background: 'linear-gradient(135deg,#12213a,#101827)',
          border: '1px solid #1f2b45',
          borderRadius: 16,
          padding: 24,
          marginBottom: 28,
          boxShadow: '0 12px 24px rgba(0,0,0,.25)'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 32, letterSpacing: .2 }}>Phasakorn Charoensuk</h1>
              <p style={{ margin: '6px 0 0', opacity: .9 }}>Frontend Developer (Aspiring)</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="/Resume.pdf" style={ctaStyle} download>Download PDF</a>
              <a href="https://github.com/EarkAeng" target="_blank" rel="noreferrer" style={ghostBtn}>GitHub</a>
            </div>
          </div>
          <p style={{ marginTop: 16, lineHeight: 1.6, opacity: .95 }}>
            Currently a 4th-year Computer Science student at Kasetsart University.
            Interested in mobile/web frontend. Basic React Native, beginner Flutter.
            Looking for an opportunity to gain real work experience.
          </p>
        </header>

        {/* 2-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: 24 }}>
          {/* Left column */}
          <div>
            <Section title="Projects">
              <Project
                name="Transcript Checking App — Group Project"
                tech="React Native, Firebase"
                desc="An app to check completed vs remaining subjects."
              />
              <Project
                name="AllVit Website — Group Project"
                tech="Wix, Responsive Design"
                desc="Focused on clean layout, UX, and content structure."
                linkText="Open site"
                link="https://nontapattu.wixsite.com/all-vit"
              />
              <Project
                name="Karaoke Booking Website — Personal Project"
                tech="Canva Web"
                desc="Designed a user-friendly booking page with responsive layout."
                linkText="Open site"
                link="https://ma-ke-di.my.canva.site/"
              />
            </Section>

            <Section title="Education">
              <Item
                primary="Kasetsart University — B.Sc. Computer Science"
                secondary="2022 – 2026"
              />
            </Section>

            <Section title="Objective">
              <p style={{ margin: 0 }}>
                Seeking an internship or entry-level frontend role to build real-world skills and contribute to product UI.
              </p>
            </Section>
          </div>

          {/* Right column */}
          <aside>
            <Section title="Contact">
              <List>
                <li><strong>Phone:</strong> 096-931-2462</li>
                <li><strong>Email:</strong> <a href="mailto:phasakorn.c@ku.th">phasakorn.c@ku.th</a></li>
                <li><strong>Address:</strong> 49/7-8, Moo 10, Tha Talat, Sam Phran, Nakhon Pathom 73110</li>
              </List>
            </Section>

            <Section title="Skills">
              <TagCloud tags={[
                'React Native (Basics)',
                'Flutter (Basics)',
                'Teamwork',
                'Time Management',
                'Follow instructions accurately',
                'Effective Communication',
                'Java',
                'C'
              ]}/>
            </Section>

            <Section title="Languages">
              <List compact>
                <li>Thai (Fluent)</li>
                <li>English (Basics)</li>
              </List>
            </Section>

            <Section title="Reference">
              <Item
                primary="Kritsana Treechalong — Project Advisor, Kasetsart University"
                secondary={<>
                  <div>Phone: 082-202-2512</div>
                  <div>Email: <a href="mailto:kritsana.tre@ku.th">kritsana.tre@ku.th</a></div>
                </>}
              />
            </Section>
          </aside>
        </div>

        <footer style={{ opacity: .6, textAlign: 'center', marginTop: 28 }}>
          © {new Date().getFullYear()} Phasakorn Charoensuk
        </footer>
      </div>
    </div>
  );
}

/* --- Small UI helpers --- */
const ctaStyle = {
  background: '#3b82f6',
  color: '#fff',
  padding: '10px 14px',
  borderRadius: 10,
  textDecoration: 'none',
  fontWeight: 600,
  border: '1px solid #2f6bd1'
};
const ghostBtn = {
  background: 'transparent',
  color: '#cfe0ff',
  padding: '10px 14px',
  borderRadius: 10,
  textDecoration: 'none',
  fontWeight: 600,
  border: '1px solid #2a3a63'
};

function Project({ name, tech, desc, link, linkText }) {
  return (
    <div style={card}>
      <h3 style={{ margin: 0, fontSize: 18 }}>{name}</h3>
      <p style={{ margin: '6px 0 8px', opacity: .85 }}>{desc}</p>
      <p style={{ margin: 0, fontSize: 14, opacity: .75 }}><strong>Tech:</strong> {tech}</p>
      {link && (
        <p style={{ marginTop: 8 }}>
          <a href={link} target="_blank" rel="noreferrer" style={{ color: '#9ec5ff' }}>
            {linkText || 'View'}
          </a>
        </p>
      )}
    </div>
  );
}

function Item({ primary, secondary }) {
  return (
    <div style={card}>
      <div style={{ fontWeight: 600 }}>{primary}</div>
      {secondary && <div style={{ marginTop: 6, opacity: .8 }}>{secondary}</div>}
    </div>
  );
}

function List({ children, compact=false }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: compact ? 1.5 : 1.8 }}>
      {children}
    </ul>
  );
}

function TagCloud({ tags }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {tags.map((t) => (
        <span key={t} style={{
          border: '1px solid #24375f',
          background: '#0f1830',
          padding: '6px 10px',
          borderRadius: 999,
          fontSize: 13,
          opacity: .95
        }}>{t}</span>
      ))}
    </div>
  );
}

const card = {
  background: '#0f1830',
  border: '1px solid #1f2b45',
  borderRadius: 12,
  padding: 14,
  marginBottom: 12
};
