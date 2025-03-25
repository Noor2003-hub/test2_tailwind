import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { Box, Typography, Button, Chip, CardMedia } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Header from '../../src/app/components/Header'
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

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}><Header />
    <Box sx={{ padding: '40px', backgroundColor: '#EAF2FF', minHeight: '100vh' }}>
      <Box sx={{ maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, padding: 4 }}>
        {/* Course Image */}
        {course.image?.url && (
          <CardMedia
            component="img"
            image={course.image.url}
            alt={course.title}
            sx={{ width: '100%', height: '300px', borderRadius: 2, objectFit: 'cover', marginBottom: 3 }}
          />
        )}

        {/* Course Title and Category */}
        <Typography variant="h4" fontWeight="bold" sx={{ marginBottom: 2 }}>
          {course.title}
        </Typography>
        <Chip label={course.category} color="primary" sx={{ marginBottom: 2 }} />

        {/* Course Description */}
        <Typography variant="body1" sx={{ marginBottom: 3 }}>
          {course.description}
        </Typography>

        {/* Price Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
          {course.discountPrice ? (
            <>
              <Typography variant="h5" sx={{ textDecoration: 'line-through', color: '#B0BEC5', marginRight: 2 }}>
                ${course.price}
              </Typography>
              <Typography variant="h4" color="primary">
                ${course.discountPrice}
              </Typography>
            </>
          ) : (
            <Typography variant="h4" color="primary">
              ${course.price}
            </Typography>
          )}
        </Box>

        {/* Course Details */}
        <Box sx={{ display: 'flex', gap: 3, marginBottom: 3 }}>
          <Typography variant="body2" color="textSecondary">
            ⏳ {course.duration}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            📚 {course.lessons} Lessons
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ✅ {course.progress}% Progress
          </Typography>
        </Box>

        {/* Rating and Sales */}
        <Box sx={{ display: 'flex', gap: 3, marginBottom: 3 }}>
          <Chip
            icon={<StarIcon style={{ color: '#FFD700' }} />}
            label={course.rating?.toFixed(1) || '4.9'}
            sx={{ backgroundColor: '#FFF3CD', fontSize: '12px' }}
          />
          <Typography variant="body2" color="textSecondary">
            📈 {course.sales || 15} Sales
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
          <Button onClick={() => alert('You need to login to do this action')} variant="contained" sx={{ borderRadius: 10 }}>
            Enroll Now
          </Button>
          <Button onClick={() => alert('You need to login to do this action')} variant="outlined" sx={{ borderRadius: 10 }}>
            Add to Wishlist
          </Button>
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <FavoriteBorderIcon onClick={() => alert('You need to login to do this action')} color="action" />
          <ShareIcon onClick={() => alert('You need to login to do this action')} color="action" />
          <VisibilityIcon onClick={() => alert('You need to login to do this action')} color="action" />
        </Box>
      </Box>
    </Box></div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all course IDs from the API
  const res = await fetch('http://localhost:3001/api/courses');
  const data = await res.json();

  // Generate paths for all courses
  const paths = data.docs.map((course: any) => ({
    params: { id: course.id },
  }));

  return {
    paths,
    fallback: true,
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