import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterLinks.module.css';
import Logo from '../CustomLogo/Logo';

const data = [
  {
    title: 'Platform',
    links: [
      { label: 'Community', link: '#' },
      { label: 'Colocations', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Partners', link: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Internet Peering', link: '#' },
      { label: 'Private Interconnect', link: '#' },
      { label: 'Get a Quote', link: '#' },
        
    ],
  },
  {
    title: 'Technical',
    links: [
      { label: 'Overview of GIXA Topology', link: '#' },
      { label: 'Interface and Cabling Specifications', link: '#' },
      { label: 'Quality Statement', link: '#' },
      { label: 'Documentation', link: '#' },
      { label: 'Statistics', link: '#' },
    ],
  },

  {
    title: 'About Us',
    links: [
      { label: 'Upcoming Events', link: '#' },
      { label: 'Latest News', link: '#' },
      { label: 'About GIXA', link: '#' },
      { label: 'Meet The Team', link: '#' },
      { label: 'Reports and Resources', link: '#' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
            <Logo />
          <Text size="xs" c="dimmed" className={classes.description}>
            Building the future of the internet in Africa
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 GIX@. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}