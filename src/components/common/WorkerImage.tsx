import { useState, useEffect } from "react";

interface WorkerImageProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

export default function WokerImage({ imageUrl, alt, className }: WorkerImageProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const worker = new Worker(new URL("../../worker/imageWorker.ts", import.meta.url), {
      type: "module",
    });

    worker.onmessage = (event: MessageEvent<string | { error: string }>) => {
      if (typeof event.data === "object" && event.data.error) {
        setError(event.data.error);
      } else {
        setDataUrl(event.data as string);
      }
    };

    worker.onerror = (err) => {
      setError(err.message);
    };
    worker.postMessage(imageUrl);

    return () => {
      worker.terminate();
    };
  }, [imageUrl]);

  if (error) return <div className="text-gray-scale-200 text-2xl">Error: {error}</div>;
  if (!dataUrl) return;

  return <img src={dataUrl} alt={alt} className={className} />;
}
