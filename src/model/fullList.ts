import ListItem from "./listItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

export default class FullList implements List {
  static instance: FullList = new FullList();
  private storageName = "newList";
  constructor(private _list: ListItem[] = []) {}
  get list(): ListItem[] {
    return this._list;
  }
  set list(newList: ListItem[]) {
    this._list = newList;
  }
  load(): void {
    const RawData = localStorage.getItem(this.storageName);
    if (typeof RawData !== "string") return;
    const parsedData: { id: string; item: string; checked: boolean }[] =
      JSON.parse(RawData);
    parsedData.forEach((_item) => {
      const loadedList = new ListItem(_item.id, _item.item, _item.checked);
      FullList.instance.addItem(loadedList);
    });
  }
  save(): void {
    localStorage.setItem(this.storageName, JSON.stringify(this._list));
  }
  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }
  clearList(): void {
    this.list = [];
    this.save();
  }
  removeItem(id: string): void {
    this._list = this.list.filter((item) => item.id !== id);
    this.save();
  }
}
