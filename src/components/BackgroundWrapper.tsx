import motionbg from "@/assets/motionbg.mp4";

const BackgroundWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      {/* 🎥 Video Background */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={motionbg} type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60 z-[-1]" />

      {/* Website Content */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
};

export default BackgroundWrapper;
