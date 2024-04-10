import { Button, Group, Paper, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import { 
    IconTopologyStarRing3, 
    IconChartLine, 
    IconMapPin2,
    IconArrowUpRight,
    IconArrowDownRight
} from '@tabler/icons-react';

import classes from './StatsGrid.module.css';

// TODO: add a hook to fetch report on colocations, connected networks and peak traffic
// TODO: add a CTA to the stats grid to view more details

const icons = {
  topology: IconTopologyStarRing3,
  peak:  IconChartLine,
  location: IconMapPin2,
};

const data = [
  { title: 'Connected Networks', icon: 'topology', value: '456', diff: 34 },
  { title: 'Peak(Tb/s)', icon: 'peak', value: '4,145', diff: -13 },
  { title: 'Colocations', icon: 'location', value: '745', diff: 18 },
] as const;

export function StatsGrid() {
  const stats = data.map((stat) => {
    const theme = useMantineTheme();
    const Icon = icons[stat.icon];
    const DiffIcon = stat.diff > 0 ? IconArrowUpRight : IconArrowDownRight;

    return (
      <Paper withBorder p="md" radius="md" key={stat.title}>
        <Group justify="space-between">
          <Text size="xs" c="dimmed" className={classes.title}>
            {stat.title}
          </Text>
          <Icon className={classes.icon} size="1.5rem" stroke={1.6} color={theme.colors.blue[6]} />
        </Group>

        <Group align="flex-end" gap="xs" mt={25}>
          <Text className={classes.value}>{stat.value}</Text>
          <Text c={stat.diff > 0 ? 'teal' : 'red'} fz="sm" fw={500} className={classes.diff}>
            <span>{stat.diff}%</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          Compared to previous month
        </Text>
      </Paper>
    );
  });
  stats.push(
      <Paper withBorder p="md" radius="md" key="cta" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
          <Text
            variant="gradient"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            Connect from 800+ locations worldwide
          </Text>
          <Button>Get Started</Button>
        </div>
      </Paper>
  );
  return (
    <div className={classes.root} style={{ display: 'inline-block' }}>
      <SimpleGrid cols={{ base: 1, xs: 2, md: 4 }}>{stats}</SimpleGrid>
    </div>
  );
}