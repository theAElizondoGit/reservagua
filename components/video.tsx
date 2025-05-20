"use client";

export default function Video() {
  return (
    <div className="w-full px-4 lg:px-16 my-12">
      <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-lg">
        <video
          className="absolute top-0 left-0 w-full h-full"
          controls
          autoPlay
          muted
          playsInline
        >
          <source src="/videos/reservagua.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>
    </div>
  );
}
