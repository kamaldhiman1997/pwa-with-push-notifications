import React, { useEffect, useState } from "react";

export default function Footer() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    setOnline(navigator.onLine);
  }, [navigator.onLine]);

  return online ? (
    <div className="alert alert-success" role="alert">
      You are Online
    </div>
  ) : (
    <div className="alert alert-info" role="alert">
      You are offline
    </div>
  );
}
