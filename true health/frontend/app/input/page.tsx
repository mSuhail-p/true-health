import Header from "@/components/header";
import CameraScan from "@/components/cameraScan";
import ImageUpload from "@/components/imageUpload";
import ManualInput from "@/components/manualInput";
import SubmitButton from "@/components/submitButton";
export const Page = () => {
  return (
    <main className="flex justify-center pt-10 ">
      <section className="max-h-[80vh] w-screen sm:w-96  bg-[#131B2E] text-white flex flex-col gap-5   rounded p-5 pt-10">
        <Header />
        <CameraScan />
        <ImageUpload />
        <p className="text-xs text-[#6F778E] text-center ">
          OR ENTER THE DETAILS
        </p>
        <ManualInput />
        <SubmitButton />
      </section>
    </main>
  );
};

export default Page;
