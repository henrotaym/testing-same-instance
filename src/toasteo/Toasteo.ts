import Toast from "./Toast";

class Toasteo {
  public toasts: Toast[];
  public name: string;

  public constructor() {
    console.log("constructing toasteo");
    this.toasts = [];
    this.name = Math.floor(Math.random() * 100).toFixed();
  }

  public addToast(title: string) {
    console.log("pushing toast");
    const toast = new Toast(title);
    this.toasts.push(toast);
  }

  public randomName() {
    this.name = Math.floor(Math.random() * 100).toFixed();
    console.log("random");
  }
}

export default Toasteo;
