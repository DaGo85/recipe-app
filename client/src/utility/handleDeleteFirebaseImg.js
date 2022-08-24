//Function for deleting images from Firebase storage

import { deleteObject, ref } from "firebase/storage";
import { firebaseBaseUrl } from "../assets/data";
import { projectStorage } from "./firebase";

const handleDeleteFirebaseImg = async (url, setIsError) => {
  const firebaseImageId = url
    .split(firebaseBaseUrl)[1]
    .split("F")[1]
    .split("?")[0];

  // Create a reference to the file to delete
  const deleteRef = ref(projectStorage, "images");

  const imageRef = ref(deleteRef, firebaseImageId);

  // Delete the file
  deleteObject(imageRef)
    .then(() => {
      if (!setIsError) return;
      setIsError(false);
    })
    .catch(() => {
      if (!setIsError) return;
      setIsError("Could not delete this image. Please try again later!");
    });
};

export default handleDeleteFirebaseImg;
