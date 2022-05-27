window.addEventListener('keydown', (e) => {
  if (e.metaKey) {
    if (e.key === 'Enter') {
      const username = window.location.pathname.split('/')[1];
      window.location.href = `https://scrapbox.io/${username}/new`;
    }
  }
});
