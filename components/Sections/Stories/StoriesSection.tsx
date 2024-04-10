import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { IconBooks } from '@tabler/icons-react';
import { Paper, Container, Group, Badge, Text, Title, Button, useMantineTheme, rem } from '@mantine/core';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read Story
      </Button>
    </Paper>
  );
}

const data = [
    {
      image:
        'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      title: 'The Story of Ghana Internet Exchange Association: A Decade of Connectivity',
      category: 'tourism',
    },
  {
    image:
      'https://images.unsplash.com/photo-1664575601786-b00156752b61?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '5 Ways Companies Can Leverage Regional Internet Exchange Points',
    category: 'Business Solutions',
  },
  {
    image:
      'https://images.unsplash.com/photo-1539992190939-08f22d7ebaad?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: "Business leader's Guide to Choosing the Right Internet Exchange Point",
    category: 'Internet Infrastructure',
  },
  {
    image:
      'https://images.unsplash.com/photo-1637494501108-477c2ef9f17f?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '5 Reasons Why Your Business Needs a Private Interconnect Solution',
    category: 'Cyber Secuirity',
  },
  {
    image:
      'https://images.unsplash.com/photo-1631535928277-0aebe63054c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'A Business Leader’s Guide to Cybersecurity',
    category: 'Cyber Secuirity',
  },

];

export function StoriesCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="xl" style={{ padding: '10px 20px' }}>
          <IconBooks />
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        GIX Stories
      </Title>

    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
    </Container>
  );
}