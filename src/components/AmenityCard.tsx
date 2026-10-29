import SafeImage from "./SafeImage";

export default function AmenityCard({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <figure className="relative h-72 overflow-hidden rounded-2xl bg-brand-light">
      <SafeImage src={img} alt={title} className="h-full w-full object-cover" />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-sm font-medium text-white">
        {title}
      </figcaption>
    </figure>
  );
}
