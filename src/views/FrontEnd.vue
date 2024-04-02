<template></template>

<script>
const query= `*[_type == "post" && categories[]->title match "AI"]{
  title,
  slug{current},
  author->{name},
  mainImage{
    asset->{url}
  },
  body[0]{children[0]{text}},
  publishedAt,
  categories[0]->{title},
  resume[0]{children[0]{text}},
} | order(publishedAt desc)`
</script>