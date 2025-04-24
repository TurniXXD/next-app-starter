import { ExampleEnum, default as Messages } from "./types";

const locale: Messages["locale"] = "cs";

const global: Messages["global"] = {
  format: {
    date: "DD.MM.YYYY",
    time: "HH:mm",
    dateTime: "DD.MM.YYYY HH:mm",
    year: "YYYY",
    month: "MMMM",
  },
  label: {
    submit: "Odeslat",
    cancel: "Zrušit",
    close: "Zavřít",
    confirm: "Potvrdit",
    save: "Uložit",
    edit: "Upravit",
    delete: "Smazat",
    add: "Přidat",
    search: "Hledat",
    clear: "Vymazat",
    reset: "Resetovat",
    back: "Zpět",
    next: "Další",
    finish: "Dokončit",
    logout: "Odhlásit",
    status: "Stav",
    yes: "Ano",
    no: "Ne",
    leave: "Odejít",
    stay: "Zůstat",
    complete: "Dokončit",
    discard: "Zahodit",
    filters: "Filtry",
    clearOutFilters: "Vyčistit všechny filtry",
  },
  info: {
    backOnline: "Jste zpět online",
  },
};

const error: Messages["error"] = {
  zod: {
    minNumChars: "Minimálně {min, plural, =0 {žádné znaky} =1 {jeden znak} one {# znak} few {# znaky} many {# znaků} other {# znaků}}",
    maxNumChars: "Maximálně {max, plural, =0 {žádné znaky} =1 {jeden znak} one {# znak} few {# znaky} many {# znaků} other {# znaků}}",
    required: "Povinné pole",
    dateInPast: "Nelze zvolit datum v minulosti",
    slugFormat: "Slug nemá správný tvar.",
    invalidDate: "Neplatné datum",
    invalidTime: "Neplatný čas",
    tooShort: "Interval je moc krátký",
    expectedNumber: "Pouze čísla.",
    onlyPositiveNumber: "Čísla nesmí být záporná.",
    invalidEmail: "Email není ve správném formátu.",
    invalidPhone: "Nesprávný formát tel. čísla",
    invalidURL: "Nesprávný tvar URL adresy",
    invalidZipCode: "Nesprávný tvar PSČ",
    invalidDic: "Nesprávný tvar DIČ",
    invalidIc: "Nesprávný tvar IČ",
    onlyNumbers: "Zadejte pouze čísla",
  },
  api: {
    mustBeSignedIn: "string",
  },
  appError: {
    templateNotFound: "Šablona nenalezena",
    revisionNotFound: "Revize nenalezena",
  },
  validation: {
    minNumChars: "Minimálně {min, plural, =0 {žádné znaky} =1 {jeden znak} one {# znak} few {# znaky} many {# znaků} other {# znaků}}",
    maxNumChars: "Maximálně {max, plural, =0 {žádné znaky} =1 {jeden znak} one {# znak} few {# znaky} many {# znaků} other {# znaků}}",
    required: "Povinné pole",
  },
  alert: {
    unsavedConfirmLeave: "Opravdu chcete odejít? Máte neuložené změny.",
    offlineChangesSavedLocally: "Jste offline. Změny budou uloženy ve vašem prohlížeči dokud se neobnoví připojení k síti.",
  },
};

const navigation: Messages["navigation"] = {
  dashboard: {
    home: "Přehled",
  },
  users: {
    home: "Uživatelé",
  },
  settings: {
    home: "Nastavení",
    user: "Uživatelská nastavení",
  },
};

const login: Messages["login"] = {
  welcome: "Vítejte v aplikaci Revizio!",
  backToApp: "Zpět do aplikace",
  login: "Přihlásit",
  gdpr: "Přihlášením souhlasíte s podmínkami",
};

const components: Messages["components"] = {
  entityNotFound: {
    pageNotFound: {
      title: "Stránka nenalezena",
      goBackButtonText: "Zpět na hlavní stránku",
    },
  },
  user: {
    fields: {
      firstName: "Jméno",
      lastName: "Příjmení",
      companyName: "Název společnosti",
      ico: "IČO",
      dic: "DIČ",
      address: "Adresa",
      city: "Město",
      zip: "PSČ",
      phoneNumber: "Telefonní číslo",
    },
  },
};

const enums: Messages["enums"] = {
  exampleEnum: {
    [ExampleEnum.Option1]: "Možnost 1",
    [ExampleEnum.Option2]: "Možnost 2",
  },
};

const translates: Messages = {
  locale,
  error,
  global,
  components,
  login,
  navigation,
  enums,
};

export default translates;
