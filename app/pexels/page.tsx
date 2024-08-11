import "@/app/styles/style.css";
import { getPhotos, getVideos } from "@/lib/pexels";
export default async function Home() {
  const photos = await getPhotos("sweets", 5);
  const vids = await getVideos("Headphones",3)
  console.log(photos);
  return (  
    <main className="flex flex-row space-x-4 p-8 w-full h-full bg-gray-900">
      <section className="overflow-y-scroll shadow-black shadow-lg grid grid-cols-5 gap-4 p-4 bg-gray-800 w-full h-full rounded-lg">
        {photos &&
          photos.Photos?.map((img, i) => (
            <article
              key={i}
              className="ease-in-out hover:scale-95 cursor-pointer duration-200 hover:shadow-none shadow-black shadow-lg flex flex-col gap-2 bg-gray-700 w-fit h-fit max-w-60 p-5 rounded-lg"
            >
              <header className="p-2 rounded-sm bg-gray_650 bg-opacity-75">
                <h1 className="font-mono text-xl font-semibold text-gray-200">
                  {img.title}
                </h1>
                <h5 className="font-semibold text-xs text-gray-200">
                  ID:{img.id}
                </h5>
              </header>
              <img
                alt={img.title as string}
                src={img.src}
                width={250}
                height={250}
              />
            </article>
          ))}
      </section>
    </main>
  );
}
