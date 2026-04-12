"use client";
import { useState } from "react";
import Header from "@/components/primitives/header";
import CameraButton from "@/components/primitives/cameraButton";
import ImageUpload from "@/components/primitives/imageUpload";
import ManualInput from "@/components/primitives/manualInput";
import SubmitButton from "@/components/primitives/submitButton";
import Logo from "@/components/logo";
Logo;
const Page = () => {
  return (
    <section className="flex justify-center relative ">
      <div className="max-h-[80vh] w-screen sm:w-96  bg-[#131B2E] text-white flex flex-col gap-5   rounded p-5 ">
        <Logo />
        <Header />
        <CameraButton />
        <ImageUpload />
        <p className="text-xs text-[#6F778E] text-center ">
          OR ENTER THE DETAILS
        </p>
        <ManualInput />
        <SubmitButton />
      </div>
    </section>
  );
};

export default Page;
