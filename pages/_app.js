import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import React from "react";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

import { repositoryName, linkResolver } from "../prismicio";
import "../components/global.css";

const internalLinkComponent = ({ href, children, ...props }) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
);

function App({ Component, pageProps, router }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={internalLinkComponent}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Provider store={store}>
          <Component
            {...pageProps}
            key={router.route}
            routeString={router.route}
          />
        </Provider>
      </PrismicPreview>
    </PrismicProvider>
  );
}

export default wrapper.withRedux(App);
