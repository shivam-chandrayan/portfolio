import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="max-h-screen grid grid-cols-3 gap-4">
        <div>
          Shivam <br /> Kumar
        </div>
        <div className="col-span-2" id="heroElements">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 flex items-center justify-center bg-blue-500 rounded-3xl text-white">
              1:2
            </div>
            <div className="w-full pt-full relative bg-green-500 rounded-3xl overflow-hidden">
              <div className="text-white aspect-square">1:1</div>
            </div>
            <div className="flex items-center justify-center bg-red-500 rounded-full text-white w-full h-full">
              circle
            </div>
            <div className=""></div>
            <div className="grid grid-cols-2 gap-6 aspect-square">
              <div className="flex items-center justify-center bg-yellow-500 rounded-3xl text-white">
                1
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-3xl text-white">
                2
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-3xl text-white">
                3
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-3xl text-white">
                4
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-6xl">
              Web Developer specialized in Frontend
            </div>
            <div className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              nam sint tenetur aliquid reiciendis expedita molestias debitis.
              Corrupti perspiciatis qui fugit maiores dicta nulla quos repellat
              labore ipsam aliquam, veritatis aut suscipit autem eveniet. Id
              nesciunt omnis deserunt vel adipisci vitae doloribus facere
              laudantium accusamus. Harum accusamus ex ad deserunt.
            </div>
          </div>
        </div>
      </div>

      <div className=" text-[15vw]">EXPERIENCE</div>
      <div className="grid grid-cols-3"></div>
    </main>
  );
}
