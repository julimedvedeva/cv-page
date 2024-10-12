import React from "react";
import classnames from "classnames";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  url: string;
}

const Link: React.FC<React.PropsWithChildren<IProps>> = ({ url, children }) => {
  const pathname = usePathname();
  return (
    <NextLink
      href={url}
      className={classnames("pointer-events-auto transition-all duration-500", {
        "opacity-50": pathname !== url,
      })}
    >
      {children}.
    </NextLink>
  );
};

export default Link;
