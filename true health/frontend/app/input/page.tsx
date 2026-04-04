"use client";
import { useState } from "react";
import Header from "@/components/primitives/header";
import CameraButton from "@/components/primitives/cameraButton";
import ImageUpload from "@/components/primitives/imageUpload";
import ManualInput from "@/components/primitives/manualInput";
import SubmitButton from "@/components/primitives/submitButton";
import CameraScan from "@/components/modal/cameraScan";
const Page = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <main className="flex justify-center relative ">
      <section className="max-h-[80vh] w-screen sm:w-96  bg-[#131B2E] text-white flex flex-col gap-5   rounded p-5 pt-10">
        <Header />
        <CameraButton prop={setModal} />
        <ImageUpload />
        <p className="text-xs text-[#6F778E] text-center ">
          OR ENTER THE DETAILS
        </p>
        <ManualInput />
        <SubmitButton />
      </section>
      {modal && <CameraScan prop={setModal} />}
    </main>
  );
};

export default Page;
