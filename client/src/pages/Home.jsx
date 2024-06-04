import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingCard from "../components/ListingCard";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const [offersResponse, rentResponse, saleResponse] = await Promise.all([
          fetch("/api/listing/get?offer=true&limit=4"),
          fetch("/api/listing/get?type=rent&limit=4"),
          fetch("/api/listing/get?type=sale&limit=4"),
        ]);

        const offersData = await offersResponse.json();
        const rentData = await rentResponse.json();
        const saleData = await saleResponse.json();

        setOfferListings(offersData);
        setRentListings(rentData);
        setSaleListings(saleData);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-black">perfect</span> place with
          ease
        </h1>
        <p className="text-gray-500 text-xs sm:text-sm font-semibold">
          AL&apos;s Estate is your ideal destination to find your next home.
          <br />
          Explore our extensive range of properties.
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-blue-600 font-bold hover:underline"
        >
          Let&apos;s get started...
        </Link>
      </div>

      {/* Swiper for Offer Listings */}
      <Swiper navigation>
        {offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing._id}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Listings for Offer, Rent, and Sale */}
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Recent Offers
              </h2>
              <Link
                className="text-sm text-blue-400 font-semibold hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Recent Rentals
              </h2>
              <Link
                className="text-sm text-blue-400 font-semibold hover:underline"
                to={"/search?type=rent"}
              >
                Show more rentals
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Recent Sales
              </h2>
              <Link
                className="text-sm text-blue-400 font-semibold hover:underline"
                to={"/search?type=sale"}
              >
                Show more sales
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingCard listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
