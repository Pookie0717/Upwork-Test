import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col	items-center p-10">
      <p className="">WHY CHOOSSE US</p>
      <h1 className="text-3xl font-bold p-5">We Are Different From Others</h1>
      <p className="w-2/5 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate accusantium recusandae soluta explicabo hic! Facere unde nam accusantium natus?
      </p>
      <div className="flex flex-row p-10 justify-center items-center ">
        <div className="w-2/3 relative">
          <div className="bg-pink-500 py-24 px-12 rounded-full w-1/2 z-20 relative bg-opacity-90">
            <p className="text-white text-lg font-bold">Industry experts</p>
            <p className="text-white text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing edit. Ea, recusandae nesciunt. Mollitia quidem
            </p>
          </div>
          <div className="absolute top-0 right-20 z-0">
            <Image 
              src="/img-girl.jpg"
              alt="Fixed size image"
              width={340}
              height={340}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="w-1/3">
          <ul className="font-bold">
            <li className="bg-pink-500 mb-3 flex justify-between p-2 rounded-tl-full rounded-bl-full text-white hover:bg-pink-600 hover:cursor-pointer">
              <span>&lt;</span><span>Industry experts</span>
            </li>
            <li className="bg-gray-300 mb-3 flex justify-between p-2 rounded-tl-full rounded-bl-full text-black hover:bg-gray-400 hover:text-white hover:cursor-pointer">
              <span>&lt;</span><span>Dedicated Team</span>
            </li>
            <li className="bg-gray-300 mb-3 flex justify-between p-2 rounded-tl-full rounded-bl-full text-black hover:bg-gray-400 hover:text-white hover:cursor-pointer">
              <span>&lt;</span><span>Outcome focused</span>
            </li>
            <li className="bg-gray-300 mb-3 flex justify-between p-2 rounded-tl-full rounded-bl-full text-black hover:bg-gray-400 hover:text-white hover:cursor-pointer">
              <span>&lt;</span><span>High Quality Service</span>
            </li>
            <li className="bg-gray-300 mb-3 flex justify-between p-2 rounded-tl-full rounded-bl-full text-black hover:bg-gray-400 hover:text-white hover:cursor-pointer">
              <span>&lt;</span><span>Cyber Security Excerpt</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
