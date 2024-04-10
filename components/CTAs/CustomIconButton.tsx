import React from 'react';
import { ComponentType} from 'react';
import { ActionIcon, Group, useMantineColorScheme, } from '@mantine/core';


interface CustomIconButtonProps {
    IconComponent: ComponentType;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    ariaLabel: string;
    url?: string;
    backgroundColor?: string;
    style?: React.CSSProperties;
}

export function CustomIconButton({ IconComponent, size, ariaLabel, url,  backgroundColor, style, ...props }: CustomIconButtonProps) {
  const { colorScheme } = useMantineColorScheme();
  const defaultFillColor = colorScheme === 'dark' ? 'white' : 'black'; 
  const buttonBackgroundColor = backgroundColor || 'transparent';

  return (
    <Group justify="center">
      <ActionIcon
        size={size}
        aria-label={ariaLabel}
        style={{ color: defaultFillColor, width: '24px', height: '24px', backgroundColor: buttonBackgroundColor }}
        {...props}
      >
        <IconComponent  />
      </ActionIcon>
    </Group>
  );
}