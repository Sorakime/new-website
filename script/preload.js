window.onload = () => {
	document.head.innerHTML = `
		${document.head.innerHTML}
		<link rel="stylesheet" href="/style/common.css">
	`;
	document.body.innerHTML = `
    <header>
      <a href="/" id="header-sorakime">Sorakime</a>
      <a href="/link" id="header-link">Link</a>
      <a href="https://sorakime.theblog.me" id="header-blog">Blog</a>
    </header>
		${document.body.innerHTML}
	`;
  switch (location.pathname) {
    case '/':
      document.getElementById('header-sorakime').setAttribute('class', 'selected');
      break;
    case '/link':
      document.getElementById('header-link').setAttribute('class', 'selected');
      break;
    case '/blog':
      document.getElementById('header-blog').setAttribute('class', 'selected');
      break;
    default:
      console.log(location);
  };
};
