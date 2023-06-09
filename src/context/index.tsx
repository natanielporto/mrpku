import { ReactNode } from "react";
import ErrorBoundary from "react-native-error-boundary";
import * as Sentry from "@sentry/react-native";
import { SyncProvider } from "./sync";
import { useToast } from "../hooks";

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const { openToast } = useToast();

  const errorHandler = (error: Error, stackTrace: string) => {
    Sentry.captureException(error);
    console.log(error, stackTrace);
    openToast({
      message: "Ocorreu um erro inesperado",
      toastOptions: { type: "error" },
    });
  };

  return (
    <ErrorBoundary onError={errorHandler}>
      <SyncProvider>{children}</SyncProvider>
    </ErrorBoundary>
  );
}
