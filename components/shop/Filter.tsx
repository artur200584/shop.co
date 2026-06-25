import FilterContent from "./FilterContent";

type Props = {
  onApplyPrice: (range: number[]) => void;
};

export default function Filter({ onApplyPrice }: Props) {
  return (
    <aside className="hidden w-64 shrink-0 rounded-xl border p-5 md:block">
      <FilterContent showHeaderIcon onApplyPrice={onApplyPrice} />
    </aside>
  );
}
