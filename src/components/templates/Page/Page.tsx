import { FC } from "react";
import { IPageHeaderProps, PageHeader } from "@/components";
interface IPageProps {
  header?: IPageHeaderProps;
  content: any;
}

export const Page: FC<IPageProps> = ({ header, content }) => (
  <div>
    {header && (
      <PageHeader
        title={header.title}
        breadcrumbItems={header.breadcrumbItems}
        children={header.children}
      />
    )}
    <div className="p-4">{content}</div>
  </div>
);
