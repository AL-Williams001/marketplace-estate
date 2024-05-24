import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        Profile
      </h1>
      <form className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        />
        <p className="text-sm self-center ">
          {fileUploadError ? (
            <span className="text-red-600 font-semibold ">
              Error Image upload (image must be less than 5 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-600 font-semibold">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-600 font-semibold">
              Image successfully uploaded!
            </span>
          ) : (
            ""
          )}
        </p>
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg"
          autoComplete="username"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg"
          autoComplete="new-password"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-lg uppercase font-semibold ">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer font-semibold">
          Delete Account
        </span>
        <span className="text-red-600 cursor-pointer font-semibold">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
