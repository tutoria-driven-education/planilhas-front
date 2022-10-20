export const InputInformation = [
  {
    label: "Planilha principal",
    htmlFor: "linkSpreadsheetStudents",
    id: "linkSpreadsheetStudents",
    type: "url",
    placeholder: "Link da planilha principal",
    error: "Campo com planilha principal está vázio!",
  },
  {
    label: "Planilha que vai ser preenchida",
    htmlFor: "spreadsheetUpdate",
    id: "spreadsheetUpdate",
    type: "url",
    placeholder: "Link da planilha a ser atualizada",
    error: "Campo com link da planilha está vázio!",
  },
  {
    label: "Range inicial da planilha principal",
    htmlFor: "start",
    id: "start",
    type: "text",
    placeholder: "Range inicial",
    error: "Campo com range inicial está vázio!",
  },
  {
    label: "Range final da planilha principal",
    htmlFor: "end",
    id: "end",
    type: "text",
    placeholder: "Range final",
    error: "Campo com range final está vázio!",
  },
  {
    label: "Semana que vai ser atualizada",
    htmlFor: "week",
    id: "week",
    type: "number",
    placeholder: "Semana que vai ser atualizada",
    error: "Campo com semana está vázio!",
  }
];
