import Image from "next/image";
import { Intro } from "./components/Intro";
import { VideoCard } from "./components/VideoCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Intro />
        <VideoCard
          title="Van Gogh"
          description="I used to be obssessed with glitch effects..."
          color="bg-gradient-to-b from-red-800 to-pink-900"
          image={
            "https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.6435-9/165321636_10158948335083286_2708288970551222375_n.jpg?stp=c0.119.1440.1440a_dst-jpg_s206x206_tt6&_nc_cat=108&ccb=1-7&_nc_sid=714c7a&_nc_ohc=inf0FJR91gYQ7kNvwHh_q67&_nc_oc=AdmBMT6UvAP3IO82yp9aTvKS2EN3heA41_lubgEc7fOzj0ahDCZT1iSpdR7gCV-UOsGpMtWw4JPM6vJ_-_PNDg-L&_nc_zt=23&_nc_ht=scontent.ftlv1-1.fna&_nc_gid=xm_3LKuUECEP6F5JsM9-MQ&oh=00_AfE7MgADrEMhasiOJZBhJ1DyiffHGyFs1pzrFNVVwDzL2w&oe=681CF05A"
          }
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
