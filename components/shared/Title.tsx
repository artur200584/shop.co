import { cn } from "@/lib/utils";

type PropsTitle = {
  title: string;
  className?: string;
  variant: "defalut" | "link";
};

export default function Title({
  variant = "defalut",
  title,
  className,
}: PropsTitle) {
  const Tag = variant === "link" ? "h2" : "h1";
  return (
    <Tag
      className={cn(
        "text-center p-20 text-5xl text-black font-black",
        variant === "link" && "text-4xl",
        className,
      )}
    >
      {title}
    </Tag>
  );
}
