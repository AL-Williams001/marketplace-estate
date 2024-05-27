const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500">
        Create a Listing{" "}
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
          />
          <textarea
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                Sell
              </span>
            </div>

            <div className="flex gap-4">
              <input type="checkbox" id="rent" className="w-5" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                Rent
              </span>
            </div>

            <div className="flex gap-4">
              <input type="checkbox" id="parking" className="w-5" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                Parking Spot
              </span>
            </div>

            <div className="flex gap-4">
              <input type="checkbox" id="furnished" className="w-5" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                Furnished
              </span>
            </div>

            <div className="flex gap-4">
              <input type="checkbox" id="offer" className="w-5" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                Offer
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-4">
              <input
                type="number"
                id="bedrooms"
                max="10"
                required
                className="p-3 border-gray-300 rounded-lg"
              />
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                Bedrooms
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                id="bathrooms"
                max="10"
                required
                className="p-3 border-gray-300 rounded-lg"
              />
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                Bathrooms
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                id="regularPrice"
                max="10"
                required
                className="p-3 border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                  Regular Price
                </p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="number"
                id="discountedPrice"
                max="10"
                required
                className="p-3 border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 font-semibold">
                  Discounted Price
                </p>
                <span className="text-xs">($ / month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              className="p-3 border-gray-300 rounded w-full"
              type="file"
              id="images"
              accept="image/*"
              multiple
            />
            <button className="p-3 text-white bg-green-600 rounded uppercase hover:bg-green-700 ">
              Upload
            </button>
          </div>
          <button className="p-3 bg-blue-500 text-white rounded-lg uppercase hover:bg-blue-700 ">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
