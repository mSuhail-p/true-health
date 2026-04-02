import Header from "@/components/header";
export const Page = () => {
  return (
    <main className="min-h-screen w-screen flex justify-center pt-10 ">
      <section className="max-h-[80vh] w-screen sm:w-96  bg-[#131B2E] flex flex-col items-center  rounded pt-10">
        <Header />
      </section>
    </main>
  );
};

export default Page;
