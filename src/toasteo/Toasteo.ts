import Toast from "./Toast";

class Toasteo {
  private _toasts: Toast[] = [];

  public addToast(title: string) {
    console.log("pushing toast");
    const toast = new Toast(title);
    this._toasts = [...this._toasts, toast];
  }

  public get toasts() {
    return this._toasts;
  }
}

export default Toasteo;
