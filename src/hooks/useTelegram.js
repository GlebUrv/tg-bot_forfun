const tg = window.Telegram.WebApp;

export function useTelegram() {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  //   const onMainButtonClick = (callback) => {
  //     tg.MainButton.onClick(callback);
  //   };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
    // onMainButtonClick,
  };
}
