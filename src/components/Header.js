import React, { useEffect, useRef } from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  {
    icon: faEnvelope,
    link: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    link: "https://github.com",
  },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    link: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    link: "https://stackoverflow.com",
  },
];

const Header = () => {
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const header = document.getElementById("header");

      if (header) {
        if (currentScrollY > prevScrollY.current) {
          // Scrolling down
          header.style.transform = "translateY(-100%)";
        } else {
          // Scrolling up
          header.style.transform = "translateY(0)";
        }
        prevScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      id="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
            <ChakraLink
              href="#projects-section"
              onClick={handleClick("projects")}
            >
              Projects
            </ChakraLink>
            <ChakraLink
              href="#contactme-section"
              onClick={handleClick("contactme")}
            >
              Contact Me
            </ChakraLink>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
