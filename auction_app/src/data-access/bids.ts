import { database } from "@/db/database";
import { bids } from "@/db/Schema";
import { desc, eq } from "drizzle-orm";

export async function getBidsForItem(itemId: number) {
  const allBids = await database.query.bids.findMany({
    where: eq(bids.itemId, itemId),
    orderBy: desc(bids.id),
    with: {
      user: {
        columns: {
          image: true,
          name: true,
        },
      },
    },
  });
  return allBids;
}