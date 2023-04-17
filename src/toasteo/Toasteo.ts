import Toast from "./Toast";

class Toasteo {
  private _toasts: Toast[] = [];

  public addToast(title: string) {
    const toast = new Toast(title);
    this._toasts.push(toast);
  }

  public get toasts() {
    return this._toasts;
  }
}

export default Toasteo;
