import { CustomContainer } from '../CustomContainer';
import { StatsGrid } from './StatsGrid';

export function StatsSection() {
  return (
    <CustomContainer
      titleText="Ghana in Numbers"
      divContent={ <StatsGrid /> }
    />
  );
}
