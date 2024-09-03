import {
  animateParagraph,
  animateProfileImage,
  animateSlogan,
} from "@/animations/heroAnimations";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const useHeroSection = () => {
  const profileImageRef = useRef<HTMLImageElement>(null);
  const sloganRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      animateProfileImage(profileImageRef.current);
      animateSlogan(sloganRef.current);
      animateParagraph(paragraphRef.current);
    }
  }, [inView]);

  return {
    ref,
    profileImageRef,
    sloganRef,
    paragraphRef,
  };
};

export default useHeroSection;
