import {
  CameraAltOutlined,
  EditOutlined,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import VerticalDivider from "../../../general/VerticalDivider";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

export interface SingleItemProps {
  title: string;
  photos: string[];
  description: string;
  dailyPrice: number;
  weeklyPrice: number;
  monthlyPrice: number;
  location: string;
  category: string;
  user_id: string;
  _id: string;
}

function SingleItem({
  title,
  photos,
  description,
  dailyPrice,
  weeklyPrice,
  monthlyPrice,
  location,
  category,
  user_id,
  _id,
}: SingleItemProps) {
  const { user } = useAuth0();

  const userItem = user?.sub === user_id;

  return (
    <div className='overflow-auto h-full'>
      <div className='flex-row'>
        <Couresal photos={photos} />
        <div className='flex w-full'>
          <div className='flex-row mt-3 w-full'>
            <div className='flex-auto justify-between sm:flex'>
              <div className=' flex-auto space-x-1 font-bold text-2xl text-black '>
                {title}
                {"  "}
                {userItem && (
                  <Link to={`/item/edit/${_id}`}>
                    <EditOutlined className='hover:text-primary' />
                  </Link>
                )}
                <div className='badge badge-outline bg-primary border-primary text-white my-auto'>
                  {location}
                </div>
                <div className='badge badge-outline bg-primary border-primary text-white my-auto'>
                  {category}
                </div>
              </div>
              {/* visible only on mobile */}
              <div className='flex gap-3 my-auto sm:hidden'>
                <div>
                  <button>
                    <a
                      href={`https://wa.me/264814818769?text=I'm%20interested%20in%20your%20${title}%20https%3A%2F%2F2671-160-242-75-87.ngrok-free.app/item/browse/${_id}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <WhatsApp
                        sx={{
                          color: "#25D366",
                          fontSize: "2rem",
                        }}
                      />
                    </a>
                  </button>
                </div>
                <div>
                  <a href='tel:+264814818769'>
                    <button>
                      <Phone
                        sx={{
                          color: "#128C7E",
                          fontSize: "2rem",
                        }}
                      />
                    </button>
                  </a>
                </div>
              </div>
              <div className='my-auto hidden sm:block'>
                <span>+264 81 123 4567</span>
              </div>
            </div>
            <div className='mt-3'>{user_id}</div>
          </div>
        </div>
        <div className='mt-4'>
          <span className='text-xl text-black font-bold'>description</span>
          <div className='overflow-auto max-h-[100px] mt-1'>
            <p>{description}</p>
          </div>
        </div>
        <div className='flex-col justify-center w-full mt-3'>
          <span className='text-xl text-black font-bold'>Prices</span>
          <div className='flex flex-col w-full lg:flex-row justify-center gap-10 mt-3'>
            <PriceDisplay type='Daily' per='day' value={dailyPrice} />
            <VerticalDivider text='OR' />
            <PriceDisplay type='Weekly' per='week' value={weeklyPrice} />
            <VerticalDivider text='OR' />
            <PriceDisplay type='Monthly' per='month' value={monthlyPrice} />
          </div>
        </div>
      </div>
    </div>
  );
}

interface CouresalProps {
  photos: string[];
}

export const Couresal = ({ photos }: CouresalProps) => {
  return (
    <div className='carousel'>
      {photos?.length > 0 ? (
        photos?.map((photo, i) => (
          <div id={`item${0}`} className='carousel-item w-full h-[]'>
            <img src={photo} className='w-full' alt='name' />
          </div>
        ))
      ) : (
        <div className='flex justify-center w-full'>
          <div>
            <CameraAltOutlined
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface PriceDisplayProps {
  type: string;
  per: string;
  value: number;
}

export const PriceDisplay = ({ type, per, value }: PriceDisplayProps) => {
  return (
    <div className='text-center'>
      <div>{type}</div>
      <div className='text-black'>
        N$ {value}
        <span className='text-primary'>/{per}</span>
      </div>
    </div>
  );
};

export default SingleItem;
