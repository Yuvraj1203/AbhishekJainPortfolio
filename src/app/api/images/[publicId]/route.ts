import { NextRequest, NextResponse } from "next/server";

const cloudName = "dsbesmuuh";
const apiKey = "485422116562787";
const apiSecret = "Ka0cChDDW5hz8jB7tIvwIW2KCNQ";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { publicId: string } },
) {
  const { publicId } = params;
  const authToken = request.headers
    .get("Authorization")
    ?.replace("Bearer ", "");

  // Simple state-based auth: must match exact string
  if (authToken !== "iamabhishekicandelete") {
    return NextResponse.json(
      { error: "Unauthorized: Invalid token" },
      { status: 401 },
    );
  }

  if (!publicId) {
    return NextResponse.json({ error: "Missing publicId" }, { status: 400 });
  }

  try {
    // Create basic auth header for Cloudinary admin API
    const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

    // Cloudinary delete API endpoint
    const apiUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_id: publicId,
        invalidate: true, // Invalidate CDN cache
      }),
    });

    const data = await response.json();

    if (data.result !== "ok") {
      return NextResponse.json(
        { error: "Failed to delete image from Cloudinary", details: data },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: true, message: "Image deleted successfully", publicId },
      { status: 200 },
    );
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
