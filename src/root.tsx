import {
  PrefetchGraph,
  PrefetchServiceWorker,
  component$,
} from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <PrefetchServiceWorker
          base={"/build/"}
          scope="/"
          path="../../qwik-prefetch-service-worker.js"
        />
        <PrefetchGraph base={"/build/"} />
      </body>
    </QwikCityProvider>
  );
});
