import { ProductList } from "../../components/ProductCard/ProductsList";
// import appple from "@/assets/img/products/product-img-apple.webp";
import { TitleHomework } from "../../components/fonts/Fonts";
import { ButtonAction } from "../../components/ProductCard/ProductButtons";
import { IconFavorite, IconCart, IconViewProduct, IconLike, IconDislike } from "../../assets/icons/Icons";
import { SubtitleTask } from "../../components/fonts/Fonts";
import { productsList } from "../../data/products";
import { ReviewList, reviews } from "../../components/ReviewsBlock/ReviewList";
import { ReviewActionButton } from "../../components/ReviewsBlock/ReviewsActions";
import { ContactsDashboard } from "@/components/ContactsDashboard/ContactsDashboard";
import { Button } from "@/components/Button/Button";

// import RenderProductList from "../../components/useMemo/UseMemo";
// import { SearchDachboard } from "../../components/useDeferred/UseDererred";

export default function Homework5(): React.JSX.Element {
  return (
    <div className="homework-container homework__container flex flex-col items-center gap-10">
      <div className="homework-preview-area">
        <TitleHomework number={5} />

        {/* ================== task 3 ================ */}
        <SubtitleTask number={3} />
        <ProductList products={productsList}
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
        />

        {/* ================== task 5 ================ */}
        <SubtitleTask number={5} />
        <ReviewList user={reviews}
          renderActions={() => (
            <>
              <div className="review-actions flex items-center gap-4">
                <ReviewActionButton iconPath={<IconLike />} />
                <ReviewActionButton iconPath={<IconDislike />} />
              </div>
            </>
          )}
        />


        {/* <Button
          // isLoading
          // disabled
          size="lg"
          variant="ghost"
          type="submit"
          name="main-btn"
          id="main-action"
          form="my-form-id"
          onClick={(e) => console.log('Click', e)}
          onMouseEnter={() => console.log('Mouse move in')}
          onMouseLeave={() => console.log('Mouse leave out')}
          onFocus={() => console.log('Focus')}
          rightIcon={<span>🔍</span>}>
          Click
        </Button> */}

        {/* ================== task 7 ================ */}
        <SubtitleTask number={7} />
        <ContactsDashboard />

        {/* <FilteredList /> */}
        {/* <DoubleNumber /> */}
        {/* <FullName /> */}
        {/* <SearhPlaceholder items={fruits} /> */}
        {/* <ButtonClick /> */}
        {/* <SearchDachboard /> */}
        {/* <RenderProductList /> */}
      </div>
    </div>
  )
}