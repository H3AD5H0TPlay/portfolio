import { useParams, Navigate } from 'react-router-dom';

export default function CVViewer() {
  const { lang } = useParams();
  
  // Verify valid language, fallback to English
  if (!lang || !['en', 'hu', 'de', 'jp', 'kr'].includes(lang)) {
    return <Navigate to="/en/cv" replace />;
  }

  // File path to the localized CV in the public folder
  const cvPath = `/portfolio/cv_${lang}.pdf`;

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#333' }}>
      <iframe 
        src={cvPath} 
        style={{ width: '100%', height: '100%', border: 'none' }}
        title={`CV - ${lang.toUpperCase()}`}
      />
    </div>
  );
}
