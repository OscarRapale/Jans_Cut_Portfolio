import { Box, Grid, Image } from "@chakra-ui/react";

// Picture array
const portfolioPictures = [
  { title: "picture 1", imageUrl: "portfolio-1.jpg" },
  { title: "picture 2", imageUrl: "portfolio-2.jpg" },
  { title: "picture 3", imageUrl: "portfolio-3.jpg" },
  { title: "picture 4", imageUrl: "portfolio-4.jpg" },
  { title: "picture 5", imageUrl: "portfolio-5.jpg" },
  { title: "picture 6", imageUrl: "portfolio-6.jpg" },
  { title: "picture 7", imageUrl: "portfolio-7.jpg" },
  { title: "picture 8", imageUrl: "portfolio-8.jpg" },
  { title: "picture 9", imageUrl: "portfolio-9.jpg" },
];

const GalleryGrid = () => {
  return (
    <Grid templateColumns={{ base: "1fr",  sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} gap={4}>
      {portfolioPictures.map((picture) => (
        <Box
          key={picture.title}
          p={4}
          ml={{ base: "2rem", md: "10rem" }}
          width="260px"
          height="250px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={picture.imageUrl}
            alt={picture.title}
            width="100%"
            height="100%"
            objectFit="cover"
            mb={4}
            borderRadius="md"
            transition="transform 0.3s"
            _hover={{
              transform: "scale(1.25)",
            }}
          />
        </Box>
      ))}
    </Grid>
  );
};

export default GalleryGrid;
