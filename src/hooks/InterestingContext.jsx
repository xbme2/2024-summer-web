import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";
import InterestingList from "../features/InterestingList";

const InterestingContext = createContext();

const initialState = {
  InterestingList: [],
};

function InterestingProvider() {
  const [{ InterestingList }, dispatch] = useReducer(reducer, initialState);
}
