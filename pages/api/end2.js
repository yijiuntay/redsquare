import { getProtocol } from "../../utils/vercel-utils";

export default async function handler(req, res) {
  try {
    const intervalId = setInterval(async () => {
      const response = await fetch(
        getProtocol() + req.headers.host + "/api/hello"
      );
      const data = await response.json();
      const lastChar = parseInt(data.hash.charAt(data.hash.length - 1));
      if (!isNaN(lastChar) && lastChar % 2 !== 0) {
        clearInterval(intervalId);
        res.status(200).json({ message: "Success" });
      }
    }, 100);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
