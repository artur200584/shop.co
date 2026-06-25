import Title from "./Title";
import Image from "next/image";
import Link from "next/link";

const styleCards = [
  {
    title: "Casual",
    href: "/shop/casual",
    src: "/images/image 11.png",
    className: "md:col-span-2",
    imageClassName: "w-[220px] sm:w-[260px] md:w-[220px]",
  },
  {
    title: "Formal",
    href: "/shop/formal",
    src: "/images/image 13.png",
    className: "md:col-span-3",
    imageClassName: "w-[260px] sm:w-[340px] md:w-[330px]",
  },
  {
    title: "Party",
    href: "/shop/party",
    src: "/images/image 12.png",
    className: "md:col-span-3",
    imageClassName: "w-[260px] sm:w-[340px] md:w-[330px]",
  },
  {
    title: "Gym",
    href: "/shop/gym",
    src: "/images/image 14.png",
    className: "md:col-span-2",
    imageClassName: "w-[220px] sm:w-[260px] md:w-[220px]",
  },
];

export default function Style() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex w-[92%] max-w-[1240px] flex-col items-center justify-center rounded-xl bg-header-background">
        <Title
          title="BROWSE BY DRESS STYLE"
          className="tracking-wider"
          variant="link"
        />

        <div className="w-full px-6 pb-6 md:px-16 md:pb-16">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-5">
            {styleCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`${card.className} group relative block h-[190px] overflow-hidden rounded-lg bg-white p-5 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black md:h-[145px]`}
                aria-label={`Browse ${card.title} products`}
              >
                <h2 className="relative z-10 text-2xl font-bold">
                  {card.title}
                </h2>
                <Image
                  src={card.src}
                  width={360}
                  height={220}
                  alt=""
                  className={`absolute bottom-0 right-0 h-auto object-contain transition-transform duration-300 group-hover:scale-105 ${card.imageClassName}`}
                  unoptimized
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
