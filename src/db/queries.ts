import { db } from "@/db/index";

export async function getImage(id: string) {
  const idAsNumber = Number(id);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, idAsNumber),
  });
}

export async function getImages() {
  return await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
}
