import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1e63f0",
          borderRadius: 14,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 3.2 L33.5 8.4 V19.6 C33.5 27.8 28.1 34 20 37.4 C11.9 34 6.5 27.8 6.5 19.6 V8.4 Z"
            stroke="white"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
          <rect x="14.6" y="14.4" width="10.8" height="15.2" rx="1.2" stroke="white" strokeWidth="2.1" />
          <circle cx="20" cy="21.1" r="1.7" fill="white" />
          <path d="M20 22.6 L19.05 25.6 H20.95 Z" fill="white" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
