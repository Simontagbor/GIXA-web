'use client'
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import {useDisclosure} from '@mantine/hooks';
  import {
    IconShieldLock,
    IconTopologyStar3,
    IconTopologyStarRing,
    IconSitemap,
    IconNetwork,
    IconSocial,
    IconMapPins,
    IconChevronDown,
  } from '@tabler/icons-react';
  import classes from './HeaderMegaMenu.module.css';
  import Thumbnail from '../Visualisation/ThumbNail';
  import Logo from '../CustomLogo/Logo';
  import { ThemeActionToggle } from '../Header/ThemeActionToggle';
  
  const platformdata = [
    {
      icon: IconTopologyStarRing,
      title: 'Connected Networks',
      description: 'GIX@ is a network of interconnected data centers and internet exchange points',
    },
    {
      icon: IconMapPins,
      title: 'Colocations',
      description: 'GIX@ has a wide range of colocation services to meet your Internet exchange needs',
    },
    {
      icon: IconSitemap,
      title: 'Partners',
      description: 'GIXA has operates within an ecosystem of reliable internet exchange partners to provide the best services',
    },
    {
      icon: IconSocial,
      title: 'Collaboration',
      description: 'Our Internet Exchange platform is built to support seamless collaboration between networks',
    },
    {
      icon: IconNetwork,
      title: 'Connect',
      description: 'GIX@ provides extensive technical support and docummentation on Where and How to connect to an Internet exchange point in the sub region and beyond.',
    }
   
  ];

  const servicesdata = [
    {
      icon: IconTopologyStar3,
      title: 'Internet Peering',
      description: 'The GIXA Peering Service enables you to interconnect with a multitude of networks directly. You will be able to exchange internet traffic using only one connection and cross connect'
    },

    {
      icon: IconShieldLock,
      title: 'Private Interconnect',
      description: 'Our Private Interconnect Service allows you to securely connect to other networks in a private environment. This service is ideal for networks that require a secure and private connection to other networks.'
    }
  ];

  const technicaldata = [
  {
    icon: IconTopologyStar3,
    title: 'Overview of GIXA Topology',
    description: 'The GIXA Topology provides an overview of the GIXA network and the various points of interconnection between networks.'
  },
  {
    icon: IconTopologyStar3,
    title: 'Interface and Cabling Specifications',
    description: 'The GIXA Interface and Cabling Specifications provide detailed information on the types of interfaces and cables that are used to connect to the GIXA network.'
  },
  {
    icon: IconTopologyStar3,
    title: 'Quality Statement',
    description: 'The GIXA Quality Statement outlines the quality standards that GIXA adheres to in order to provide the best possible service to its customers.'
  },
  {
    icon: IconTopologyStar3,
    title: 'Documentation',
    description: 'The GIXA Documentation provides detailed information on the various services and products that GIXA offers, as well as the technical specifications of the GIXA network.'
  },
  {
    icon: IconTopologyStar3,
    title: 'Statistics',
    description: 'The GIXA Statistics provide detailed information on the performance of the GIXA network, including traffic volumes, latency, and other key performance indicators.'
  }
];

const aboutdata = [
  {
    icon: IconTopologyStar3,
    title: 'Upcoming Events',
    description: 'The GIXA Upcoming Events provide information on the various events that GIXA is hosting, including conferences, workshops, and other networking events.'
  },
  {
    icon: IconTopologyStar3,
    title: 'Latest News',
    description: 'The GIXA Latest News provides updates on the latest developments at GIXA, including new services, partnerships, and other news.'
  },
  {
    icon: IconTopologyStar3,
    title: 'About GIXA',
    description: 'The GIXA About GIXA provides an overview of GIXA, including its history, mission, and values.'
  },
  {
    icon: IconTopologyStar3,
    title: 'Meet The Team',
    description: 'The GIXA Meet The Team provides information on the various team members at GIXA, including their roles, responsibilities, and contact information.'
  },
  {
    icon: IconTopologyStar3,
    title: 'Reports and Resources',
    description: 'The GIXA Reports and Resources provide access to various reports, whitepapers, and other resources that GIXA has published.'
  }
];
  
  export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const platformlinks = platformdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
    const technicalinks = technicaldata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
    const serviceslinks = servicesdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
    const aboutlinks = aboutdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" c="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
    return (
      <Box pb={0}>
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <Logo />
            <Group h="100%" gap={0} visibleFrom="sm">
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Platform
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Platform</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {platformlinks}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Register to enjoy the benefits of the GIX@ platform
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Services
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {serviceslinks}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Technical
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Technical</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {technicalinks}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        About
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>About</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>
  
                  <Divider my="sm" />
  
                  <SimpleGrid cols={2} spacing={0}>
                    {aboutlinks}
                  </SimpleGrid>
  
                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            </Group>

            <Thumbnail />
  
            <Group visibleFrom="sm">
              <Button>Get Started</Button>
            </Group>
            <Group visibleFrom="sm">
              <ThemeActionToggle />
            </Group>
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
            <Divider my="sm" />
  
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Platform
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{platformlinks}</Collapse>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Services
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{serviceslinks}</Collapse>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Technical
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{technicalinks}</Collapse>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  About
                </Box>
                <IconChevronDown
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.blue[6]}
                />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{ aboutlinks }</Collapse>

  
            <Divider my="sm" />
  
            <Group justify="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }