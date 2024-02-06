import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Elabs Africa | Transform ideas into scalable, user-friendly websites
          and products.
        </title>
        <meta
          name="description"
          content="Transform ideas into scalable, user-friendly websites and products. Our experts focus on user needs for a seamless digital experience, enhancing your brand's standout presence."
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elabsafrica.africa/" />
        <meta property="og:title" content="Elabs Africa" />
        <meta
          property="og:description"
          content="Transform ideas into scalable, user-friendly websites and products. Our experts focus on user needs for a seamless digital experience, enhancing your brand's standout presence."
        />
        <meta
          property="og:image"
          content="https://elabsafrica.africa/public/summarycard.jpg"
        />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://elabsafrica.africa/" />
        <meta property="twitter:title" content="Elabs Africa" />
        <meta
          property="twitter:description"
          content="Transform ideas into scalable, user-friendly websites and products. Our experts focus on user needs for a seamless digital experience, enhancing your brand's standout presence."
        />
        <meta
          property="twitter:image"
          content="https://elabsafrica.africa/public/summarycard.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
