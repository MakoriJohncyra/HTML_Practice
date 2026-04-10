function doRegister() {
    const firstName = document.querySelectorAll('.form-input')[0].value.trim();
    const lastName  = document.querySelectorAll('.form-input')[1].value.trim();
    const email     = document.querySelectorAll('.form-input')[2].value.trim();
    const memberId  = document.querySelectorAll('.form-input')[3].value.trim();
    const password  = document.querySelectorAll('.form-input')[4].value.trim();
    const confirm   = document.querySelectorAll('.form-input')[5].value.trim();
    const terms     = document.querySelector('.form-terms input').checked;

    
    if (!firstName) {
      showToast('error', 'Please enter your first name.'); return;
    }
    if (!lastName) {
      showToast('error', 'Please enter your last name.'); return;
    }
    if (!email) {
      showToast('error', 'Please enter your email address.'); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('error', 'Please enter a valid email address.'); return;
    }
    if (!memberId) {
      showToast('error', 'Please enter your Student / Staff ID.'); return;
    }
    if (!password) {
      showToast('error', 'Please enter a password.'); return;
    }
    if (password.length < 8) {
      showToast('error', 'Password must be at least 8 characters.'); return;
    }
    if (!confirm) {
      showToast('error', 'Please confirm your password.'); return;
    }
    if (password !== confirm) {
      showToast('error', 'Passwords do not match.'); return;
    }
    if (!terms) {
      showToast('error', 'Please agree to the Terms of Use and Library Policy.'); return;
    }

    
    showToast('success', 'Account created! Redirecting to sign in…');
    setTimeout(() => { window.location.href = 'index.html'; }, 1000);
  }