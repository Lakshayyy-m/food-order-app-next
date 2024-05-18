import { useState } from "react";

export const useGetCartItems = (id: string) => {
  const [isLoading, setIsLoading] = useState(false);    

  setIsLoading(true);


  return { isLoading };
};
