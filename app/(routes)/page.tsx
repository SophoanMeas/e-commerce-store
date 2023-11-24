import getBillboard from "@/actions/get-billboards";
import Container from "@/app/components/ui/container"
import Billboard from "@/app/components/getStoreItems/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/app/components/getStoreItems/product-list";

export const revalidate = 0;

const Page = async () => {
  const billboard = await getBillboard("655db51c5f39e1d7a3a2849e");
  const products = await getProducts({ isFeatured: true })
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList 
        title="Featured Products"
        items={products}
        />
      </div>
    </Container>
  )
}

export default Page
