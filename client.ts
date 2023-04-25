import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "3s7yjm75", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
})
