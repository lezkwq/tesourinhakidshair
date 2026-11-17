import { describe, expect, it } from "vitest";
import { BOOKING_URL, REVIEWS, WHATSAPP_URL } from "@/lib/site";

describe("Tesourinha rules", () => {
  it("shows all 22 provided reviews", () => expect(REVIEWS).toHaveLength(22));
  it("books through Trinks", () => expect(BOOKING_URL).toBe("https://www.trinks.com/tesourinhakidshair"));
  it("WhatsApp points to the salon number", () => expect(WHATSAPP_URL).toBe("https://wa.me/5547988998244"));
});
