import { useCallback, useEffect } from "react";
import { useAppContext } from "./AppContext";
import { get, set } from "./localStorage";

const defaultLanguageKey = "language";
const defaultPrimaryLanguage = "en";
const defaultSecondaryLanguage = "id";

const useLanguage = (
  languageKey = defaultLanguageKey,
  primaryLanguage = defaultPrimaryLanguage,
  secondaryLanguage = defaultSecondaryLanguage
) => {
  const { state, setState } = useAppContext();
  const { language = primaryLanguage, languageIsLoading = true } = state || {};

  useEffect(() => {
    const newLanguage = get(languageKey, primaryLanguage);
    setState({ language: newLanguage, languageIsLoading: false });
  }, [setState, languageKey, primaryLanguage]);

  const setLanguage = useCallback(
    (newLanguage) => {
      set(languageKey, newLanguage);
      setState({ language: newLanguage });
    },
    [setState, languageKey]
  );

  const switchLanguage = useCallback(
    () =>
      setLanguage(
        language === primaryLanguage ? secondaryLanguage : primaryLanguage
      ),
    [language, primaryLanguage, secondaryLanguage, setLanguage]
  );

  const getMessage = useCallback(
    (message) => {
      if (!message) {
        return "-";
      }
      return message[language] || "-";
    },
    [language]
  );

  return { language, loading: languageIsLoading, switchLanguage, getMessage };
};

export default useLanguage;
