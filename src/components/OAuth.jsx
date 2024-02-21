import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { sigInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);

      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const response = await res.json();
      dispatch(sigInSuccess(response));
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="uppercase bg-red-700 p-3 rounded-lg text-white hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
