import Button from "@/components/InteractiveButton";
import {
  bestCollections,
  HomeAppreciations,
} from "@/constants/HomeAppreciation";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="flex w-full max-lg:flex-col-reverse md:justify-center md:items-center ">
        <div className="lg:ps-40 pt-20 lg:basis-[50%] ps-7 ">
          <h1 className="font-extrabold text-7xl max-md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#121212] to-[#c23231]">
            It&apos;s not just Food, It&apos;s an Experience.
          </h1>
          <div className="flex gap-6">
            <Link href={"/menu"}>
              <Button className="px-8 py-3 mt-9 bg-red-1 rounded-full hover:bg-red-700 text-white text-sm font-semibold">
                View Menu
              </Button>
            </Link>
            <Link href={"/cart"}>
              <Button className="px-8 py-3 mt-9 bg-white rounded-full text-sm font-semibold hover:bg-stone-300">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
        <div className="pt-10 max-md:px-5 px-5 ">
          <Image
            src={"/images/food.jpg"}
            alt="Food"
            width={650}
            height={200}
            className="rounded-2xl"
          />
        </div>
      </section>
      <h1 className="w-full text-5xl font-bold flex justify-center mt-28 max-lg:text-center">
        Some of our best collection
      </h1>
      <div className="relative aspect=[900/600] h-[200px] w-full bg-no-repeat bg-center bg-cover bg-[url('/animation/wave-main1.svg')]"></div>
      <section className=" flex gap-10 justify-center items-center w-full  max-lg:flex-col bg-light-2">
        {bestCollections.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-8 p-16 rounded-full max-lg:max-w-fit"
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={300}
              height={300}
              className="rounded-full"
            />
            <h2 className="font-semibold text-3xl">{item.title}</h2>
          </div>
        ))}
      </section>
      <h3 className="w-full py-16 font-semibold text-2xl flex justify-center bg-light-2">
        <Link href={"/cart"} className="hover:underline hover:text-red-1">
          Explore more in our menu
        </Link>
      </h3>
      <div className="relative aspect=[900/600] h-[200px] w-full bg-no-repeat bg-center bg-cover bg-[url('/animation/wave-main2.svg')]"></div>
      <h1 className="w-full text-5xl font-bold flex justify-center mt-20">
        Why us
      </h1>
      <section className="flex md:py-28 md:px-4 gap-12 justify-center max-lg:flex-col items-center max-md:pt-20 ">
        {HomeAppreciations.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-6 items-center px-6 text-center rounded-3xl py-10 max-md:w-[90vw] max-w-[400px] min-h-[300px] bg-light-2"
          >
            <div className="bg-[#f57882] p-4 rounded-full ">
              <Image
                src={item.imgUrl}
                alt={item.title}
                width={30}
                height={30}
              />
            </div>
            <h2 className="text-4xl font-semibold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
