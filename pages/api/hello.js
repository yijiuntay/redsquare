// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { createHash } from "crypto";
import { promisify } from "util";

const setTimeoutPromise = promisify(setTimeout);

export default async function handler(req, res) {
  try {
    const hash = createHash("sha256")
      .update(new Date().getMilliseconds().toString())
      .digest("hex");

    await setTimeoutPromise(1000); // wait for 1 second

    res.status(200).json({ hash });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
