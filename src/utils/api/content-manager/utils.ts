import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { configs } from "../../../settings/configs";

const { projectId, dataset, apiVersion } = configs.contentManger;

const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
});

const builder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlFor = (source: string) => builder.image(source);

export default client;
