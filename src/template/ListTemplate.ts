import FullList from "../model/fullList";

interface DOM_Element {
  ul: HTMLDListElement;
  clear(): void;
  render(fullList: FullList): void;
}

export default class ListTemplate implements DOM_Element {
  ul: HTMLDListElement;

  static instance: ListTemplate = new ListTemplate();
  constructor() {
    this.ul = document.getElementById("ListItems") as HTMLDListElement;
  }
  clear(): void {
    this.ul.innerHTML = "";
  }
  render(fullList: FullList): void {
    this.clear();

    fullList.list.forEach((Item) => {
      const li = document.createElement("li");
      li.className = "item";
      const check = document.createElement("input");
      li.className = "checkbox";
      check.id = Item.id;
      check.tabIndex = 0;
      check.checked = Item.checked;
      li.append(check);

      check.addEventListener("change", () => {
        Item.checked = !Item.checked;
        fullList.save();
      });
      const label = document.createElement("label");
      label.htmlFor = Item.id;
      label.textContent = Item.item;
      label.append;
      const btn = document.createElement("button");
      btn.className = "button";
      btn.textContent = "X";
      btn.append(btn);
      btn.addEventListener("click", () => {
        fullList.removeItem(Item.id);
        // doesn't create a infinite loop because its running in a event listener
        this.render(fullList);
      });
      this.ul.append(label);
    });
  }
}
