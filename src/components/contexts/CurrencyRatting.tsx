import { createContext, useContext } from "react";

const Context = createContext(0);

export const useCurrencyRating = () => useContext(Context);

export const CurrencyRatingProvider = Context.Provider;
export const CurrencyRatingConsumer = Context.Consumer;
