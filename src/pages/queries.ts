import { db } from "@/db/index";
import type { APIRoute } from "astro";

export const prerender = false;

async function getImages() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return images;
}

export const GET: APIRoute = async () => {
  const images = await getImages();
  return new Response(JSON.stringify(images));
};