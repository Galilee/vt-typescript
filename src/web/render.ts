export function render(id: string, content : string) : void {
  const el = document.getElementById(id);
  el.innerText= content;
}


