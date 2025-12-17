import '../styles/Chevron.css'

export default function Chevron({ open }) {
  return (
    <svg
      className={`chevron ${open ? "open" : ""}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
