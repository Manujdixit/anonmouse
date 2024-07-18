import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, "Message cannot be empty")
    .max(280, "Message cannot be longer than 280 characters"),
});
