import Image from "next/image";
import ProductsContainer from "@/components/products/ProductsContainer";

type PageProps = {
  layout: string;
  search: string;
};
async function ProductsPage({ searchParams }: { searchParams: PageProps }) {
  const sp = await searchParams;
  const layout = sp.layout || "grid";
  const search = sp.search || "";

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
}

export default ProductsPage;
