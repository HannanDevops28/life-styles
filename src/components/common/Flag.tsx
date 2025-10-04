import type { FlagProps } from "../../types";

export function Flag({ nat, size = 24 }: FlagProps) {
  const code = nat.toLowerCase();
  const url = `https://flagcdn.com/w${size}.png`;
  const src = `https://flagcdn.com/${code}.svg`;
  return (
    <img
      src={src}
      alt={nat}
      width={size}
      height={size}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = `${url}`;
      }}
      className="inline-block align-text-bottom"
    />
  );
}


