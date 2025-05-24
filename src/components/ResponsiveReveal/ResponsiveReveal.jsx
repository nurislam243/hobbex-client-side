import { useEffect, useState } from 'react';
import { Slide, Zoom } from "react-awesome-reveal";

const ResponsiveReveal = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 635); // Tailwind breakpoint (md: 768px)
    };

    checkScreenSize(); // initial check
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isMobile ? (
    <Slide direction='right'>{children}</Slide>
  ) : (
    <Zoom>{children}</Zoom>
  );
};

export default ResponsiveReveal;
