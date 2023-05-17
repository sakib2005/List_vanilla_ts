export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _Checked: boolean = false
  ) {}

  //   getter

  get id(): string {
    return this._id;
  }
  get item(): string {
    return this._item;
  }
  get checked(): boolean {
    return this._Checked;
  }

  // setter

  set id(id: string) {
    this._id = id;
  }
  set item(item: string) {
    this._item = item;
  }
  set checked(checked: boolean) {
    this._Checked = checked;
  }
}
