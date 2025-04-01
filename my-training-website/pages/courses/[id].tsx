import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  Box,
  CardContent,
  Typography,
  Button,
  Chip,
  CardMedia,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  InfoSpan,
  IconTag,
  Heading3,
  Rating,
} from "../../components/typography/index";

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
    <div className="flex h-screen w-screen flex-col items-center justify-between bg-[#EAF2FF] text-[22px] text-[#252B42]">
      <div className="!m-10 flex h-8/10 w-8/10 flex-row bg-[#ffff]">
        <div className="relative h-full w-1/4 max-w-full">
          {course.image && (
            <img
              src={course.image.url}
              alt={course.title}
              className="min-h-full min-w-full object-cover"
            />
          )}
          <div className="absolute bottom-0 z-10 flex w-full flex-col items-center justify-end !gap-2 text-white">
            <div className="!mb-5 flex flex-row gap-4">
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gray-50">
                <img
                  src="/heart_info.png"
                  className="w-7"
                  onClick={() => alert("You need to login to do this action")}
                />
              </div>
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gray-50">
                <img
                  className="w-7"
                  src="/cart_info.png"
                  onClick={() => alert("You need to login to do this action")}
                />
              </div>
              <div className="flex h-13 w-13 items-center justify-center rounded-full bg-gray-50">
                <img
                  className="w-7"
                  src="/eye_info.png"
                  onClick={() => alert("You need to login to do this action")}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-2/3 flex-col !gap-5 !p-10 text-lg">
          <div className="flex min-w-full flex-row justify-between">
            <Heading3 sx={{ fontSize: "20px" }}>{course.category}</Heading3>
            <Chip
              className="max-h-10 w-20 font-light"
              style={{
                backgroundColor: "#252B42",
                color: "white",
                fontSize: "22px",
                marginRight: -100,
              }}
              icon={<StarIcon style={{ width: 18, color: "#FFD700" }} />}
              label={course.rating?.toFixed(1) || "4.9"}
            />
          </div>
          <h1 className="text-3xl">{course.title}</h1>

          <p className="font-normal text-[#737373]">{course.description}</p>
          <div className="!mt-2 flex flex-row text-[15px] font-light text-[#737373]">
            <img src="/frame.png" className="!mr-2 h-6 w-5 !pb-1"></img>
            <p className="!mb-[6px] font-bold">{course.sales} Sales</p>
          </div>
          <Typography variant="body2" fontSize="27px" fontWeight="bold">
            {course.discountPrice !== course.price ? (
              <>
                <span
                  style={{
                    marginRight: "6px",
                    textDecoration: "line-through",
                    color: "#B0BEC5",
                  }}
                >
                  ${course.price}
                </span>

                <span style={{ color: "#40BB15" }}>
                  ${course.discountPrice}
                </span>
              </>
            ) : (
              `$${course.price}`
            )}
          </Typography>
          <div className="flex w-full flex-row gap-15 text-[15px] font-bold text-[#737373]">
            <div className="flex flex-row gap-1">
              <Box component="img" src="/clock.png" height={25} />
              <Box width={40} className="!mt-0.5">
                {course.duration.length > 4
                  ? `${course.duration.substring(0, 4)}...`
                  : course.duration}
              </Box>
            </div>
            <div className="flex flex-row gap-1">
              <Box component="img" src="/lesson.png" height={25} />
              <Box className="!mt-0.5 !mr-2">{course.lessons} Lessons</Box>
            </div>
            <div className="flex flex-row gap-1">
              <Box component="img" src="/chart.png" height={25} />
              <Box className="!mt-0.5">Progress</Box>
            </div>
          </div>
          <div className="!mt-3 flex h-full w-full flex-row items-center justify-items-start font-black">
            <Box sx={{ display: "flex", gap: 2, marginTop: -1 }}>
              <Button
                onClick={() => alert("You need to login to do this action")}
                variant="contained"
                sx={{ borderRadius: 10, fontSize: 15 }}
              >
                Enroll Now
              </Button>
              <Button
                onClick={() => alert("You need to login to do this action")}
                variant="outlined"
                sx={{ borderRadius: 10, fontSize: 15 }}
              >
                Add to Wishlist
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
    // <div style={{display:'flex', justifyContent: 'center',alignItems: 'center', backgroundColor: '#EAF2FF' }}>
    // <Box sx={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     width: '90%',
    //     height: 750,
    //     padding:5,
    //     borderRadius: 0,
    //     boxShadow: 0,

    //   }}>
    //   <Box sx={{ display: 'flex',
    //     flexDirection: 'row', width: '100%',height:'100%', margin: '0 auto', backgroundColor: '#fff', borderRadius: 2, boxShadow: 3, padding: 4 }}>

    //     <Box sx={{position: 'absolute',justifyContent: 'center',
    //             alignItems: 'center',
    //             display: 'flex',
    //             gap: 5,
    //             marginTop:67,
    //             px:'5%',
    //             height:2
    //               }}>
    //               <IconTag sx={{height:40}}><img style={{width:30}}  src='/heart_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>
    //               <IconTag  sx={{height:40}}><img style={{width:30}} src='/cart_info.png' onClick={() => alert('You need to login to do this action')}  /></IconTag>
    //               <IconTag  sx={{height:40}}><img style={{width:30}} src='/eye_info.png' onClick={() => alert('You need to login to do this action')} /></IconTag>

    //               </Box>
    //     {/* Course Image */}
    //     {course.image?.url && (
    //       <CardMedia
    //         component="img"
    //         image={course.image.url}
    //         alt={course.title}
    //         sx={{ width:400,height:600,borderRadius: 2, objectFit: 'cover', marginBottom: 3 }}
    //       />

    //     )}

    //     {/* Course Title and Category */}
    //     <CardContent sx={{ padding: 3, display: 'flex', flexDirection: 'column', gap: 1, fontSize:'10'}}>
    //     <Heading3 sx={{padding:0}}>{course.category}</Heading3>

    //     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 2 }}>
    //     <Typography  variant="h4" fontWeight="bold" sx={{ marginTop: 1 }}>
    //       {course.title}
    //     </Typography>
    //     <Rating >{course.rating?.toFixed(1) || '4.9'}</Rating>
    //     </Box>

    //     {/* Course Description */}
    //     <Typography fontSize={16} color="textSecondary" sx={{ fontWeight:600, mb: 1, marginBottom: 3 }}>
    //       {course.description}
    //     </Typography>
    //     <Typography fontSize={18} fontWeight={700} variant="body2"  color="textSecondary">
    //               <img src='/frame.png' style={{width: 25,verticalAlign: 'text-bottom'}}></img> {course.sales} Sales
    //             </Typography>
    //     {/* Price Section */}
    //     <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
    //       {course.discountPrice ? (
    //         <>
    //           <Typography variant="h5" sx={{ textDecoration: 'line-through', color: '#B0BEC5', marginRight: 2 }}>
    //             ${course.price}
    //           </Typography>
    //           <Typography variant="h4" color="#40BB15">
    //             ${course.discountPrice}
    //           </Typography>
    //         </>
    //       ) : (
    //         <Typography variant="h4">
    //           ${course.price}
    //         </Typography>
    //       )}
    //     </Box>

    //     {/* Course Details */}
    //     <Box sx={{ display: 'flex', gap: 5, marginBottom: 3, '& .MuiTypography-body2': {fontSize: '16px'} }}>
    //       <div style={{display:'flex'}}>
    //       <Box component="img" src="/clock.png"  height={20} />
    //         <Typography paddingLeft={1} variant="body2" color="textSecondary">{course.duration} Hour</Typography>
    //       </div>
    //       <div style={{display:'flex'}}>
    //       <Box component="img" src="/lesson.png" height={20} />
    //         <Typography paddingLeft={1}  variant="body2" color="textSecondary">
    //          {course.lessons} Lessons
    //       </Typography></div>
    //       <div style={{display:'flex'}}>
    //         <Box component="img" src="/chart.png"  height={20} />
    //         <Typography paddingLeft={1} variant="body2" color="textSecondary">

    //         {course.progress}% Progress
    //       </Typography></div>
    //     </Box>

    //     {/* Action Buttons */}
    //     <Box sx={{ display: 'flex', gap: 2, marginTop: -1 }}>
    //       <Button onClick={() => alert('You need to login to do this action')} variant="contained" sx={{ borderRadius: 10 }}>
    //         Enroll Now
    //       </Button>
    //       <Button onClick={() => alert('You need to login to do this action')} variant="outlined" sx={{ borderRadius: 10 }}>
    //         Add to Wishlist
    //       </Button>
    //     </Box>

    //   </CardContent></Box>

    // </Box></div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all course IDs from the API
  const res = await fetch("http://localhost:3001/api/courses");
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

export const getStaticProps: GetStaticProps<CourseDetailsProps> = async ({
  params,
}) => {
  try {
    const res = await fetch(`http://localhost:3001/api/courses/${params?.id}`);
    if (!res.ok) throw new Error(`Failed to fetch course: ${res.statusText}`);
    const data = await res.json();

    const course: Course = {
      id: data.id || "",
      title: data.title || "No Title",
      description: data.description || "No Description",
      price: data.price || 0,
      discountPrice: data.discountPrice || undefined,
      duration: data.duration || "0h",
      lessons: data.lessons || 0,
      progress: data.progress || 0,
      category: data.category || "Uncategorized",
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
    console.error("Error fetching course details:", error);
    return {
      notFound: true, //return a 404 page if the course is not found
    };
  }
};

export default CourseDetails;
