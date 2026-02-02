import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
function FavoriteToggleButton({ productId }: { productId: string }) {
  return (
    <Button
      size="icon"
      variant="outline"
      className="border border-border p-2 cursor-pointer"
    >
      <FaHeart />
    </Button>
  );
}
export default FavoriteToggleButton;
