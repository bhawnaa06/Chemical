import Link from "next/link";
// import AnimatedButton from "@/app/components/Buttons/AnimatedButton";

const PopularCourses = () => {
  return (
    <section style={{
      background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
      color: "#fff",
      padding: "clamp(80px, 10vh, 120px) 20px",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "60vh",
      boxSizing: "border-box"
    }}>
      {/* Glowing Background Effect */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: "clamp(250px, 80vw, 400px)",
        height: "clamp(250px, 80vw, 400px)",
        background: "rgba(0, 153, 255, 0.2)",
        borderRadius: "50%",
        filter: "blur(80px)",
        WebkitFilter: "blur(80px)",
        animation: "pulseGlow 4s infinite alternate",
        WebkitAnimation: "pulseGlow 4s infinite alternate",
        zIndex: 0,
        transform: "translate(-50%, -50%)"
      }} />

      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        position: "relative",
        zIndex: 1,
        padding: "0 20px"
      }}>
        {/* Title */}
        <h2 style={{
          fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
          fontWeight: 700,
          marginBottom: "20px",
          textShadow: "0px 0px 15px rgba(89, 255, 0, 0.5)"
        }}>
          Ready to Get Started?
        </h2>

        {/* Subtitle */}
        <p style={{
          fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
          marginBottom: "30px",
          opacity: 0.9,
          maxWidth: "800px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.6
        }}>
          Join NetwortyIdeas.com today and unlock a world of opportunities!
        </p>

        {/* CTA Button with Link */}
        {/* <Link
          href="https://app.networtyideas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AnimatedButton>
            Sign Up Now
          </AnimatedButton>
        </Link> */}
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes pulseGlow {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.6;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0.3;
            }
          }
        `}
      </style>
    </section>
  );
};


export default PopularCourses;
