import { NextUIProvider } from '@nextui-org/react';

const CustomNextUIProvider = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default CustomNextUIProvider;
