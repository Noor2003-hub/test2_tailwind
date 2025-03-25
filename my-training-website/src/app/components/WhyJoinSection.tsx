import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { CreditCard, Favorite, PhotoLibrary } from '@mui/icons-material';

const features = [
  {
    title: 'Lifetime access',
    desc: 'Gain unlimited access to all programming courses and resources.',
    icon: <CreditCard fontSize="large" sx={{ color: '#fff' }} />,
  },
  {
    title: 'Get in touch with Experts',
    desc: 'Our instructors are top professionals, bringing real-world experience to every lesson.',
    icon: <Favorite fontSize="large" sx={{ color: '#fff' }} />,
  },
  {
    title: 'Code Library',
    desc: 'Access a vast collection of coding examples, exercises, and best practices to sharpen your skills.',
    icon: <PhotoLibrary fontSize="large" sx={{ color: '#fff' }} />,
  },
];

const WhyJoinSection = () => {
  return (
    <Box sx={{ py: 8, px: 4, bgcolor: '#fff', maxWidth: "1000px", mx: "auto" }}>
      <Typography variant="h6" color="#23a6f0" fontWeight="bold">
        Our Goals
      </Typography>
      <Typography variant="h4" fontWeight="bold" sx={{color: '#252b42', mt: 1 }}>
        Why you should join?
      </Typography>
      <Typography sx={{ color: '#666', maxWidth: 600, mt: 1 }}>
      We are not just another coding platform—we are your gateway to success in tech. Learn, practice, and build with us.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ bgcolor: '#F5F9FF', borderRadius: 2, p: 3, boxShadow: 2, height:'250px'}}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>

                <Box
                  sx={{
                    width: 64, 
                    height: 64, 
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#007BFF", 
                    borderRadius: 2, 
                  }}
                >
                  {feature.icon}
                </Box>
              </Box>

              <CardContent sx={{ p: 0, textAlign: 'left' }}>
                <Typography variant="h6" fontWeight="bold">
                  {feature.title}
                </Typography>

                <Box sx={{ width: 30, height: 2, bgcolor: 'red', my: 1 }} />

                <Typography sx={{ mt: 1, color: '#666' }}>{feature.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyJoinSection;
