"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { name: "Weekly", path: "/pages/events/weekly" },
  { name: "Daily", path: "/pages/events/daily" },
  { name: "Monthly", path: "/pages/events/monthly" },
];

const EventNavbar = () => {
  const pathname = usePathname();

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2 className="calibri-bold level-2 color-6">
        Events List
      </h2>

      <div className="mt-3" style={{ display: "inline-flex", gap: "10px" }}>
        {tabs.map((tab) => {
          const isActive = pathname === tab.path;

          return (
            <Link
              key={tab.path}
              href={tab.path}
              style={{
                padding: "10px 40px",
                borderRadius: "25px",
                border: "1px solid #ccc",
                textDecoration: "none",
                color: isActive ? "#fff" : "#333",
                backgroundColor: isActive ? "#18665b" : "#fff",
                fontWeight: isActive ? "bold" : "normal",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
            >
              {tab.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default EventNavbar;
