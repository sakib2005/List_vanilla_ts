import "./css/style.css";
import FullList from "./model/fullList";
import ListItem from "./model/listItem";
import ListTemplate from "./template/ListTemplate";

const idealizeApp = (): void => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;
  itemEntryForm?.addEventListener("submit", (event: SubmitEvent) => {
    event.defaultPrevented;
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryTxt: string = input.value.trim();
    if (!newEntryTxt.length) return;
    const itemId: Number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1;
    const newItem = new ListItem(itemId.toString(), newEntryTxt);
    fullList.addItem(newItem);
    template.render(fullList);
  });
  const clearItemBtn = document.getElementById(
    "clearItemButton"
  ) as HTMLButtonElement;
  clearItemBtn.addEventListener("click", () => {
    fullList.clearList();
    template.clear();
  });
  fullList.load();
  template.render(fullList);
};
document.addEventListener("DOMContentLoaded", idealizeApp);
