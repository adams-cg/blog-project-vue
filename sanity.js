import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "ir44xo6i",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});
