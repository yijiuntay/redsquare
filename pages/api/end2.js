import { getProtocol } from "../../utils/vercel-utils";

export default async function handler(req, res) {
  try {
    while (true) {
      //loop until lastChar is an odd number
      const response = await fetch(
        getProtocol() + req.headers.host + "/api/hello"
      );
      const data = await response.json();
      let lastChar = parseInt(data.hash.charAt(data.hash.length - 1));
      if (!isNaN(lastChar) && lastChar % 2 !== 0) {
        return res.status(200).json({ message: "Success" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
}
