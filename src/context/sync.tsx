import { createContext, ReactNode, useState, useEffect } from "react";
import { Sync } from "../services/sync";

type SyncContextType = {
  isSyncing: boolean;
};

export const SyncContext = createContext<SyncContextType>(
  {} as SyncContextType
);

type Props = {
  children: ReactNode;
};

export function SyncProvider({ children }: Props) {
  const [isSyncing, setIsSyncing] = useState(false);

  useEffect(() => {
    setIsSyncing(true);
    const sync = new Sync();
    sync.execute().finally(() => setIsSyncing(false));
  }, []);

  return (
    <SyncContext.Provider value={{ isSyncing }}>
      {children}
    </SyncContext.Provider>
  );
}
