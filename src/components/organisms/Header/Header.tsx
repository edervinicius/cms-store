import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="bg-white px-4 py-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Eat Logo"
          width={100}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};
