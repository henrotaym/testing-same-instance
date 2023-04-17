import { v4 } from "uuid";
import Toast from "./Toast";

class Toasteo {
  public toasts: Toast[];
  public name: string;

  public constructor() {
    console.log("constructing toasteo");
    this.toasts = [];
    this.name = v4();
  }

  public addToast(title: string) {
    console.log("pushing toast");
    const toast = new Toast(title);
    this.toasts.push(toast);
  }

  public randomName() {
    this.name = v4();
    console.log("random");
  }
}

export default Toasteo;
