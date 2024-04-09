import {
    Badge,
    Group,
    Title,
    Text,
    Container,
    useMantineTheme,
  } from '@mantine/core';
  import { ReactNode } from 'react';
  import classes from './CustomContainer.module.css';
  

interface ContainerProps {
  badgeText?: string;
  titleText?: string;
  descriptionText?: string;
  divContent?: ReactNode;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
  justify?: 'left' | 'right' | 'center' | 'between' | 'around' | 'evenly';
  children?: ReactNode;
}

export function CustomContainer({ badgeText, titleText, descriptionText, divContent, textAlign = 'left', justify = 'left' }: ContainerProps) {
  const theme = useMantineTheme();
    
  return (
    <Container size="lg" py="xl">
      {badgeText && (
        <Group justify={justify}>
          <Badge variant="filled" size="lg" color={theme.colors[theme.primaryColor][6]}>
            {badgeText}
          </Badge>
        </Group>
      )}

      {titleText && (
        <Title order={2} className={classes.title} ta={textAlign} mt="sm">
          {titleText}
        </Title>
      )}

      {descriptionText && (
        <Text c="dimmed" className={classes.description} ta={textAlign} mt="md">
          {descriptionText}
        </Text>
      )}

      {divContent && (
        <div>
          {divContent}
        </div>
      )}
    </Container>
  );
}