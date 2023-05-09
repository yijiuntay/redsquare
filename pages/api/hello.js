// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createHash } from "crypto";
import { promisify } from "util";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const setTimeoutPromise = promisify(setTimeout);

export default async function handler(req, res) {
  try {
    const hash = createHash("sha256")
      .update(new Date().getMilliseconds().toString())
      .digest("hex");
    await setTimeoutPromise(1000);
    res.status(200).json({ hash });
  } catch (error) {
    res.json(error);
    res.status(500).end();
  }
}
