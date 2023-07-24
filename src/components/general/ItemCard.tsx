import { CameraAltOutlined } from "@mui/icons-material";

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
    <div className="card h-[90%] shadow-xl rounded-xl bg-white h-100 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
      <figure className="max-h-32 row-span-1">
        {photos.length > 0 ? (
          <img src={photos[0]} className="rounded-t-xl" alt="i" />
        ) : (
          <div className="flex justify-center">
            <CameraAltOutlined
              style={{
                width: "66.5%",
                height: "100%",
              }}
            />
          </div>
        )}
      </figure>
      <div className="card-body">
        <div className="grid grid-col-2 gap-6">
          <h2 className="card-title">
            {title}
            <div className="badge bg-primary text-white border-primary">
              N$ {dailyPrice}
            </div>
          </h2>
        </div>
        <p>{description}</p>
        <div className="card-actions">
          <div className="badge badge-outline">Windhoek</div>
          <div className="badge badge-outline">{category}</div>
        </div>
      </div>
    </div>
  );
}
