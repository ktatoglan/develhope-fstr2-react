If you remove the LanguageContext.Provider that wraps the Clock component, the Clock component won't have access to the LanguageContext anymore. 
Without the LanguageContext.Provider, the useContext hook within the Clock component won't find the context provider higher up in the component 
tree and won't be able to access the language value from the context.