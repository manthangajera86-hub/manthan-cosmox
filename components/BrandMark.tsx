/* Placeholder logo — hexagon and molecule. Replace this file when there is
   real artwork; both the header and the footer take it from here. */
export default function BrandMark() {
  return (
    <svg className="brand__mark" viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 2.5 35.6 11.25v17.5L20 37.5 4.4 28.75v-17.5z" fill="#c8141e" />
      <path
        d="M20 13 13 25.5M20 13l7 12.5M13 25.5h14"
        stroke="#fff"
        strokeOpacity=".7"
        strokeWidth="1.4"
      />
      <circle cx="20" cy="13" r="3.1" fill="#fff" />
      <circle cx="13" cy="25.5" r="3.1" fill="#e3aa7a" />
      <circle cx="27" cy="25.5" r="3.1" fill="#e3aa7a" />
    </svg>
  );
}
