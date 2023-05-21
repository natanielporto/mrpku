import Toast, { ToastShowParams } from "react-native-toast-message";

interface IUseToast {
  openToast: (props: IShowToast) => void;
}

interface IShowToast {
  message: string;
  toastOptions?: ToastShowParams;
}

export const useToast = (): IUseToast => {
  const openToast = ({ message, toastOptions }: IShowToast): void =>
    Toast.show({
      text1: message,
      position: "bottom",
      type: "success",
      ...toastOptions,
    });

  return { openToast };
};
