import { PrismicLink } from "@prismicio/react";

import { repositoryName } from "../prismicio";

/**
 * A setup message displayed when the Prismic repository does not contain blog
 * posts.
 */
export const SetupRepo = () => {
  const repositoryURL = `https://${repositoryName}.prismic.io/`;

  return (
    <div>
      <h1>Good job!</h1>
      <p>You&apos;re halfway done with setting up your Prismic website</p>
      <p>
        Just visit your{" "}
        <PrismicLink href={repositoryURL} target="_blank" className="underline">
          Prismic dashboard
        </PrismicLink>{" "}
        and add some content there
      </p>
    </div>
  );
};
