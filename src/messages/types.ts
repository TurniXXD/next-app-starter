import { useTranslations } from "next-intl";

export type TFunction = ReturnType<typeof useTranslations>;

export enum ExampleEnum {
  Option1 = "option1",
  Option2 = "option2",
}

export interface MessagesEnums {
  exampleEnum: Record<ExampleEnum, string>;
}

interface Messages {
  locale: string;
  global: {
    format: Record<"date" | "time" | "dateTime" | "year" | "month", string>;
    label: Record<
      | "submit"
      | "cancel"
      | "close"
      | "confirm"
      | "save"
      | "edit"
      | "delete"
      | "add"
      | "search"
      | "clear"
      | "reset"
      | "back"
      | "next"
      | "finish"
      | "logout"
      | "status"
      | "yes"
      | "no"
      | "leave"
      | "stay"
      | "complete"
      | "discard"
      | "filters"
      | "clearOutFilters",
      string
    >;
    info: Record<"backOnline", string>;
  };
  error: {
    api: Record<"mustBeSignedIn", string>;
    zod: {
      minNumChars: string;
      maxNumChars: string;
      slugFormat: string;
      required: string;
      invalidDate: string;
      invalidTime: string;
      dateInPast: string;
      tooShort: string;
      expectedNumber: string;
      onlyPositiveNumber: string;
      invalidEmail: string;
      invalidPhone: string;
      invalidURL: string;
      invalidZipCode: string;
      invalidIc: string;
      invalidDic: string;
      onlyNumbers: string;
    };
    appError: Record<"templateNotFound" | "revisionNotFound", string>;
    validation: Record<"minNumChars" | "maxNumChars" | "required", string>;
    alert: Record<"unsavedConfirmLeave" | "offlineChangesSavedLocally", string>;
  };
  navigation: {
    dashboard: Record<"home", string>;
    users: Record<"home", string>;
    settings: Record<"home" | "user", string>;
  };
  components: {
    entityNotFound: {
      pageNotFound: {
        title: string;
        goBackButtonText: string;
      };
    };
    user: {
      fields: {
        firstName: string;
        lastName: string;
        companyName: string;
        ico: string;
        dic: string;
        address: string;
        city: string;
        zip: string;
        phoneNumber: string;
      };
    };
  };
  login: Record<"welcome" | "backToApp" | "login" | "gdpr", string>;
  enums: MessagesEnums;
}

export default Messages;
