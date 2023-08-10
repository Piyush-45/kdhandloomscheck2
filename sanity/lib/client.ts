import { createClient } from "next-sanity"

// import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion :'2023-05-12',
  dataset:'production',
  projectId:'9m26h60c',
  useCdn:false,
  // token: "skm7AhruJI6xPpwsRrq4pOCT06dioDuWbQf3g4wkJUC0kKuXvYp60eoE6X2RMnx3LKXcxUZRoQf4ubqSsKfstj9amB15PqbvtkiJsOb48LbmTG62K5WQ6MtPymRvNV27MORlXhkGrVZdnNHScHELoxBuBarOtmLoqSCcuGI78L3KdoTfsLaN"
})


