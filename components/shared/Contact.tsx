import Title from "./Title";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <section className="mx-auto mt-7 flex max-[1000px]:flex-col w-[85%]  items-center justify-center rounded-xl bg-black ">
      <Title
        title="STAY UPTO DATE ABOUT OUR LATEST OFFERS"
        className="p-6 text-left text-3xl text-white min-[1000px]:p-20 min-[1000px]:text-5xl"
      />
      <div className="mr-5 w-[50%]">
        <Input />
        <Button
          variant="link"
          className="w-full text-black rounded-full bg-white p-6 mt-6"
        >
          Subscribe to Newsletter
        </Button>
      </div>
    </section>
  );
}
