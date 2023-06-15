export const jsiNavbarHandler = (isHidden) => {
  // window?.webkit?.messageHandlers?.callNativeJSI?.postMessage(
  //   JSON.stringify({
  //     command: "toggleNavbarVisibility",
  //     request: {
  //       isHidden,
  //     },
  //   })
  // );

  window?.webkit?.messageHandlers?.callNativeJSI?.postMessage(
    JSON.stringify({
      command: "getLocation",
    })
  );

  window?.callNativeJSI?.postMessage(
    JSON.stringify({
      command: "toggleNavbarVisibility",
      request: {
        isHidden,
      },
    })
  );
};
