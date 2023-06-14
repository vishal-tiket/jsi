export const jsiNavbarHandler = (isHidden) => {
  window?.webkit?.messageHandlers?.callNativeJSI?.postMessage(
    JSON.stringify({
      command: "toggleNavbarVisibility",
      request: {
        isHidden,
      },
    })
  );

  window?.generic?.callGenericNativeJSI(
    JSON.stringify({
      command: "toggleNavbarVisibility",
      request: {
        isHidden,
      },
    })
  );
};
