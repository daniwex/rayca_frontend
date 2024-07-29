"use client";

export default function Switch() {
  return (
    <div className="inline">
      <input type="checkbox" id="switch" checked className="hidden switch" />
      <label
        className="bg-[#1F1F21] h-5 w-4 rounded-full px-6 py-3 relative inline-flex items-center switch-label"
        htmlFor="switch"
      >
        <div className="inline-block absolute bg-white py-3 px-3 left-[50%] rounded-full "></div>
      </label>
    </div>
  );
}
