import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebase/firebase";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

type GoogleLoginPayload = {
  email: string | null;
  name: string | null;
  avatar: string | null;
};
function GoogleLogin() {
  const createMutation = useMutation({
    mutationFn: async (bodyData: GoogleLoginPayload) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/google-login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to success login!");
      }
      return res.json();
    },
    onSuccess: (success) => {
      toast.success(success?.message);

      setInterval(() => {
        window.location.href = "/";
      }, 2000);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleGoogleLogin = async () => {
    const googleResponse = await signInWithPopup(auth, provider);
    const { email, displayName, photoURL } = googleResponse.user;
    const body = {
      email: email,
      name: displayName,
      avatar: photoURL,
    };
    createMutation.mutate(body);

    console.log("googleRes", googleResponse.user);
  };
  return (
    <div className="mb-2">
      <Button
        onClick={() => handleGoogleLogin()}
        className="w-full cursor-pointer"
      >
        <FcGoogle />
        Google Login
      </Button>
    </div>
  );
}

export default GoogleLogin;
