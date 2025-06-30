import React, { useEffect, useState } from "react";
import browsers from "./browsers";

const Neofetch = () => {
  const [info, setInfo] = useState({
    os: "Loading...",
    browser: "Loading...",
    language: "Loading...",
    timezone: "Loading...",
    cpuThreads: "Loading...",
    memory: "Loading...",
    resolution: "Loading...",
    online: "Loading...",
    gpu: "Loading...",
  });

  useEffect(() => {
    const ua = navigator.userAgent;

    const getBrowser = () => {
      if (ua.includes("Firefox/")) return "Firefox";
      if (ua.includes("Edg/")) return "Edge";
      if (ua.includes("Chrome/")) return "Chrome";
      if (ua.includes("Safari/") && !ua.includes("Chrome/")) return "Safari";
      if (ua.includes("OPR/")) return "Opera";
      return "Unknown";
    };

    const getGPUInfo = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        if (!gl) return "Unavailable";
        const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
        if (debugInfo) {
          return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        }
        return "Unknown GPU";
      } catch (e) {
        console.log(e);
        return "Error";
      }
    };

    const infoData = {
      os: navigator.platform,
      browser: getBrowser(),
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      cpuThreads: navigator.hardwareConcurrency || "Unknown",
      memory: navigator.deviceMemory
        ? navigator.deviceMemory + " GB"
        : "Unknown",
      resolution: `${window.screen.width}x${window.screen.height}`,
      online: navigator.onLine ? "Yes" : "No",
      gpu: getGPUInfo(),
    };

    setInfo(infoData);
  }, []);

  const InfoLine = ({ label, value }) => (
    <div className="flex">
      <span className="font-bold text-green-400 w-32">{label}</span>
      <span>{value}</span>
    </div>
  );

  return (
    <div className="flex gap-4 font-mono">
      <div className="text-green-400 tracking-tighter leading-4">
        {browsers[info.browser]}
      </div>
      <div>
        <div className="font-bold text-lg">
          <span className="text-green-400">ronin</span>@
          <span className="text-green-400">portfolio</span>
        </div>
        <div className="pl-2">
          <InfoLine label="OS" value={info.os} />
          <InfoLine label="Browser" value={info.browser} />
          <InfoLine label="GPU" value={info.gpu} />
          <InfoLine label="Resolution" value={info.resolution} />
          <InfoLine label="Language" value={info.language} />
          <InfoLine label="Timezone" value={info.timezone} />
          <InfoLine label="CPU Threads" value={String(info.cpuThreads)} />
          <InfoLine label="RAM" value={info.memory} />
          <InfoLine label="Online" value={info.online} />
        </div>
      </div>
    </div>
  );
};

export default Neofetch;
