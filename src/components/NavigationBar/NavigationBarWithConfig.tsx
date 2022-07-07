import { NavigationBar } from './NavigationBar';
import { linksConfig } from '../../config/navLinks';

const NavigationBarWithConfig = (): JSX.Element => {
  const { navigationLinks } = linksConfig;
  return (
    <NavigationBar navigationLinks={navigationLinks} />
  );
};

export { NavigationBarWithConfig };
