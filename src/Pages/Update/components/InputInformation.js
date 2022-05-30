export const InputInformation = [
  {
    label: "Link da pasta dos alunos",
    htmlFor: "folderLinkSpreadsheet",
    id: "folderLinkSpreadsheet",
    type: "url",
    placeholder: "Link da pasta",
    error: "Campo link da pasta está vázio!",
  },
  {
    label: "Template que pretende atualizar",
    htmlFor: "linkSpreadsheetTemplate",
    id: "linkSpreadsheetTemplate",
    type: "url",
    placeholder: "Link do template",
    error: "Campo link do template está vázio!",
  },
  {
    label: "Nome da aba que pretende atualizar",
    htmlFor: "spreadsheetPageName",
    id: "spreadsheetPageName",
    type: "text",
    placeholder: "Nome da aba",
    error: "Campo nome da aba está vázio!",
  },
];

export const CheckBoxInformation = [
  {
    label: "Deseja que essa aba seja protegida?",
    htmlFor: "isProtected",
    id: "isProtected",
    type: "checkbox",
  },
  {
    label: "Deseja que essa aba seja escondida?",
    htmlFor: "isHidden",
    id: "isHidden",
    type: "checkbox",
  },
];
