import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "8eyahudw",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder({
  projectId: "8eyahudw",
  dataset: "production",
});

export const urlFor = (source: string) => builder.image(source);

export default client;
