import Header from "@/components/header";
import CameraScan from "@/components/cameraScan";
export const Page = () => {
  return (
    <main className="min-h-screen w-screen flex justify-center pt-10 ">
      <section className="max-h-[80vh] w-screen sm:w-96  bg-[#131B2E] flex flex-col gap-5 rounded p-5 pt-10">
        <Header />
      <CameraScan />
      </section>
    </main>
  );
};

export default Page;
