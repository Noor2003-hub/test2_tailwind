import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { CreditCard, Favorite, PhotoLibrary } from '@mui/icons-material';

const features = [
  {
    title: 'Lifetime access',
    desc: 'Pay once and learn for ever ',
    icon: <img src='/creditcard.png' width={24}/>,
  },
  {
    title: 'Touch By Experts',
    desc: 'Our experts recorded the sessions to their experience with you.',
    icon: <img src='/heart.png' width={24} />,
  },
  {
    title: 'Code Library',
    desc: 'Our videos are supported by many books that you can access for free.',
    icon: <img src='/album.png' width={24} />,
  },
];

const WhyJoinSection = () => {
  return (
    <Box sx={{ py: 10, px: 10, bgcolor: '#fff', maxWidth: "1000px", mx: "auto"}}>
      <h3 style={{ color: '#23a6f0',width: 128,
                      height: 24,
                      fontWeight:1000,
                      fontSize:16, }}>
        Our Goals
      </h3>
      <Typography variant="h4" fontWeight={900} sx={{color: '#252b42', mt: 2 }}>
        Why you should join?
      </Typography>
      <Typography sx={{ fontSize:14, color: '#666', maxWidth: 600, mt: 2 }}>
      We are not just another coding platform—we are your gateway to success in tech. Learn, practice, and build with us.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 7 }}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: '#E8F1FF', borderRadius: 0, p: 4, height:'250px', paddingBottom:28 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>

                <Box
                  sx={{
                    width: 60, 
                    height: 66, 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#23A6F0", 
                    borderRadius: 2, 
                  }}
                >
                  {feature.icon}
                </Box>
              </Box>

              <CardContent sx={{ p: 0, textAlign: 'left' }}>
                <Typography variant="h3" fontWeight={900} fontSize={16} >
                  {feature.title}
                </Typography>

                <Box sx={{ width: 50, height: 2, bgcolor: '#E74040', my: 2 }} />

                <Typography sx={{ fontSize:14, mt: 1, color: '#666' }}>{feature.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyJoinSection;
