import { Phone, WhatsApp } from "@mui/icons-material";
import VerticalDivider from "../../../general/VerticalDivider";

function SingleItem() {
  return (
    <div className='overflow-auto h-[750px]'>
      <Couresal />
      <div className='flex w-full'>
        <div className='flex-row mt-3 w-full'>
          <div className='flex justify-between'>
            <div className='font-bold text-2xl text-black'>
              Sony Alpha A73{" "}
              <div className='badge badge-outline bg-primary border-primary text-white'>
                Windhoek
              </div>
            </div>

            <div className='flex gap-3 my-auto'>
              <div>
                <button>
                  <WhatsApp
                    sx={{
                      color: "#25D366",
                      fontSize: "2rem",
                    }}
                  />
                </button>
              </div>
              <div>
                <button>
                  <Phone
                    sx={{
                      color: "#128C7E",
                      fontSize: "2rem",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
          <div>Carlos Sibalatani</div>
        </div>
      </div>
      <div className='mt-4'>
        <span className='text-xl text-black font-bold'>Description</span>
        <div className='overflow-auto h-[100px]'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>
      <div className='flex-col justify-center w-full mt-3'>
        <span className='text-xl text-black font-bold'>Prices</span>
        <div className='flex flex-col w-full lg:flex-row justify-center gap-10 mt-3'>
          <PriceDisplay type='Daily' per='day' value={100} />
          <VerticalDivider text='OR' />
          <PriceDisplay type='Weekly' per='week' value={100} />
          <VerticalDivider text='OR' />
          <PriceDisplay type='Monthly' per='month' value={100} />
        </div>
      </div>
    </div>
  );
}

export const Couresal = () => {
  return (
    <div className='carousel w-full'>
      <div id='item1' className='carousel-item w-full'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755'
          className='w-full'
          alt='name'
        />
      </div>
      <div id='item2' className='carousel-item w-full'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755'
          className='w-full'
          alt='name'
        />
      </div>
      <div id='item3' className='carousel-item w-full'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755'
          className='w-full'
          alt='name'
        />
      </div>
      <div id='item4' className='carousel-item w-full'>
        <img
          src='https://firebasestorage.googleapis.com/v0/b/iinima.appspot.com/o/items%2Fauth0%7C63c9439f97e75e1c36d98b0c%2FTest%2FImage%202.png?alt=media&token=05cbc218-dc54-467a-8e6e-debbccd93755'
          className='w-full'
          alt='name'
        />
      </div>
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
