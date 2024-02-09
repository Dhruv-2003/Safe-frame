import {
  Frame,
  getFrameHtml,
  getFrameMessage,
  validateFrameMessage,
} from "frames.js";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = await req.body;
  // console.log(req);
  // console.log(body);

  // Parse and validate the frame message
  // try {
  // const { isValid, message } = await validateFrameMessage(body);
  // if (!isValid || !message) {
  //   return new Response("Invalid message", { status: 400 });
  // }

  const frameMessage = await getFrameMessage(body);
  console.log(frameMessage);

  const imageUrlBase = `${process.env.NEXT_PUBLIC_HOST}/api/og`;
  const safeAddress = frameMessage.inputText;

  // Use the frame message to build the frame
  const frame: Frame = {
    version: "vNext",
    image: `${imageUrlBase}/${safeAddress}`,
    buttons: [
      {
        label: `Next`,
        action: "post",
      },
    ],
    ogImage: `${imageUrlBase}/${safeAddress}`,
    postUrl: `${process.env.NEXT_PUBLIC_HOST}/api/frame`,
  };
  console.log(frame);

  // Return the frame as HTML
  const html = getFrameHtml(frame);

  // return new Response(html, {
  //   headers: {
  //     "Content-Type": "text/html",
  //   },
  //   status: 200,
  // });

  res.status(200).send(html);
  // } catch (err) {
  //   console.log(err);
  // }
}

export const dynamic = "force-dynamic";
// export const runtime = "edge";
