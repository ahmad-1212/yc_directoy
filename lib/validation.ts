import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url({ message: "Invalid URL" })
    .refine(
      async (url) => {
        try {
          const res = await fetch(url, { method: "HEAD" });
          const contentType = res.headers.get("content-type");
          return contentType?.startsWith("image/") || "URL is not an image";
        } catch {
          return "URL is not reachable";
        }
      },
      { message: "Invalid image URL" }
    ),
  pitch: z.string().min(10),
});
