import { useContext } from "react";
import { SyncContext } from "../context/sync";

export function useSync() {
  const context = useContext(SyncContext);
  return context;
}
