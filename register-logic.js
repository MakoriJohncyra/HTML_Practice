function doRegister() {
  
  const firstName = document.getElementById('firstName').value.trim();
  const lastName  = document.getElementById('lastName').value.trim();
  const email     = document.getElementById('email').value.trim();
  const memberId  = document.getElementById('memberId').value.trim();
  const password  = document.getElementById('password').value.trim();
  const confirm   = document.getElementById('confirmPassword').value.trim();
  const terms     = document.getElementById('terms').checked;

  
  if (!firstName) {
    showToast('error', 'Please enter your first name.');
    return;
  }

  if (!lastName) {
    showToast('error', 'Please enter your last name.');
    return;
  }

  if (!email) {
    showToast('error', 'Please enter your email address.');
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('error', 'Please enter a valid email address.');
    return;
  }

  if (!memberId) {
    showToast('error', 'Please enter your Student / Staff ID.');
    return;
  }

  if (!password) {
    showToast('error', 'Please enter a password.');
    return;
  }

  if (password.length < 8) {
    showToast('error', 'Password must be at least 8 characters.');
    return;
  }

  if (!confirm) {
    showToast('error', 'Please confirm your password.');
    return;
  }

  if (password !== confirm) {
    showToast('error', 'Passwords do not match.');
    return;
  }

  if (!terms) {
    showToast('error', 'Please agree to the Terms of Use and Library Policy.');
    return;
  }


  localStorage.setItem(
    'bridgesUser',
    JSON.stringify({
      firstName,
      fullName: `${firstName} ${lastName}`,
      email,
      memberId,
      password 
    })
  );


  showToast('success', 'Account created! Redirecting to sign in…');
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
}