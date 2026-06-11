type PropsTitle = {
  title: string;
};

export default function Title({ title }: PropsTitle) {
  return (
    <h1 className="text-center p-20 text-5xl text-black font-black">{title}</h1>
  );
}
