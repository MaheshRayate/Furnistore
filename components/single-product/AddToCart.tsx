import React from "react";
import { Button } from "../ui/button";

function AddToCart({ productId }: { productId: string }) {
  return (
    <Button className="border border-border capitalize mt-8" size="lg">
      add to Cart
    </Button>
  );
}

export default AddToCart;
