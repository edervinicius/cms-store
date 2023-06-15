import { FC } from "react";
import { Breadcrumb, IItemBreadcrumb } from "@/components";

export interface IPageHeaderProps {
  title?: string;
  breadcrumbItems?: IItemBreadcrumb[];
  children?: any;
}

export const PageHeader: FC<IPageHeaderProps> = ({
  title,
  breadcrumbItems,
  children,
}) => (
  <div className="bg-white px-8 py-4">
    {breadcrumbItems && (
      <div className="pb-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
    )}
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      {children && (
        <div className="pt-4 flex justify-between items-center gap-2">
          {children}
        </div>
      )}
    </div>
  </div>
);
