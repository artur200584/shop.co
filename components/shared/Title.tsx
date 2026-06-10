type PropsTtitle = {
  title: string;
};

export default function Title({ title }: PropsTtitle) {
  return (
    <h1 className="text-center p-20 text-5xl text-black font-black">{title}</h1>
  );
}
