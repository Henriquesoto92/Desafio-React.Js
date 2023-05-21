import Image from "next/image";
import React from "react";

const Avatar: React.FC = () => {
  return (
    <div className="rounded-full w-25 h-25 border shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] flex overflow-hidden">
      <Image
        src="/assets/icons/iconProfile.svg"
        height={150}
        width={150}
        alt="Image Profile"
        className="drop-shadow-lg"
      />
    </div>
  );
};

export default Avatar;
