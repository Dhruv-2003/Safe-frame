import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="og:image"
          content="https://i.ibb.co/rsrJbFg/Screenshot-2024-02-08-at-6-06-22-PM.png"
        />
        <meta name="fc:frame" content="vNext" />
        <meta
          name="fc:frame:image"
          content="https://i.ibb.co/rsrJbFg/Screenshot-2024-02-08-at-6-06-22-PM.png"
        />
        <meta
          name="fc:frame:post_url"
          content={`${process.env.NEXT_PUBLIC_HOST}/api/frame`}
        />
        <meta name="fc:frame:input:text" content="Safe Address: zkevm:0x..." />
        <meta name="fc:frame:button:1" content="Create Frame" />
        <meta name="fc:frame:button:1:action" content="post" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
