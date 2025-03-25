import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  // Define unique images for each profile
  const profileImages = [
    "/images/pic6.png",
    "/images/pic2.jpg",
    "/images/pic3.png",
    "/images/pic4.png",
    "/images/pic5.png",
  ];

  const profilePositions = [
    { top: '5%', left: '75%' },
    { top: '50%', left: '95%' },
    { top: '85%', left: '73%' },
    { top: '85%', left: '15%' },
    { top: '5%', left: '15%' },
  ];

  const redCirclePositions = [
    { top: '13%', left: '50%' },
    { top: '35%', left: '81%' },
    { top: '60%', left: '70%' },
    { top: '98%', left: '50%' },
    { top: '65%', left: '1%' },
  ];

  return (
    <div style={{ backgroundColor: '#EAF2FF', fontFamily: 'Arial, sans-serif', position: 'relative' }}>
      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '80px 10%', textAlign: 'left' }}>
        <div style={{ maxWidth: '500px' }}>
          <h3 style={{ color: '#23a6f0', fontWeight: 'bold' }}>Online Training</h3>
          <h1 style={{ color: '#252b42', fontSize: '42px', fontWeight: 'bold' }}>Master Coding with Expert-Led Training</h1>
          <p style={{ color: '#666' }}>Learn to code from scratch or enhance your skills with industry professionals. Whether you're a beginner or an experienced developer, our courses will help you build real-world projects and advance your career.</p>
        </div>

        {/* Orbiting circles */}
        <div style={{ position: 'relative', width: '400px', height: '400px' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <circle cx="50%" cy="50%" r="60" stroke="#FFCA28" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="100" stroke="#FFCA28" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="140" stroke="#FFCA28" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="200" stroke="#FFCA28" strokeWidth="1" fill="none" />
          </svg>

          {/* Center circle */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', backgroundColor: '#fff', borderRadius: '50%', overflow: 'hidden', border: '1px solid #FFCA28' }}>
            <img src="/images/pic7.png" alt="Center Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Surrounding circles */}
          {profileImages.map((src, index) => (
            <div key={index} style={{ position: 'absolute', ...profilePositions[index], width: '50px', height: '50px', backgroundColor: '#fff', borderRadius: '50%', overflow: 'hidden', border: '1px solid #FFCA28' }}>
              <img src={src} alt={`Profile ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}

          {/* Red Circles */}
          {redCirclePositions.map((style, index) => (
            <div key={`red-${index}`} style={{ position: 'absolute', ...style, backgroundColor: 'red', width: '15px', height: '15px', borderRadius: '50%', boxShadow: '0 0 8px 2px rgba(255, 0, 0, 0.73)' }} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
