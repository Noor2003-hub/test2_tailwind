import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Box,CardContent, Typography, Button, Chip, CardMedia } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {InfoSpan,IconTag, Heading3,Rating } from '../../components/typography/index';

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

interface CourseDetailsProps {
  course: Course;
}

const CourseDetails: NextPage<CourseDetailsProps> = ({ course }) => {
  const router = useRouter();

  if (router.isFallback) { //when pages are generating (not yet)
    return <div>Loading...</div>; //Static Site Generation, 
  }

  return (
    <div style={{display:'flex', justifyContent: 'center',alignItems: 'center', backgroundColor: '#EAF2FF' }}>
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: 750,
        padding:5,
        borderRadius: 0, 
        boxShadow: 0,
        
      }}>
      <Box sx={{ display: 'flex',
        flexDirection: 'row', width: '100%',height:'100%', margin: '0 auto', backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, padding: 4 }}>
        
        <Box sx={{position: 'absolute',justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                gap: 5,
                marginTop:67,
                px:'5%',
                height:2
                  }}>
                  <IconTag sx={{height:40}}><img style={{width:30}}  src='/heart_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>
                  <IconTag  sx={{height:40}}><img style={{width:30}} src='/cart_info.png' onClick={() => alert('You need to login to do this action')}  /></IconTag>
                  <IconTag  sx={{height:40}}><img style={{width:30}} src='/eye_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>
                
                  </Box>
        {/* Course Image */}
        {course.image?.url && (
          <CardMedia
            component="img"
            image={course.image.url}
            alt={course.title}
            sx={{ width:400,height:600,borderRadius: 2, objectFit: 'cover', marginBottom: 3 }}
          />
          
        )}
        

        {/* Course Title and Category */}
        <CardContent sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 1, fontSize:'10'}}>
        <Heading3 sx={{padding:0}}>{course.category}</Heading3>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <Typography  variant="h4" fontWeight="bold" sx={{ marginTop: 1 }}>
          {course.title}
        </Typography>
        <Rating >{course.rating?.toFixed(1) || '4.9'}</Rating>
        </Box>

        {/* Course Description */}
        <Typography fontSize={16} color="textSecondary" sx={{ fontWeight:600, mb: 1, marginBottom: 3 }}>
          {course.description}
        </Typography>
        <Typography fontSize={18} fontWeight={700} variant="body2"  color="textSecondary">
                  <img src='/frame.png' style={{width: 25,verticalAlign: 'text-bottom'}}></img> {course.sales} Sales
                </Typography>
        {/* Price Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          {course.discountPrice ? (
            <>
              <Typography variant="h5" sx={{ textDecoration: 'line-through', color: '#B0BEC5', marginRight: 2 }}>
                ${course.price}
              </Typography>
              <Typography variant="h4" color="#40BB15">
                ${course.discountPrice}
              </Typography>
            </>
          ) : (
            <Typography variant="h4">
              ${course.price}
            </Typography>
          )}
        </Box>

        {/* Course Details */}
        <Box sx={{ display: 'flex', gap: 5, marginBottom: 3, '& .MuiTypography-body2': {fontSize: '16px'} }}>
          <div style={{display:'flex'}}>
          <Box component="img" src="/clock.png"  height={20} />
            <Typography paddingLeft={1} variant="body2" color="textSecondary">{course.duration} Hour</Typography>
          </div>
          <div style={{display:'flex'}}>
          <Box component="img" src="/lesson.png" height={20} />
            <Typography paddingLeft={1}  variant="body2" color="textSecondary">
             {course.lessons} Lessons
          </Typography></div>
          <div style={{display:'flex'}}>
            <Box component="img" src="/chart.png"  height={20} />
            <Typography paddingLeft={1} variant="body2" color="textSecondary">
          
            {course.progress}% Progress
          </Typography></div>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, marginTop: -1 }}>
          <Button onClick={() => alert('You need to login to do this action')} variant="contained" sx={{ borderRadius: 10 }}>
            Enroll Now
          </Button>
          <Button onClick={() => alert('You need to login to do this action')} variant="outlined" sx={{ borderRadius: 10 }}>
            Add to Wishlist
          </Button>
        </Box>

        
      </CardContent></Box>
      
    </Box></div>
    
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all course IDs from the API
  const res = await fetch('http://localhost:3001/api/courses');
  const data = await res.json();

  // pre-generate paths for all courses when building ()
  const paths = data.docs.map((course: any) => ({
    params: { id: course.id },
  }));

  return {
    paths,
    fallback: true, //handels non-generated course paths
  };
};

export const getStaticProps: GetStaticProps<CourseDetailsProps> = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:3001/api/courses/${params?.id}`);
    if (!res.ok) throw new Error(`Failed to fetch course: ${res.statusText}`);
    const data = await res.json();

    const course: Course = {
      id: data.id || '',
      title: data.title || 'No Title',
      description: data.description || 'No Description',
      price: data.price || 0,
      discountPrice: data.discountPrice || undefined,
      duration: data.duration || '0h',
      lessons: data.lessons || 0,
      progress: data.progress || 0,
      category: data.category || 'Uncategorized',
      rating: data.rating || 4.9,
      sales: data.sales || 15,
      image: data.image || undefined,
    };

    return {
      props: {
        course,
      },
    };
  } catch (error) {
    console.error('Error fetching course details:', error);
    return {
      notFound: true, //return a 404 page if the course is not found
    };
  }
};

export default CourseDetails;