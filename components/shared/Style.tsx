import Title from "./Title";
import Image from "next/image";
import Link from "next/link";

const styleCards = [
  {
    title: "Casual",
    href: "#",
    src: "/images/image 11.png",
    className: "col-span-2",
    imageClassName: "w-[220px]",
  },
  {
    title: "Formal",
    href: "#",
    src: "/images/image 13.png",
    className: "col-span-3",
    imageClassName: "w-[330px]",
  },
  {
    title: "Party",
    href: "#",
    src: "/images/image 12.png",
    className: "col-span-3",
    imageClassName: "w-[330px]",
  },
  {
    title: "Gym",
    href: "#",
    src: "/images/image 14.png",
    className: "col-span-2",
    imageClassName: "w-[220px]",
  },
];

export default function Style() {
  return (
    <section className="flex items-center justify-center">
      <div className="flex w-[92%] max-w-[1240px] flex-col items-center justify-center rounded-xl bg-header-background">
        <Title title="BROWSE BY DRESS STYLE" className="tracking-wider" />

        <div className="w-full px-8 pb-8 md:px-16 md:pb-16">
          <div className="grid w-full grid-cols-5 gap-4">
            {styleCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className={`${card.className} group relative block h-[145px] overflow-hidden rounded-lg bg-white p-5 transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black`}
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
