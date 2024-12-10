import Image from "next/image";
import axios from "axios";

// Fetch data from Strapi
async function fetchPosts() {
  const res = await axios.get("http://localhost:1337/api/posts");
  return res.data.data;
}

async function fetchFeatures() {
  const res = await axios.get("http://localhost:1337/api/features");
  return res.data.data;
};

export default async function Home() {
  const posts: any = await fetchPosts();
  const features: any = await fetchFeatures();
  console.log(features)
  return (
    <div className="flex flex-col	items-center p-10">
      <p>{posts[0].Text}</p>
      <h1 className="text-3xl font-bold p-5">{posts[1].Text}</h1>
      <p className="w-2/5 text-center">
        {posts[2].Text}
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
            {features.map((feature: any) => (
              <li
                key={feature.id}
                className="bg-gray-300 mb-3 flex justify-between p-2 rounded-tl-full rounded-bl-full text-black hover:bg-gray-400 hover:text-white hover:cursor-pointer"
              >
                <span>&lt;</span><span>{feature.String}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
