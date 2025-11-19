"use client";

import { useEffect, useMemo, useState } from "react";

type SessionUser = { name?: string; email?: string; role?: string };

function getInitials(user?: SessionUser | null) {
  if (!user) return "";
  if (user.name) {
    const parts = user.name.split(" ").filter(Boolean);
    return parts
      .slice(0, 2)
      .map((p) => p[0])
      .join("")
      .toUpperCase();
  }
  if (user.email) return user.email.slice(0, 2).toUpperCase();
  return "";
}

export function UserAvatar() {
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const res = await fetch("/api/auth/get-session", { credentials: "include" });
        const data = await res.json();
        if (active) {
          const sessionUser = data?.user || data?.data?.user || null;
          setUser(sessionUser);
        }
      } catch {
        if (active) setUser(null);
      }
    })();
    return () => {
      active = false;
    };
  }, []);

  const initials = useMemo(() => getInitials(user), [user]);

  if (!user) return null;

  return (
    <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 shadow-sm">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
        {initials || "?"}
      </span>
      <div className="text-xs leading-tight text-neutral-600">
        <p className="font-semibold text-neutral-900">{user.name || user.email}</p>
        <p className="capitalize">{user.role || "student"}</p>
      </div>
    </div>
  );
}
