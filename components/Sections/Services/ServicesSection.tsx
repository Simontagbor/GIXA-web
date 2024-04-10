import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    Button,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { IconTopologyStar3, IconShieldLock, IconDeviceDesktopCog } from '@tabler/icons-react';
  import classes from './ServicesSection.module.css'
  import Link from 'next/link';
  

  
  export function ServicesSection() {
    const theme = useMantineTheme();
    const mockdata = [
        {
          title:'Internet Peering',
          description:'Peering is a process where two Internet networks connect and exchange traffic. This allows for faster and more reliable connections between the two networks.',
          url:'#',
          icon: IconTopologyStar3,
        },
      
        {
          title:'Private Interconnect',
          description:'Private interconnects are dedicated connections between two networks. This allows for faster and more reliable connections between the two networks.',
          url:'#',
          icon: IconShieldLock,
        },
      
      
    ];
    const features = mockdata.map((feature) => (
      <Link href={feature.url} key={feature.title} style={{ textDecoration: 'none' }}>
        <Card shadow="md" radius="md" className={classes.card} padding="xl">
          <feature.icon
            style={{ width: rem(50), height: rem(50) }}
            stroke={2}
            color={theme.colors.blue[6]}
          />
          <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
            {feature.title}
          </Text>
          <Text fz="sm" c="dimmed" mt="sm">
            {feature.description}
          </Text>
        </Card>
      </Link>
    ));
      // Add another card
    features.push(
      <Card shadow="md" radius="md" className={classes.card} padding="xl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          Speak to us Today about your peering and private interconnect needs.
        </Text>
        <Button variant="outline" color="blue" size="lg" mt="md">
          Talk to Us
        </Button>
      </Card>
    );
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="xl" style={{ padding: '10px 20px' }}>
            <IconDeviceDesktopCog />
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Services
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Ghana Internet exchange platform provides two main services to its members
        </Text>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
              {features}
            </SimpleGrid>
        </div>
      </Container>
    );
  }