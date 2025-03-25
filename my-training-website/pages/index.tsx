import { NextPage, GetStaticProps } from 'next';
import { useRef } from 'react';
import CourseCard from '../src/app/components/CourseCard';
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, Typography } from "@mui/material";
import { CreditCard, Favorite, PhotoLibrary } from "@mui/icons-material";
import HeroSection from '../src/app/components/HeroSection';
import WhyJoinSection from '../src/app/components/WhyJoinSection';
import Header from '../src/app/components/Header';

const features = [
  { 
    title: "Lifetime access", 
    desc: "Pay once and learn forever", 
    icon: <CreditCard fontSize="large" color="primary" /> 
  },
  { 
    title: "Touch By Experts", 
    desc: "Our experts recorded the sessions to their experience with you.", 
    icon: <Favorite fontSize="large" color="primary" /> 
  },
  { 
    title: "Books Library", 
    desc: "Our videos are supported by many books that you can access for free", 
    icon: <PhotoLibrary fontSize="large" color="primary" /> 
  },
];

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice?: number;
  duration: string;
  lessons: number;
  progress: number;
  category: string;
  rating?: number;
  sales?: number;
  image?: {
    url: string;
  };
}

interface HomeProps {
  courses: Course[];
}

const Home: NextPage<HomeProps> = ({ courses }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 250;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <HeroSection />
      <WhyJoinSection />

      {/* Courses Section */}
      <div style={{ padding: '40px', backgroundColor: '#EAF2FF' }}>
        <div style={{ textAlign: 'left', marginBottom: '30px', marginLeft: '50px' }}>
          <Typography variant="h6" color="#23a6f0" fontWeight="bold">
            Get Started
          </Typography>
          <Typography variant="h4" fontWeight="bold" style={{ color: '#252b42' }}>
            Watch Our Courses
          </Typography>
          <Typography color="textSecondary">
          From Python and JavaScript to Web Development and AI, our hands-on courses will guide you through every step of your programming journey.
          </Typography>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Scroll Buttons */}
          <IconButton
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            onClick={() => scroll('left')}
          >
            <ChevronLeft />
          </IconButton>

          <div ref={scrollRef} style={{ display: 'flex', gap: '50px', overflowX: 'auto', padding: '0 40px', scrollbarWidth: 'none' }}>
            {courses.map((course) => (
              <div key={course.id} style={{ flexShrink: 0, width: '400px', height: '100%', position: 'relative' }}>
                {course.discountPrice && (
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '5px 10px',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    zIndex: 5
                  }}>
                    Sale
                  </div>
                )}
                <CourseCard
                  id={course.id}
                  title={course.title}
                  subtitle={course.category}
                  description={course.description}
                  originalPrice={course.price}
                  discountedPrice={course.discountPrice || course.price}
                  duration={course.duration}
                  lessons={course.lessons}
                  progress={course.progress}
                  rating={course.rating || 4.9}
                  sales={course.sales || 15}
                  image={course.image?.url}
                  isOnSale={!!course.discountPrice}
                />
              </div>
            ))}
          </div>

          <IconButton
            style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            onClick={() => scroll('right')}
          >
            <ChevronRight />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const res = await fetch('http://localhost:3001/api/courses');
    if (!res.ok) throw new Error(`Failed to fetch courses: ${res.statusText}`);
    const data = await res.json();
    return { props: { courses: data.docs } };
  } catch (error) {
    console.error('Error fetching courses:', error);
    return { props: { courses: [] } };
  }
};

export default Home;
