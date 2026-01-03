import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "@/assets/profile.gif";
import splashImg from "@/assets/splash.png";
import { Button } from "./ui/button";

const roles = ["UI Designer", "Student", "Web Designer"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb - left */}
        <div className="absolute -left-[20%] top-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary via-primary-glow to-cyan-300 opacity-60 blur-3xl animate-blob" />

        {/* Small gradient orb - top right */}
        <div className="absolute left-[40%] top-[5%] w-[200px] h-[200px] rounded-full bg-gradient-to-br from-cyan-400 to-pink-300 opacity-50 blur-2xl animate-blob animation-delay-2000" />

        {/* Additional ambient orb */}
        <div className="absolute right-[10%] bottom-[20%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-secondary/30 to-primary/20 opacity-40 blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="inline-block text-xl md:text-2xl font-medium text-foreground/70 tracking-wider mb-4">
              Hello ¬
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              I'm{" "}
              <span
                className={`inline-block text-primary transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                  }`}
              >
                {roles[currentRole]}
              </span>
            </h1>

            <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              I’m a designer and student focused on blending creativity and usability to build intuitive, engaging user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                asChild
              >
                <a href="/shreejan_CV_webdesigner.pdf" download>
                  Download CV
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                asChild
              >
                <a href="#contact">Hire Me</a>
              </Button>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative flex items-center justify-center"
          >
            <div className="relative flex items-center justify-center overflow-visible ">
              {/* Splash background */}
              <motion.img
                src={splashImg}
                alt=""
                className="absolute w-[240%] h-[140%] -left-[2%] -top-[20%] object-contain z-0 opacity-90"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Profile image */}
              <img
                src={profileImg}
                alt="Shreejan Shrestha - UI Designer"
                className="relative z-10 w-[70%] h-[80%] "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
