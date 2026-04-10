 const stored = localStorage.getItem('bridgesUser');
const currentUser = stored ? JSON.parse(stored) : { firstName: 'Demo', fullName: 'Demo User' };

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }

  function getGreetingIcon() {
    const hour = new Date().getHours();
    if (hour < 12) return 'bi-sun-fill';
    if (hour < 17) return 'bi-brightness-high-fill';
    return 'bi-moon-stars-fill';
  }

  function applyUserInfo() {
    const initial = currentUser.firstName.charAt(0).toUpperCase();

    const greetEl = document.getElementById('dashboard-greeting');
    if (greetEl) {
      greetEl.innerHTML =
        `${getGreeting()}, <em>${currentUser.firstName}</em> ` +
        `<i class="bi ${getGreetingIcon()}" aria-hidden="true"></i>`;
    }


    const headerUname = document.getElementById('header-uname');
    if (headerUname) headerUname.textContent = currentUser.fullName;

    const headerAvatar = document.getElementById('header-avatar');
    if (headerAvatar) headerAvatar.textContent = initial;

    const profileName = document.getElementById('profile-name');
    if (profileName) profileName.textContent = currentUser.fullName;

    const profileAvatar = document.getElementById('profile-avatar');
    if (profileAvatar) profileAvatar.textContent = initial;

    const profileInputName = document.getElementById('profile-input-name');
    if (profileInputName) profileInputName.value = currentUser.fullName;
  }

  function switchView(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
    const sb = document.getElementById('usb-' + id.replace('u-',''));
    if (sb) sb.classList.add('active');

    document.querySelectorAll('.header-nav li').forEach(n => n.classList.remove('active'));
    const hn = document.getElementById('unav-' + id.replace('u-',''));
    if (hn) hn.classList.add('active');
  }

  document.addEventListener('DOMContentLoaded', () => {
    applyUserInfo();
    renderUserBorrows();
    renderSearchResults();
    renderHistory();
    renderIssueBorrows();
    setIssueDefaultDates();
    renderReturnBorrows();
    populateReturnSelect();
    setReturnDefaultDate();
  });

  (function () {
    const header = document.querySelector('.app-header');
    if (!header) return;

    const toggle = document.createElement('button');
    toggle.className = 'mobile-nav-toggle';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.innerHTML = '<i class="bi bi-list"></i>';
    header.prepend(toggle);

    const backdrop = document.createElement('div');
    backdrop.className = 'sidebar-backdrop';
    document.body.appendChild(backdrop);

    const sidebar = document.querySelector('.sidebar');
    const headerNav = document.querySelector('.header-nav');

    function openMenu() {
      if (sidebar)    sidebar.classList.add('open');
      if (headerNav)  headerNav.classList.add('open');
      backdrop.classList.add('open');
      toggle.innerHTML = '<i class="bi bi-x-lg"></i>';
    }
    function closeMenu() {
      if (sidebar)    sidebar.classList.remove('open');
      if (headerNav)  headerNav.classList.remove('open');
      backdrop.classList.remove('open');
      toggle.innerHTML = '<i class="bi bi-list"></i>';
    }

    toggle.addEventListener('click', () =>
      backdrop.classList.contains('open') ? closeMenu() : openMenu()
    );
    backdrop.addEventListener('click', closeMenu);

    document.querySelectorAll('.sidebar-item, .header-nav li').forEach(el => {
      el.addEventListener('click', closeMenu);
    });
  })();