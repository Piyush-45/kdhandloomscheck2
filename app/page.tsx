import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
// import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
// import { ProductSort } from "@/components/product-sort"
// import { seedSanityData } from "@/lib/seed"
import { product } from "@/sanity/schemas/product"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

interface Props { 
  searchParams:{
    date?:string
    price?:string
    category?:string
    price_id?: any
  }
}


// interface IProduct {
//   title: string,
//   description: string,
//   price:number,
//   image:string
// }

export default async function Page({searchParams} : Props) {
  
  const {date="desc", price, category} = searchParams
  const priceOrder = price ? `|order(price${price})` :""
  const dateOrder = date ? `|order(_createAt${date})` :""
  const order = `${priceOrder}${dateOrder}`
  // console.log(searchParams)
  const productFilter = `*[_type=="product"]`
  const categoryFilter = category ? `&& "${category}" in categories ` :""
  const filter = `*[${productFilter} ${categoryFilter}]`
  const products = await client.fetch<SanityProduct[]>(groq`${productFilter} ${order} {
    _id, _CreateAt, title, sku, price, image, Currency, price, description, "slug": slug.current
  }`);

  // console.log(products)


  return (
    <div>
      <div className="px-4 pt-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-normal">KD HANDLOOMS</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">Discover Timeless Elegance at KD Handloom - Your Trusted Local Handloom Shop</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {/* {products.map((item)=>{
              return(
                
              )
             })} */}
              {products.length}result{products.length === 1 ? "" : "s"}
            </h1>
            {/* Product Sort */}
            {/* <ProductSort /> */}
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10 ", products.length > 0 ? 'lg:grid-cols-4' : 'lg:grid-cols-[1fr_3fr')}>
              <div className="hidden lg:block">
                {/* <ProductFilters /> */}

              </div>
              <ProductGrid products={products} />
              {/* {products?.map((item) => {
                // const{SKU, price, title, image} = item;
                return <>
                  <div className="product_Card">
                    <h3 className="mt-4 font-bold">{item.title}</h3>
                    <p className="mt-2 font-medium">{item.description}</p>
                    <p className="mt-2 font-medium">{item.price}</p>
                    {item.image && (
                      <div className="image-container">
                        <Image
                          width={200}
                          height={300}
                          src={urlForImage(item.image).url()}
                          alt="no image found"
                        />
                      </div>
                    )}
                  </div>
                
                </>
              })} */}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
