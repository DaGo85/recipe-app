import { useState, useEffect } from "react";
import { projectStorage } from "./firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useStorage = (file, folder) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const imageRef = ref(projectStorage, `${folder}/${Date.now() + file.name}`);

    const uploadTask = uploadBytesResumable(imageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {},
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUrl(downloadURL);
        });
      }
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return { progress, url };
};

export default useStorage;
