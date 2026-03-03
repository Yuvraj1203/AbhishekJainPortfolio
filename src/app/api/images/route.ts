import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cursor = searchParams.get("cursor");
  const limit = searchParams.get("limit") || "10";

  const cloudName = "dsbesmuuh";
  const apiKey = "485422116562787";
  const apiSecret = "Ka0cChDDW5hz8jB7tIvwIW2KCNQ";

  try {
    // Create basic auth header for Cloudinary API
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    // Build the Cloudinary API URL
    let apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=${limit}&resource_type=image`;

    if (cursor) {
      apiUrl += `&next_cursor=${cursor}`;
    }

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Cloudinary API error:", error);
      return NextResponse.json(
        { error: "Failed to fetch images from Cloudinary" },
        { status: response.status },
      );
    }

    const data = await response.json();

    // Transform the response to our format
    const images = data.resources.map((resource: any) => ({
      publicId: resource.public_id,
      url: resource.url,
      secureUrl: resource.secure_url,
      format: resource.format,
      width: resource.width,
      height: resource.height,
      createdAt: resource.created_at,
    }));

    return NextResponse.json({
      images,
      nextCursor: data.next_cursor || null,
      hasMore: !!data.next_cursor,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
