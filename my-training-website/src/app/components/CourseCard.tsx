import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardMedia, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Image from 'next/image';
import {InfoSpan,IconTag, Heading3,Rating } from '../../../components/typography/index';

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
  duration=duration+' hour'

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '470px',
        height: '320px',
        maxWidth: 600,
        borderRadius: 0, 
        boxShadow: 0,
        backgroundColor: '#fff',
      }}
    >
      {/* Course Image*/}
      <Box sx={{ position: 'relative', width: '100%', height: '100%',}}>
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
            <Box sx={{position: 'absolute',
                      display: 'flex',
                      gap: 1,
                      bottom:10,
                      px:4,
                      height:33
                        }}>
          <IconTag><img src='/heart_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>
          <IconTag><img src='/cart_info.png' onClick={() => alert('You need to login to do this action')}  /></IconTag>
          <IconTag><img src='/eye_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>
        
          </Box></Box>
      

      {/* Course Content */}
      <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 1.5, fontSize:'10'}}>
      
        <Heading3 sx={{padding:0}}>{subtitle}</Heading3>
        

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          <Typography  fontWeight="bold"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2, 
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%', 
              lineHeight: '1.2'
            }}>
          {title}
          </Typography>
          <Rating sx={{fontSize:12, width:60,height:25,marginBottom:2}}>{rating?.toFixed(1) || '4.9'}</Rating>
        </Box>

        <Typography fontSize={12} color="textSecondary" sx={{ fontWeight:600, mb: 1 }}>
          {description.length > 80 ? `${description.substring(0, 50)}...` : description}
        </Typography>
        <Typography fontSize={12} fontWeight={900} variant="body2"  color="textSecondary">
          <img src='/frame.png' style={{verticalAlign: 'text-bottom'}}></img> {sales} Sales
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
        <Typography 
            component="div" 
            fontSize="11px" 
            variant="body2" 
            fontWeight={600}
            color="textSecondary"
            sx={{ 
              padding: '5px 1px',
              display: 'flex',
              gap: '5px',
              alignItems: 'center'
            }}
          >
          <Box component="img" src="/clock.png" height={20}  />
          <Box width={40}>{duration.length > 4 ? `${duration.substring(0,4)}...` : duration}</Box>
          
          
          <Box component="img" src="/lesson.png" height={20} sx={{ verticalAlign: 'text-bottom' }} />
          <Box sx={{ width: 65 }}>{lessons} Lessons</Box>
          
          <Box component="img" src="/chart.png" height={20} sx={{ verticalAlign: 'text-bottom' }} />
          <Box sx={{ width: 60 }}>Progress</Box>
        </Typography>
          

        <Button
          variant='outlined'
          fullWidth
          sx={{fontSize:12,fontWeight:700, textTransform: 'none',backgroundColor: 'transparent',borderColor:'#23A6F0',color:'#23A6F0',width:130,minHeight:40,borderRadius: 10, marginBottom: -1}}
          onClick={handleLearnMore}
        >
          Learn More <img src='/arrow.png' style={{paddingLeft:10}}></img>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
