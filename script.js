window.addEventListener('keydown', (e) => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac os x') !== -1) {
    // mac os 用のキーバインド
    if (e.metaKey) {
      if (e.key === 'Enter') {
        const username = window.location.pathname.split('/')[1];
        window.location.href = `https://scrapbox.io/${username}/new`;
      }
    }
  } else {
    // windows os 用のキーバインド
    if (e.ctrlKey) {
      if (e.key === 'Enter') {
        const username = window.location.pathname.split('/')[1];
        window.location.href = `https://scrapbox.io/${username}/new`;
      }
    }
  }
});
