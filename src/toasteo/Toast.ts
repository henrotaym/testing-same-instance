import { v4 as uuid } from "uuid";

class Toast {
  private _title;

  private _uuid;

  public constructor(title: string) {
    this._title = title;
    this._uuid = uuid();
  }

  public get title() {
    return this._title;
  }

  public get uuid() {
    return this._uuid;
  }
}

export default Toast;
