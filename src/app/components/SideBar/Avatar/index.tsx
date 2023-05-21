import Image from "next/image";
import React from "react";

const Avatar: React.FC = () => {
  return (
    <div className="rounded-full w-25 h-25 border-8 border-sky-800 shadow-[0_0px_20px_0px_rgba(0,0,0,0.3)] overflow-hidden">
      <Image
        src="/assets/icons/iconProfile.svg"
        height={160}
        width={150}
        alt="Image Profile"
        className="drop-shadow-lg bg-white"
      />
    </div>
  );
};

export default Avatar;
