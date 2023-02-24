import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceIcon from "@mui/icons-material/Place";
import { Link } from "react-router-dom";

// interface Props {
//   item: {
//     id: string;
//     name: string;
//     images: string[];
//     location: string;
//     price: {
//       day: number;
//       week: number;
//       month: number;
//     };
//     description: string;
//     category: string;
//     likes: number;
//     user: {
//       name: string;
//       avatar: string;
//       id: string;
//     };
//     liked: boolean;
//   };
// }

export default function ItemCard({ item, key }: { item: any; key: any }) {
  return (
    <Link to={`/item/browse/`} key={key}>
      <div className='rounded-xl shadow-sm bg-white max-h-5'>
        <img src={item.photos[0]} className='w-50 h-50 rounded-t-xl' alt='i' />
        <div className='m-4'>
          <div className='flex-row mt-5 text-gray-500'>
            <span className='overflow-auto'>
              Some long description about an item that i could not think of so
              quickly Some long description about an item that i could not think
              of so quickly Some long description about an item that i could not
              think of so quickly Some long description about an item that i
              could not think of so quickly Some long description about an item
              that i could not think of so quickly
            </span>
            <div>
              <div className='flex justify-between my-5 p-1 text-sm font-bold text-gray-500'>
                <span>N$ 100.00</span>
                <span>Windhoek</span>
                <span>0 likes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
