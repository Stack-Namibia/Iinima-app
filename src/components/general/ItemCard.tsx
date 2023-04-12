import { CameraAltOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Props {
  photos: string[];
  description: string;
  dailyPrice: number;
  location: string;
  title: string;
  category: string;
}

export default function ItemCard({
  photos,
  description,
  dailyPrice,
  location,
  title,
  category,
}: Props) {
  return (
    <Link to={`/item/browse/`}>
      <div className='card h-[90%] shadow-xl rounded-xl bg-white h-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300'>
        <figure className='h-[50%]'>
          {photos.length > 0 ? (
            <img src={photos[0]} className='w-50 h-50 rounded-t-xl' alt='i' />
          ) : (
            <div className='flex justify-center'>
              <CameraAltOutlined
                style={{
                  width: "66.5%",
                  height: "100%",
                }}
              />
            </div>
          )}
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            {title}
            <div className='badge badge-secondary'>N$ {dailyPrice}</div>
          </h2>
          <p>{description}</p>
          <div className='card-actions justify-end'>
            <div className='badge badge-outline'>Windhoek</div>
            <div className='badge badge-outline'>{category}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
