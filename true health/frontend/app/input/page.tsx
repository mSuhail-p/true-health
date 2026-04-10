"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/primitives/header";
import CameraButton from "@/components/primitives/cameraButton";
import ImageUpload from "@/components/primitives/imageUpload";
import ManualInput from "@/components/primitives/manualInput";
import SubmitButton from "@/components/primitives/submitButton";
import CameraScan from "@/components/modal/cameraScan";
import Logo from "@/components/logo";
Logo;
const Page = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <section className="flex justify-center relative ">
      <div className="max-h-[80vh] w-screen sm:w-96  bg-[#131B2E] text-white flex flex-col gap-5   rounded p-5 ">
        <Logo />
        <Header />
        <CameraButton prop={setModal} />
        <ImageUpload />
        <p className="text-xs text-[#6F778E] text-center ">
          OR ENTER THE DETAILS
        </p>
        <ManualInput />
        <Link href={"/camera"}>
          <SubmitButton />
        </Link>
      </div>
      {modal && <CameraScan prop={setModal} />}
    </section>
  );
};

export default Page;
