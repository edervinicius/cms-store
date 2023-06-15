import React, { FC } from "react";
import Link from "next/link";
import { IconChevronRight, IconHome } from "@/components";

export interface IItemBreadcrumb {
  label: string;
  link: string;
}
export interface IBreadcrumbProps {
  items: IItemBreadcrumb[];
}

export const Breadcrumb: FC<IBreadcrumbProps> = ({ items }) => {
  return (
    <nav className="text-sm">
      <ol className="list-none p-0 flex gap-2">
        <li className="flex items-center gap-2">
          <Link className="text-gray-600 cursor-pointer" href="/">
            <IconHome />
          </Link>
          <IconChevronRight size={8} />
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <IconChevronRight size={8} />}
            <Link
              className={`cursor-pointer ${
                index === items.length - 1 ? "font-semibold" : "text-gray-600"
              }`}
              href={item.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};
