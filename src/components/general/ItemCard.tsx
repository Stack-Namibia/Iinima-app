import { Item } from "../../api/items";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ItemCard({
  photos,
  location,
  dailyPrice,
  title,
  category,
  _id,
}: Item) {
  return (
    <Link to={`/item/browse/${_id}`}>
      <div className='bg-white border rounded-lg overflow-hidden'>
        {photos.length > 0 ? (
          <div>
            <LazyLoadImage
              className='h-48 w-full object-cover'
              src={photos[0]}
              alt={`alt-${title}`}
              height={192}
              effect='blur'
              width={"100%"}
              placeholderSrc={photos[0]}
            />
          </div>
        ) : (
          <LazyLoadImage
            className='h-48 w-full object-cover'
            src={`/categories/${category.replace(" ", "")}.jpg`}
            alt={`alt-${title}`}
          />
        )}
        <div className='p-6'>
          <div className='flex items-baseline'>
            <span className='inline-block bg-primary text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide'>
              {category}
            </span>
            <div className='ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide'>
              {location}
            </div>
          </div>
          <h4 className='mt-1 font-semibold text-lg leading-tight truncate capitalize'>
            {title}
          </h4>
          <div className='mt-1 text-gray-600 '>
            N$ {dailyPrice}
            <span className='text-sm'> / day</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
