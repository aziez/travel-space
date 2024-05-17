import { createContext, useContext, useState, useCallback } from "react";

const CarouselContext = createContext<any>(null);

export const useCarouselContext = () => useContext(CarouselContext);

export const CarouselProvider = ({ children }: any) => {
  const [current, setCurrent] = useState(0);

  return (
    <CarouselContext.Provider value={{ current, setCurrent }}>
      {children}
    </CarouselContext.Provider>
  );
};
