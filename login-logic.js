
let selectedRole = "user";


function selectLoginRole(el, role) {
  document.querySelectorAll('.role-card').forEach(card => {
    card.classList.remove('selected');
  });

  el.classList.add('selected');
  selectedRole = role;
}


function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-pass').value.trim();

  // Validation
  if (!email) {
    showToast('error', 'Please enter your email or Member ID.');
    return;
  }

  if (!password) {
    showToast('error', 'Please enter your password.');
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem('bridgesUser'));

  if (selectedRole === "user" && storedUser) {
    if ((email === storedUser.email || email === storedUser.memberId) && password === storedUser.password) {
      
      showToast('success', 'Login successful! Redirecting...');
      
      setTimeout(() => {
        window.location.href = "dashboard-user.html";
      }, 1000);

      return;
    }
  }


  if (selectedRole === "admin" && email === "admin" && password === "123") {
    const stored = localStorage.getItem('bridgesAdmin');
    if (!stored) {
      localStorage.setItem('bridgesAdmin', JSON.stringify({
        firstName: 'Admin',
        fullName: 'Administrator'
      }));
    }

    showToast('success', 'Admin login successful! Redirecting...');
    
    setTimeout(() => {
      window.location.href = "dashboard-admin.html";
    }, 1000);

    return;
  }


  if (selectedRole === "user" && email === "demo" && password === "123") {
    localStorage.setItem('bridgesUser', JSON.stringify({
      firstName: 'Demo',
      fullName: 'User',
      email: 'demo',
      memberId: 'demo',
      password: '123'
    }));

    showToast('success', 'Login successful! Redirecting...');
    
    setTimeout(() => {
      window.location.href = "dashboard-user.html";
    }, 1000);

    return;
  }


  showToast('error', 'Invalid credentials. Please try again.');
}

function quickLogin(role) {
  if (role === "user") {
    document.getElementById('login-email').value = "demo";
    document.getElementById('login-pass').value = "123";
  } else {
    document.getElementById('login-email').value = "admin";
    document.getElementById('login-pass').value = "123";
  }


  document.querySelectorAll('.role-card').forEach(card => {
    if (card.dataset.role === role) {
      selectLoginRole(card, role);
    }
  });
}


function showToast(type, message) {
  const toast = document.getElementById('toast');

  if (!toast) return;

  toast.textContent = message;
  toast.className = `toast show ${type}`;

  setTimeout(() => {
    toast.className = 'toast';
  }, 3000);
}