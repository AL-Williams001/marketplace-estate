import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px]">
      <Link
        to={
          `/listing/${listing._id}` ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXZMc0geK8v5aVgAZhawfdrWwrSkYBA7QaOQ&s"
        }
      >
        <img
          src={listing.imageUrls[0]}
          alt="listing cover"
          className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
        />
        <div className="p-3 flex-col gap-2 w-full ">
          <p className="truncate  text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            {listing.name}
          </p>
          <div className="flex items-center gap-2">
            <MdLocationOn className="h-4 w-4 text-green-600" />
            <p className="text-small text-gray-600 truncate font-semibold w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-small text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          <p className="mt-2 font-semibold ">
            $
            {listing.offer
              ? listing.discountedPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && "/ month"}
          </p>
          <div className="text-slate-500 flex gap-4">
            <div className="font-bold text-sm">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} bedrooms`
                : `${listing.bedrooms} bedroom`}
            </div>

            <div className="font-bold text-sm">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} bathrooms`
                : `${listing.bathrooms} bathroom`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
