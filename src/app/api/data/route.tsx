import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(request: Request) {
  try {
    // Resolve the absolute path to the JSON file
    const filePath = path.resolve(process.cwd(), "src/data/data.json");

    // Read the content of the JSON file
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Parse the JSON content
    const jsonData = JSON.parse(fileContent);

    // Return a JSON response with the data
    return NextResponse.json({ code: 200, msg: "success", data: jsonData });
  } catch (error) {
    // If an error occurs, return an error response
    console.error("Error reading JSON file:", error);
    return NextResponse.error();
  }
}
