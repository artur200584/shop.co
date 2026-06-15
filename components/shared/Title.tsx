import { cn } from "@/lib/utils";

type PropsTitle = {
  title: string;
  className?: string;
};

export default function Title({ title, className }: PropsTitle) {
  return (
    <h1
      className={cn(
        "text-center p-20 text-5xl text-black font-black",
        className,
      )}
    >
      {title}
    </h1>
  );
}
