import { CameraAltOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface Props {
  photos: string[];
  description: string;
  dailyPrice: number;
  location: string;
}

export default function ItemCard({
  photos,
  description,
  dailyPrice,
  location,
}: Props) {
  return (
    <Link to={`/item/browse/`}>
      <div className='rounded-xl shadow-sm bg-white h-100'>
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
        <div className='m-4'>
          <div className='mt-5 text-gray-500 h-[100px] overflow-y-auto'>
            <span>{description}</span>
          </div>
          <div>
            <div className='flex justify-between my-5 p-1 text-sm font-bold text-gray-500'>
              <span>N$ {dailyPrice}</span>
              <span>{location}</span>
              <span>0 likes</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
