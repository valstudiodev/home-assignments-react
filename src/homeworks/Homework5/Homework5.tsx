import { productItem, productsList } from "../../data/products";
import { ProductItem } from "../../components/ProductCard/ProductItem";
import { ProductList } from "../../components/ProductCard/ProductsList";
// import appple from "@/assets/img/products/product-img-apple.webp";
import { TitleHomework } from "../../components/fonts/Fonts";
import { ButtonAction } from "../../components/ProductCard/ProductButtons";
import { IconFavorite, IconCart, IconViewProduct } from "../../assets/icons/Icons";
import { SubtitleTask } from "../../components/fonts/Fonts";


export default function Homework5(): React.JSX.Element {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <div className="homework-preview-area">
        <TitleHomework number={5} />


        {/* <SubtitleTask number={3} /> */}
        {/* <ProductItem product={productItem}>

          <ButtonAction svg={<IconCart />} className='btn-add-to-card' />

          <div className="product-card__actions-wrap
          absolute top-4 right-4 flex flex-col gap-1.5">
            <ButtonAction svg={<IconFavorite />} className='btn-favorite' />
            <ButtonAction svg={<IconViewProduct />} className='btn-quick-view' />
          </div>

        </ProductItem> */}

        {/* <ProductList products={productsList}
          renderActions={(product) => (
            <>
              <div className="product-card__actions-wrap
              absolute top-4 right-4 flex flex-col gap-1.5">
                <ButtonAction svg={<IconFavorite />} className='btn-favorite' onClick={() => console.log('Click', product.id)} />

                <ButtonAction svg={<IconViewProduct />} className='btn-quick-view' onClick={() => console.log('Click', product.id)} />
              </div>
              <ButtonAction svg={<IconCart />} className='btn-add-to-card' onClick={() => console.log('Click', product.id)} />
            </>
          )}
        /> */}



      </div>
    </div>
  )
}