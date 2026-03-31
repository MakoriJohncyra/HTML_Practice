 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // ── Filter buttons ──
  function setFilter(btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }

  // ── Borrow/Reserve buttons ──
  document.querySelectorAll('.book-borrow').forEach(btn => {
    btn.addEventListener('click', function() {
      const original = this.textContent;
      if (original === 'Borrow') {
        this.textContent = '✓ Borrowed';
        this.style.background = '#2ecc71';
        this.style.color = '#fff';
      } else if (original === 'Reserve') {
        this.textContent = '✓ Reserved';
        this.style.background = '#f39c12';
        this.style.color = '#fff';
      } else if (original === 'Notify Me') {
        this.textContent = '✓ Noted';
        this.style.background = '#7f8c8d';
      }
      this.disabled = true;
    });
  });

  // ── Active nav on scroll ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 100) current = section.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });