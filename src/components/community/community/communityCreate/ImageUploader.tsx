import { useState, ChangeEvent } from "react";
import ImageIcon from "../../icons/ImageIcon";

interface ImageUploaderProps {
  onFileSelect?: (files: File) => void;
}

export default function ImageUploader({ onFileSelect }: ImageUploaderProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    const url = URL.createObjectURL(file);

    setSelectedFile(file);
    setPreviewUrl(url);

    onFileSelect?.(file);
  };

  return (
    <div className="flex gap-[11px] mb-10">
      <div>
        <input
          type="file"
          id="image"
          accept="image/png, image/gif, image/jpeg"
          className="hidden"
          onChange={handleFileChange}
        />
        <label
          htmlFor="image"
          className="flex flex-col gap-[5px] justify-center items-center rounded w-[110px] h-[110px] bg-gray-scale-100"
        >
          <ImageIcon />
          <span className="text-[15px] text-gray-scale-400">{selectedFile ? "1/1" : "0/1"}</span>
        </label>
      </div>

      {previewUrl && (
        <div className="snap-x flex gap-[11px] snap-mandatory w-full overflow-x-scroll scrollbar-hidden">
          <div className="snap-end shrink-0 rounded overflow-hidden w-[110px] h-[110px]">
            <img src={previewUrl} alt="community preview" className="w-full h-full object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}
