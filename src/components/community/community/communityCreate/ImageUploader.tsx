import { useState, ChangeEvent } from "react";
import ImageIcon from "../../icons/ImageIcon";

interface ImageUploaderProps {
  onFileSelect?: (files: File[]) => void;
}

export default function ImageUploader({ onFileSelect }: ImageUploaderProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [fileList, setFileList] = useState<File[]>([]);

  const Max_Upload = 10;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);

    const newFileList = [...fileList, ...selectedFiles];

    if (newFileList.length > Max_Upload) {
      alert(`이미지는 최대 ${Max_Upload}장까지 업로드 가능합니다`);
      return;
    }

    const newPreviewUrls = selectedFiles.map((file) => URL.createObjectURL(file));

    setFileList(newFileList);
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);

    onFileSelect?.(newFileList);
  };

  return (
    <div className="flex gap-[11px] mb-10">
      <div>
        <input
          type="file"
          id="image"
          accept="image/png, image/gif, image/jpeg"
          className="hidden"
          multiple
          onChange={handleFileChange}
        />
        <label
          htmlFor="image"
          className="flex flex-col gap-[5px] justify-center items-center rounded w-[110px] h-[110px] bg-gray-scale-100"
        >
          <ImageIcon />
          <span className="text-[15px] text-gray-scale-400">
            {fileList.length}/{Max_Upload}
          </span>
        </label>
      </div>

      <div className="snap-x flex gap-[11px] snap-mandatory w-full overflow-x-scroll scrollbar-hidden">
        {previewUrls.map((url, index) => (
          <div
            key={index}
            className="snap-end shrink-0 rounded overflow-hidden w-[110px] h-[110px]"
          >
            <img
              src={url}
              alt={`community preview ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
