import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardMedia, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';

interface CourseCardProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  duration: string;
  lessons: number;
  progress: number;
  rating: number;
  sales: number;
  image?: string;
  isOnSale: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  subtitle,
  description,
  originalPrice,
  discountedPrice,
  duration,
  lessons,
  progress,
  rating,
  sales,
  image,
  isOnSale,
}) => {
  const getImageUrl = () => {
    if (!image) return null;
    if (image.startsWith('http')) return image;
    return `http://localhost:3000${image.startsWith('/') ? '' : '/'}${image}`;
  };

  const imageUrl = getImageUrl();
  const router = useRouter();
  const handleLearnMore = () => {
    router.push(`/courses/${id}`);
  };

  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: 600,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff',
      }}
    >
      {/* Course Image*/}
      <Box sx={{ position: 'relative', width: '100%', height: 180, overflow: 'hidden' }}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            unoptimized={true}
          />
        )}

        {/* Icons */}
        <Box sx={{
          position: 'absolute',
          top: 5, 
          right: 5, 
          display: 'flex',
          gap: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '5px 8px',
          borderRadius: '20px',
        }}>
          <FavoriteBorderIcon onClick={() => alert('You need to login to do this action')} fontSize="small" color="action" />
          <ShareIcon onClick={() => alert('You need to login to do this action')} fontSize="small" color="action" />
          <VisibilityIcon onClick={() => alert('You need to login to do this action')} fontSize="small" color="action" />
        </Box>
      </Box>

      {/* Course Content */}
      <CardContent sx={{ padding: 2 }}>
        {isOnSale && (
          <Chip
            label="Sale"
            color="error"
            sx={{ position: 'absolute', top: 10, left: 10, fontSize: '12px' }}
          />
        )}

        <Typography variant="subtitle2" color="primary" fontWeight="bold">
          {subtitle}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '15px' }} fontWeight="bold">
            {title}
          </Typography>
          <Chip
            icon={<StarIcon style={{ color: '#FFD700' }} />}
            label={rating.toFixed(1)}
            sx={{ backgroundColor: '#FFF3CD', fontSize: '12px' }}
          />
        </Box>

        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
          {description.length > 80 ? `${description.substring(0, 80)}...` : description}
        </Typography>

        <Typography variant="body2" fontWeight="bold">
          {discountedPrice !== originalPrice ? (
            <>
              <span style={{ textDecoration: 'line-through', color: '#B0BEC5' }}>${originalPrice}</span>{' '}
              <span style={{ color: '#4CAF50' }}>${discountedPrice}</span>
            </>
          ) : (
            `$${originalPrice}`
          )}
        </Typography>

        <Typography variant="body2" color="textSecondary">
          ⏳ {duration} • 📚 {lessons} Lessons • ✅ {progress}% Progress
        </Typography>

        <Typography variant="body2" color="textSecondary">
          📈 {sales} Sales
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ borderRadius: 10, marginTop: 1 }}
          onClick={handleLearnMore}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
