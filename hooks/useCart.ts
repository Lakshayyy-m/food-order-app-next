import { getCart } from "@/actions/cart.action";
import { useQuery } from "@tanstack/react-query";

export const useCart = ({ cart }: { cart: any }) => {
  const { data, error } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    initialData: cart,
  });
};
