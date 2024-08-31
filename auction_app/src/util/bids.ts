import { Item } from "@/db/Schema";

export function isBidOver(item: Item) {
  return item.endDate < new Date();
}