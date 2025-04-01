import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { CreditCard, Favorite, PhotoLibrary } from "@mui/icons-material";

const features = [
  {
    title: "Lifetime access",
    desc: "Pay once and learn for ever ",
    icon: <img src="/creditcard.png" width={24} />,
  },
  {
    title: "Touch By Experts",
    desc: "Our experts recorded the sessions to their experience with you.",
    icon: <img src="/heart.png" width={24} />,
  },
  {
    title: "Code Library",
    desc: "Our videos are supported by many books that you can access for free.",
    icon: <img src="/album.png" width={24} />,
  },
];

const WhyJoinSection = () => {
  return (
    <div className="flex h-170 w-full justify-between text-[15px] text-[#252B42]">
      <div className="gap-4.5 !pt-15 !pb-50 !pl-37">
        <h6 className="text-[#23A6F0]">Practice Advice</h6>
        <h1 className="text-4xl leading-18 font-bold text-[#252B42]">
          Why you should join?
        </h1>
        <p className="w-160 font-light text-[#737373]">
          We are not the only online training platform but we aim to provide you
          best learning experience
        </p>
        <div className="!mt-24 flex h-[280px] flex-row gap-6">
          <div className="w-75 bg-[#E8F1FF] !p-10 shadow-lg">
            <div className="!mb-5 flex h-[66] w-[60] items-center justify-center rounded-lg bg-[#23A6F0] !p-4.5">
              <img src="/creditcard.png" />
            </div>
            <h4 className="text-[16px]">Lifetime access</h4>
            <Box sx={{ width: 50, height: 2, bgcolor: "#E74040", my: 2 }} />
            <p className="w-160 font-light text-[#737373]">
              Pay once and learn for ever
            </p>
          </div>
          <div className="w-75 bg-[#E8F1FF] !p-10 shadow-lg">
            <div className="!mb-5 flex h-[66] w-[60] items-center justify-center rounded-lg bg-[#23A6F0] !p-4.5">
              <img src="/heart.png" />
            </div>
            <h4 className="text-[16px]">Touch By Experts</h4>
            <Box sx={{ width: 50, height: 2, bgcolor: "#E74040", my: 2 }} />
            <p className="font-light text-[#737373]">
              Our experts recorded the sessions to their experience with you.
            </p>
          </div>
          <div className="w-75 bg-[#E8F1FF] !p-10 shadow-lg">
            <div className="!mb-5 flex h-[66] w-[60] items-center justify-center rounded-lg bg-[#23A6F0] !p-4.5">
              <img src="/album.png" />
            </div>
            <h4 className="text-[16px]">Books Liberary</h4>
            <Box sx={{ width: 50, height: 2, bgcolor: "#E74040", my: 2 }} />
            <p className="w-auto font-light text-[#737373]">
              Our videos are supported by many books that you can access for
              free
            </p>
          </div>
        </div>
      </div>
    </div>
    //old code:
    // <Box sx={{ py: 10, px: 10, bgcolor: '#fff', maxWidth: "1000px", mx: "auto"}}>
    //   <h3 style={{ color: '#23a6f0',width: 128,
    //                   height: 24,
    //                   fontWeight:1000,
    //                   fontSize:16, }}>
    //     Our Goals
    //   </h3>
    //   <Typography variant="h4" fontWeight={900} sx={{color: '#252b42', mt: 2 }}>
    //     Why you should join?
    //   </Typography>
    //   <Typography sx={{ fontSize:14, color: '#666', maxWidth: 600, mt: 2 }}>
    //   We are not just another coding platform—we are your gateway to success in tech. Learn, practice, and build with us.
    //   </Typography>

    //   <Grid container spacing={4} sx={{ mt: 7 }}>
    //     {features.map((feature, index) => (
    //       <Grid item key={index} xs={12} sm={6} md={4}>
    //         <Card sx={{ bgcolor: '#E8F1FF', borderRadius: 0, p: 4, height:'250px', paddingBottom:28 }}>
    //           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>

    //             <Box
    //               sx={{
    //                 width: 60,
    //                 height: 66,
    //                 display: "flex",
    //                 alignItems: "center",
    //                 justifyContent: "center",
    //                 backgroundColor: "#23A6F0",
    //                 borderRadius: 2,
    //               }}
    //             >
    //               {feature.icon}
    //             </Box>
    //           </Box>

    //           <CardContent sx={{ p: 0, textAlign: 'left' }}>
    //             <Typography variant="h3" fontWeight={900} fontSize={16} >
    //               {feature.title}
    //             </Typography>

    //             <Box sx={{ width: 50, height: 2, bgcolor: '#E74040', my: 2 }} />

    //             <Typography sx={{ fontSize:14, mt: 1, color: '#666' }}>{feature.desc}</Typography>
    //           </CardContent>
    //         </Card>
    //       </Grid>
    //     ))}
    //   </Grid>
    // </Box>
  );
};

export default WhyJoinSection;
