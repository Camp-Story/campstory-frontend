/// <reference lib="webworker" />
declare const self: DedicatedWorkerGlobalScope;

self.addEventListener("message", async (event: MessageEvent<string>) => {
  const imageUrl = event.data;
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const reader = new FileReader();

    reader.onload = () => {
      self.postMessage(reader.result);
    };
    reader.onerror = (event: ProgressEvent<FileReader>) => {
      const error = event.target?.error;
      self.postMessage({ error: error?.message ? error?.message : "Unknown error" });
    };
    console.log("[WebWorker] FileReader로 Blob 읽기 시작");
    reader.readAsDataURL(blob);
  } catch (error: unknown) {
    if (error instanceof Error) {
      self.postMessage({ error: error.message });
    } else {
      self.postMessage({ error: "Unknown error occurred" });
    }
  }
});
