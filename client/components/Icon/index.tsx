interface Props {
  type: "regular" | "solid " | "logo";
  name: String;
}

export const Icon = ({ type, name }: Props) => {
  return <i className={`bx bx${type !== "regular" ? type[0] : ""}-${name}`}></i>;
};
