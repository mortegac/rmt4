import { PrismicLink } from "@prismicio/react";

/**
 * Back button used on blog post pages.
 */
export const BackButton = () => {
  return (
    <PrismicLink href="/">
      <span aria-hidden="true">&larr;</span>
      <span>back to list</span>
    </PrismicLink>
  );
};
