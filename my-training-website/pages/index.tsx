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
import { Montserrat } from "next/font/google";

import { Heading3, Heading1, Paragraph } from '../components/typography/index';

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
    <div >
      
      <HeroSection />
      <WhyJoinSection />

      {/* Courses Section */}
      <div style={{ backgroundColor: '#EAF2FF' }}>
        <div style={{  marginLeft: 150,paddingTop:70,paddingBottom:60,textAlign: 'left',}}>
        
          <Heading3>Get Started</Heading3>
          <Heading1>Watch Our Courses</Heading1>
          <Paragraph>
          From Python and JavaScript to Web Development and AI, our hands-on courses will guide you through every step of your programming journey.
          </Paragraph>
          
        </div>

        <div style={{ position: 'relative' }}>
          {/* Scroll Buttons */}
          <div ref={scrollRef} style={{ display: 'flex', gap: '1px', overflowX: 'auto', padding: '0 70px', scrollbarWidth: 'none' }}>
            {courses.map((course) => (

              <div key={course.id} style={{ flexShrink: 0, width: '480px', height: '530px', position: 'relative' }}>
                {course.discountPrice && (
                  <div style={{
                    position: 'absolute',
                    width:45,
                    height:23,
                    top: '15px',
                    left: '15px',
                    textAlign: 'center',
                    backgroundColor: '#E74040',
                    color: 'white',
                    padding: '3px 1px',
                    fontSize:12,
                    borderRadius: '2px',
                    zIndex: 1,
                    boxShadow:'0px 2px 4px 0px rgba(0,0,0,0.1)'

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
