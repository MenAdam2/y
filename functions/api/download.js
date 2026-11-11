
export async function onRequestPost({ request }) {
  try {
    const { url } = await request.json();

    if (
      typeof url !== "string" ||
      !/^https:\/\/(www\.)?soundcloud\.com\/[^\s]+$/i.test(url)
    ) {
      return Response.json(
        { error: "Invalid SoundCloud URL." },
        { status: 400 }
      );
    }

    return Response.json(
      {
        error:
          "A download is not available through this endpoint yet. Connect an authorized SoundCloud API integration to retrieve downloadable tracks."
      },
      { status: 501 }
    );

  } catch {
    return Response.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
