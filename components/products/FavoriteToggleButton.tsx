import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer border border-border"
    >
      <FaHeart />
    </Button>
  );
}
export default FavoriteToggleButton;
