import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/ui/Dialog";
import CustomMap from "./CustomMap";

export default function SearchMap() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative">
          <img src="/images/map-small.png" alt="map small" />
          <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <div className="w-fit text-xl bg-info-500 text-gray-scale-100 rounded px-[23px] py-[13px]">
              지도 보기
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="h-full">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
        </DialogHeader>
        <CustomMap />
      </DialogContent>
    </Dialog>
  );
}
