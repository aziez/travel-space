import path from "path";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  const jsonFile = path.join(process.cwd(), "");

  const fileContent = await fs.readFile("data.json");
  res.status(200).json(fileContent);
}
