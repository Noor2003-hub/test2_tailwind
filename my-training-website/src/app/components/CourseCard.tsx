import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import {
  InfoSpan,
  IconTag,
  Heading3,
  Rating,
} from "../../../components/typography/index";
import zIndex from "@mui/material/styles/zIndex";

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
    if (image.startsWith("http")) return image;
    return `http://localhost:3000${image.startsWith("/") ? "" : "/"}${image}`;
  };

  const imageUrl = getImageUrl();
  const router = useRouter();
  const handleLearnMore = () => {
    router.push(`/courses/${id}`);
  };
  duration = duration + " hour";

  return (
    <div className="flex w-full justify-between bg-[#fff] text-[15px] text-[#252B42]">
      <div className="flex flex-row">
        <div className="relative h-[350px] w-50 max-w-full">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="max-w-full object-cover"
              unoptimized={true}
            />
          )}
          <div className="absolute bottom-0 z-10 flex w-full flex-col items-center justify-end gap-2 text-white">
            <div className="!mb-5 flex flex-row gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                <img
                  src="/heart_info.png"
                  className="w-5"
                  onClick={() => alert("You need to login to do this action")}
                />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                <img
                  className="w-5"
                  src="/cart_info.png"
                  onClick={() => alert("You need to login to do this action")}
                />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                <img
                  className="w-5"
                  src="/eye_info.png"
                  onClick={() => alert("You need to login to do this action")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-2/3 flex-col !gap-3 !p-6">
          <div className="flex w-9/10 flex-row justify-between">
            <Heading3>{subtitle}</Heading3>
            <Chip
              className="max-h-6.5 w-15 font-light"
              style={{
                backgroundColor: "#252B42",
                color: "white",
                fontSize: "12px",
              }}
              icon={<StarIcon style={{ width: 18, color: "#FFD700" }} />}
              label={rating?.toFixed(1) || "4.9"}
            />

            {/* <Rating sx={{ fontSize: 12, width: 60, height: 25 }}>
              {rating?.toFixed(1) || "4.9"}
            </Rating> */}
          </div>
          <h1
            style={{
              minHeight: "45px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
              lineHeight: "1.3",
            }}
          >
            {title}
          </h1>

          <p
            className="text-sm font-normal text-[#737373]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "90%",
              lineHeight: "1.3",
            }}
          >
            {description.length > 80
              ? `${description.substring(0, 50)}...`
              : description}
          </p>
          <div className="!mt-2 flex flex-row text-[13px] font-light text-[#737373]">
            <img src="/frame.png" className="!mr-2 h-4 w-4"></img>
            <p className="!mb-[2px] font-bold">{sales} Sales</p>
          </div>
          <Typography variant="body2" fontWeight="bold">
            {discountedPrice !== originalPrice ? (
              <>
                <span
                  style={{
                    marginRight: "6px",
                    textDecoration: "line-through",
                    color: "#B0BEC5",
                  }}
                >
                  ${originalPrice}
                </span>

                <span style={{ color: "#40BB15" }}>${discountedPrice}</span>
              </>
            ) : (
              `$${originalPrice}`
            )}
          </Typography>
          <div className="flex w-65 flex-row gap-2 text-[12px] font-bold text-[#737373]">
            <div className="flex flex-row gap-1">
              <Box component="img" src="/clock.png" height={18} />
              <Box width={40} className="!mt-0.5">
                {duration.length > 4
                  ? `${duration.substring(0, 4)}...`
                  : duration}
              </Box>
            </div>
            <div className="flex flex-row gap-1">
              <Box component="img" src="/lesson.png" height={18} />
              <Box className="!mt-0.5 !mr-2">{lessons} Lessons</Box>
            </div>
            <div className="flex flex-row gap-1">
              <Box component="img" src="/chart.png" height={18} />
              <Box className="!mt-0.5">Progress</Box>
            </div>
          </div>
          <div className="!mt-3 flex h-[44] w-[145] flex-row items-center justify-center rounded-4xl border border-[#23A6F0] text-[14px] font-black text-[#23A6F0]">
            <button onClick={handleLearnMore}>Learn More </button>
            <img src="/arrow.png" style={{ paddingLeft: 10 }}></img>
          </div>
        </div>
      </div>
    </div>
    // <Card
    //   sx={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     width: '470px',
    //     height: '320px',
    //     maxWidth: 600,
    //     borderRadius: 0,
    //     boxShadow: 0,
    //     backgroundColor: '#fff',
    //   }}
    // >
    //   {/* Course Image*/}
    //   <Box sx={{ position: 'relative', width: '100%', height: '100%',}}>
    //     {imageUrl && (
    //       <Image
    //         src={imageUrl}
    //         alt={title}
    //         fill
    //         style={{ objectFit: 'cover' }}
    //         unoptimized={true}
    //       />
    //     )}

    //     {/* Icons */}
    //         <Box sx={{position: 'absolute',
    //                   display: 'flex',
    //                   gap: 1,
    //                   bottom:10,
    //                   px:4,
    //                   height:33
    //                     }}>
    //       <IconTag><img src='/heart_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>
    //       <IconTag><img src='/cart_info.png' onClick={() => alert('You need to login to do this action')}  /></IconTag>
    //       <IconTag><img src='/eye_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>

    //       </Box></Box>

    //   {/* Course Content */}
    //   <CardContent sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 1.5, fontSize:'10'}}>

    //     <Heading3 sx={{padding:0}}>{subtitle}</Heading3>

    //     <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

    //       <Typography  fontWeight="bold"
    //         sx={{
    //           display: '-webkit-box',
    //           WebkitLineClamp: 2,
    //           WebkitBoxOrient: 'vertical',
    //           overflow: 'hidden',
    //           textOverflow: 'ellipsis',
    //           maxWidth: '100%',
    //           lineHeight: '1.2'
    //         }}>
    //       {title}
    //       </Typography>
    //       <Rating sx={{fontSize:12, width:60,height:25,marginBottom:2}}>{rating?.toFixed(1) || '4.9'}</Rating>
    //     </Box>

    //     <Typography fontSize={12} color="textSecondary" sx={{ fontWeight:600, mb: 1 }}>
    //       {description.length > 80 ? `${description.substring(0, 50)}...` : description}
    //     </Typography>
    //     <Typography fontSize={12} fontWeight={900} variant="body2"  color="textSecondary">
    //       <img src='/frame.png' style={{verticalAlign: 'text-bottom'}}></img> {sales} Sales
    //     </Typography>

    //     <Typography variant="body2" fontWeight="bold">
    //       {discountedPrice !== originalPrice ? (
    //         <>
    //           <span style={{ textDecoration: 'line-through', color: '#B0BEC5' }}>${originalPrice}</span>{' '}
    //           <span style={{ color: '#4CAF50' }}>${discountedPrice}</span>
    //         </>
    //       ) : (
    //         `$${originalPrice}`
    //       )}
    //     </Typography>
    //     <Typography
    //         component="div"
    //         fontSize="11px"
    //         variant="body2"
    //         fontWeight={600}
    //         color="textSecondary"
    //         sx={{
    //           padding: '5px 1px',
    //           display: 'flex',
    //           gap: '5px',
    //           alignItems: 'center'
    //         }}
    //       >
    //       <Box component="img" src="/clock.png" height={20}  />
    //       <Box width={40}>{duration.length > 4 ? `${duration.substring(0,4)}...` : duration}</Box>

    //       <Box component="img" src="/lesson.png" height={20} sx={{ verticalAlign: 'text-bottom' }} />
    //       <Box sx={{ width: 65 }}>{lessons} Lessons</Box>

    //       <Box component="img" src="/chart.png" height={20} sx={{ verticalAlign: 'text-bottom' }} />
    //       <Box sx={{ width: 60 }}>Progress</Box>
    //     </Typography>

    //     <Button
    //       variant='outlined'
    //       fullWidth
    //       sx={{fontSize:12,fontWeight:700, textTransform: 'none',backgroundColor: 'transparent',borderColor:'#23A6F0',color:'#23A6F0',width:130,minHeight:40,borderRadius: 10, marginBottom: -1}}
    //       onClick={handleLearnMore}
    //     >
    //       Learn More <img src='/arrow.png' style={{paddingLeft:10}}></img>
    //     </Button>
    //   </CardContent>
    // </Card>
  );
};

export default CourseCard;
