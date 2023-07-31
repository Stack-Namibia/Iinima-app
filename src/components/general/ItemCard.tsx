import { CameraAltOutlined } from "@mui/icons-material";
import { Item } from "../../api/items";
import { Link } from "react-router-dom";

export default function ItemCard({
  photos,
  description,
  dailyPrice,
  title,
  category,
  location,
  _id,
}: Item) {
  return (
    <Link to={`/item/browse/${_id}`}>
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
            <h2 className="card-title grid grid-col grid-flow-row md:grid-flow-col xl:grid-flow-col">
              {title}
              <div className="badge bg-primary text-white border-primary w-20">
                N$ {dailyPrice}
              </div>
            </h2>
          </div>
          <p className="truncate break-all text-sm">{description}</p>
          <div className="card-actions">
            <div className="badge badge-outline">{location}</div>
            <div className="badge badge-outline">{category}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
