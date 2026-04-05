/* ============================================================
   BRIDGES LMS — Shared JavaScript
   ============================================================ */

// ── Utility ────────────────────────────────────────────────
function bi(name, extraClass) {
  const c = 'bi bi-' + name + (extraClass ? ' ' + extraClass : '');
  return '<i class="' + c + '" aria-hidden="true"></i>';
}

// ── Data ────────────────────────────────────────────────────
const BOOKS = [
  {id:'BK001',title:'Things Fall Apart',author:'Chinua Achebe',genre:'Literature',isbn:'978-0385474542',copies:4,available:2,year:1958},
  {id:'BK002',title:'Decolonising the Mind',author:'Ngũgĩ wa Thiong\'o',genre:'African Studies',isbn:'978-0852555019',copies:3,available:0,year:1986},
  {id:'BK003',title:'Algorithms to Live By',author:'Brian Christian',genre:'Technology',isbn:'978-1627790369',copies:2,available:1,year:2016},
  {id:'BK004',title:'Americanah',author:'Chimamanda N. Adichie',genre:'Literature',isbn:'978-0307962133',copies:5,available:3,year:2013},
  {id:'BK005',title:'Purple Hibiscus',author:'Chimamanda N. Adichie',genre:'Literature',isbn:'978-1616202415',copies:3,available:0,year:2003},
  {id:'BK006',title:'The Alchemist',author:'Paulo Coelho',genre:'Philosophy',isbn:'978-0062315007',copies:6,available:4,year:1988},
  {id:'BK007',title:'Half of a Yellow Sun',author:'Chimamanda N. Adichie',genre:'History',isbn:'978-1400095209',copies:4,available:2,year:2006},
  {id:'BK008',title:'Weep Not, Child',author:'Ngũgĩ wa Thiong\'o',genre:'African Studies',isbn:'978-0435905019',copies:3,available:1,year:1964},
  {id:'BK009',title:'Atomic Habits',author:'James Clear',genre:'Business',isbn:'978-0735211292',copies:8,available:5,year:2018},
  {id:'BK010',title:'So Long a Letter',author:'Mariama Bâ',genre:'Literature',isbn:'978-0435905033',copies:2,available:0,year:1980},
  {id:'BK011',title:'Clean Code',author:'Robert C. Martin',genre:'Technology',isbn:'978-0132350884',copies:4,available:3,year:2008},
  {id:'BK012',title:'Season of Migration to the North',author:'Tayeb Salih',genre:'Literature',isbn:'978-0435905048',copies:2,available:2,year:1966},
];

const STUDENTS = [
  {id:'CS/2024/001',name:'Justo Kimani',type:'Student',dept:'Computer Science',borrowed:2,fine:0,status:'active'},
  {id:'BS/2023/047',name:'Aisha Omar',type:'Student',dept:'Business Studies',borrowed:1,fine:0,status:'active'},
  {id:'EE/2025/012',name:'David Mwangi',type:'Student',dept:'Electrical Engineering',borrowed:3,fine:0,status:'active'},
  {id:'LA/2024/089',name:'Fatima Hassan',type:'Teacher',dept:'Languages',borrowed:1,fine:140,status:'active'},
  {id:'SW/2025/033',name:'Brian Oduya',type:'Student',dept:'Social Work',borrowed:2,fine:80,status:'active'},
  {id:'CS/2023/015',name:'Grace Njeri',type:'Student',dept:'Computer Science',borrowed:0,fine:0,status:'active'},
  {id:'MED/2024/077',name:'Samuel Kibet',type:'Student',dept:'Medicine',borrowed:2,fine:0,status:'suspended'},
];

const ISSUED = [
  {id:1,member:'Justo Kimani',memberId:'CS/2024/001',book:'Things Fall Apart',issued:'2026-03-27',due:'2026-04-10',status:'active',fine:0},
  {id:2,member:'Justo Kimani',memberId:'CS/2024/001',book:'Algorithms to Live By',issued:'2026-03-18',due:'2026-04-01',status:'active',fine:0},
  {id:3,member:'Aisha Omar',memberId:'BS/2023/047',book:'Atomic Habits',issued:'2026-03-20',due:'2026-04-03',status:'active',fine:0},
  {id:4,member:'David Mwangi',memberId:'EE/2025/012',book:'Clean Code',issued:'2026-03-15',due:'2026-03-29',status:'active',fine:0},
  {id:5,member:'Fatima Hassan',memberId:'LA/2024/089',book:'Half of a Yellow Sun',issued:'2026-03-01',due:'2026-03-22',status:'overdue',fine:140},
  {id:6,member:'Brian Oduya',memberId:'SW/2025/033',book:'Weep Not, Child',issued:'2026-03-10',due:'2026-03-28',status:'overdue',fine:80},
  {id:7,member:'Grace Njeri',memberId:'CS/2023/015',book:'Americanah',issued:'2026-03-22',due:'2026-04-05',status:'returned',fine:0},
  {id:8,member:'Samuel Kibet',memberId:'MED/2024/077',book:'The Alchemist',issued:'2026-03-10',due:'2026-03-24',status:'returned',fine:20},
];

const ACTIVITIES = [
  {id:1001,time:'09:14 AM',type:'Book Issued',member:'Justo Kimani',book:'Things Fall Apart',librarian:'Admin User'},
  {id:1002,time:'09:52 AM',type:'Book Returned',member:'Aisha Omar',book:'Americanah',librarian:'Admin User'},
  {id:1003,time:'10:30 AM',type:'Book Issued',member:'David Mwangi',book:'Clean Code',librarian:'Admin User'},
  {id:1004,time:'11:05 AM',type:'Fine Collected',member:'Fatima Hassan',book:'Half of a Yellow Sun',librarian:'Admin User'},
  {id:1005,time:'11:44 AM',type:'Member Registered',member:'New Student',book:'—',librarian:'Admin User'},
  {id:1006,time:'02:15 PM',type:'Book Not Available',member:'Brian Oduya',book:'Decolonising the Mind',librarian:'Admin User'},
];

const USER_BORROWS = [
  {id:'BK001',title:'Things Fall Apart',author:'Chinua Achebe',issued:'2026-03-27',due:'2026-04-10',progress:70},
  {id:'BK003',title:'Algorithms to Live By',author:'Brian Christian',issued:'2026-03-18',due:'2026-04-01',progress:20},
];

const HISTORY = [
  {no:1,title:'Things Fall Apart',author:'Chinua Achebe',issued:'Mar 27',due:'Apr 10',returned:'—',fine:0,status:'active'},
  {no:2,title:'Algorithms to Live By',author:'Brian Christian',issued:'Mar 18',due:'Apr 1',returned:'—',fine:0,status:'active'},
  {no:3,title:'Purple Hibiscus',author:'Chimamanda N. Adichie',issued:'Feb 28',due:'Mar 14',returned:'Mar 13',fine:0,status:'returned'},
  {no:4,title:'Americanah',author:'Chimamanda N. Adichie',issued:'Jan 10',due:'Jan 24',returned:'Jan 24',fine:0,status:'returned'},
  {no:5,title:'Atomic Habits',author:'James Clear',issued:'Dec 01',due:'Dec 15',returned:'Dec 18',fine:30,status:'returned-late'},
];

// ── View helpers ───────────────────────────────────────────
// Each page file has its own switchView() defined in a <script> tag.
// These helpers are shared across both dashboards.

function switchBookTab(id) {
  document.getElementById('books-list').style.display = id === 'books-list' ? '' : 'none';
  document.getElementById('books-add').style.display = id === 'books-add' ? '' : 'none';
  document.querySelectorAll('#a-books .page-tabs .page-tab').forEach((t,i) => {
    t.classList.toggle('active', (i === 0 && id === 'books-list') || (i === 1 && id === 'books-add'));
  });
}

function switchStudentTab(id) {
  document.getElementById('stud-list').style.display = id === 'stud-list' ? '' : 'none';
  document.getElementById('stud-add').style.display = id === 'stud-add' ? '' : 'none';
  document.querySelectorAll('#a-students .page-tabs .page-tab').forEach((t,i) => {
    t.classList.toggle('active', (i === 0 && id === 'stud-list') || (i === 1 && id === 'stud-add'));
  });
}

// ── User: Borrow Cards ─────────────────────────────────────
function renderUserBorrows() {
  const c = document.getElementById('user-borrowed-list');
  if (!c) return;
  c.innerHTML = USER_BORROWS.map(b => {
    const overdue = new Date(b.due) < new Date();
    return `
    <div class="borrow-card">
      <div class="borrow-book-icon">${bi('book-half')}</div>
      <div class="borrow-book-info">
        <div class="borrow-book-title">${b.title}</div>
        <div class="borrow-book-author">${b.author}</div>
        <div class="prog-wrap"><div class="prog-fill" style="width:${b.progress}%"></div></div>
      </div>
      <div class="borrow-book-actions">
        <div class="${overdue ? 'borrow-due-late' : 'borrow-due-ok'}">Due ${b.due}</div>
        <button class="btn btn-outline btn-xs borrow-return-btn"
          onclick="typeof switchView === 'function' && switchView('u-return')">Return</button>
      </div>
    </div>`;
  }).join('');
}

// ── User: Search ───────────────────────────────────────────
function renderSearchResults() {
  const q = (document.getElementById('u-search-input')?.value || '').toLowerCase();
  const genre = document.getElementById('u-genre-filter')?.value || '';
  const avail = document.getElementById('u-avail-filter')?.value || '';

  const filtered = BOOKS.filter(b => {
    const mq = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.isbn.includes(q) || b.id.toLowerCase().includes(q);
    const mg = !genre || b.genre === genre;
    const ma = !avail || (avail === 'available' ? b.available > 0 : b.available === 0);
    return mq && mg && ma;
  });

  const el = document.getElementById('search-result-count');
  if (el) el.textContent = `Showing ${filtered.length} book${filtered.length !== 1 ? 's' : ''}`;

  const tbody = document.getElementById('search-results-tbody');
  if (!tbody) return;
  tbody.innerHTML = filtered.map(b => `
    <tr>
      <td><div class="td-title">${b.title}</div><div class="td-sub">${b.id}</div></td>
      <td>${b.author}</td>
      <td><span class="badge badge-gold">${b.genre}</span></td>
      <td class="td-muted">${b.isbn}</td>
      <td>${b.available > 0
        ? `<span class="badge badge-green">${b.available} Available</span>`
        : `<span class="badge badge-red">All Borrowed</span>`}</td>
      <td>${b.available > 0
        ? `<button class="btn btn-gold btn-xs" onclick="typeof switchView === 'function' && switchView('u-issue')">Borrow</button>`
        : `<button class="btn btn-outline btn-xs" disabled style="opacity:.5">Unavailable</button>`}</td>
    </tr>`).join('');
}

// ── User: History ──────────────────────────────────────────
function renderHistory() {
  const tbody = document.getElementById('history-tbody');
  if (!tbody) return;
  tbody.innerHTML = HISTORY.map(h => `
    <tr>
      <td class="td-num">${h.no}</td>
      <td><div class="td-title">${h.title}</div></td>
      <td class="td-sm">${h.author}</td>
      <td>${h.issued}</td>
      <td>${h.due}</td>
      <td>${h.returned}</td>
      <td>${h.fine > 0 ? `<span class="td-fine">KES ${h.fine}</span>` : '<span class="td-clear">—</span>'}</td>
      <td>${h.status === 'active' ? '<span class="badge badge-blue">Active</span>' :
           h.status === 'returned' ? '<span class="badge badge-green">Returned</span>' :
           '<span class="badge badge-red">Late Return</span>'}</td>
    </tr>`).join('');
}

// ── User: Issue Page Borrow Mini-List ──────────────────────
function renderIssueBorrows() {
  const c = document.getElementById('issue-page-borrows');
  if (!c) return;
  c.innerHTML = USER_BORROWS.map(b => `
    <div class="issue-borrow-item">
      <span class="issue-borrow-icon">${bi('journal-richtext')}</span>
      <div class="issue-borrow-info">
        <div class="issue-borrow-title">${b.title}</div>
        <div class="issue-borrow-due">Due: ${b.due}</div>
      </div>
    </div>`).join('') +
    `<div class="issue-borrow-hint">Borrowing <strong>2 of 3</strong> allowed books</div>`;
}

// ── User: Return Borrows List ──────────────────────────────
function renderReturnBorrows() {
  const c = document.getElementById('return-borrows-list');
  if (!c) return;
  c.innerHTML = USER_BORROWS.map(b => {
    const overdue = new Date() > new Date(b.due);
    return `<div class="active-borrow-card">
      <div class="td-title">${b.title}</div>
      <div class="td-sub">${b.author}</div>
      <div class="active-borrow-meta">
        <div class="active-borrow-issued">Issued: <strong>${b.issued}</strong></div>
        <div class="active-borrow-status ${overdue ? 'active-borrow-late' : 'active-borrow-ok'}">
          ${overdue ? bi('alarm-fill') + ' OVERDUE' : bi('check-circle-fill') + ' Due: ' + b.due}
        </div>
      </div>
    </div>`;
  }).join('');
}

// ── User: Return Select ────────────────────────────────────
function populateReturnSelect() {
  const sel = document.getElementById('return-select');
  if (!sel) return;
  while (sel.options.length > 1) sel.remove(1);
  USER_BORROWS.forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.due;
    opt.textContent = b.title + ' (Due: ' + b.due + ')';
    sel.appendChild(opt);
  });
}

// ── User: Fine Calculator ──────────────────────────────────
function calcFine() {
  const sel = document.getElementById('return-select');
  const rd = document.getElementById('return-date')?.value;
  const fineAlert = document.getElementById('return-fine-alert');
  const fineSummary = document.getElementById('fine-summary');
  if (!sel || !rd || !sel.value || !fineAlert || !fineSummary) return;
  const due = new Date(sel.value);
  const ret = new Date(rd);
  const diff = Math.floor((ret - due) / 86400000);
  if (diff > 0) {
    const fine = diff * 10;
    fineAlert.style.display = '';
    fineAlert.className = 'alert alert-danger';
    fineAlert.innerHTML = `<span class="alert-icon">${bi('alarm-fill')}</span><div>This book is <strong>${diff} day(s) overdue</strong>. A fine of <strong>KES ${fine}</strong> will be applied.</div>`;
    fineSummary.style.display = '';
    document.getElementById('fine-summary-text').innerHTML = `Late fine: <strong>KES ${fine}</strong> (${diff} days × KES 10/day). Please clear the fine at the counter.`;
  } else {
    fineAlert.style.display = 'none';
    fineSummary.style.display = 'none';
  }
}

// ── User: Issue Dates ──────────────────────────────────────
function setIssueDefaultDates() {
  const today = new Date();
  const due = new Date(today); due.setDate(due.getDate() + 14);
  const fmt = d => d.toISOString().split('T')[0];
  const id = document.getElementById('issue-date');
  const dd = document.getElementById('due-date');
  if (id) id.value = fmt(today);
  if (dd) dd.value = fmt(due);
  id?.addEventListener('change', () => {
    const d = new Date(id.value); d.setDate(d.getDate() + 14);
    dd.value = d.toISOString().split('T')[0];
  });
}

function setReturnDefaultDate() {
  const el = document.getElementById('return-date');
  if (el) el.value = new Date().toISOString().split('T')[0];
}

// ── Shared: Book Lookup ────────────────────────────────────
function lookupBook(inputId, previewId) {
  const val = document.getElementById(inputId)?.value.toLowerCase();
  const prev = document.getElementById(previewId);
  const textId = previewId + '-text';
  if (!val || val.length < 3 || !prev) return;
  const book = BOOKS.find(b =>
    b.id.toLowerCase().includes(val) || b.isbn.includes(val) || b.title.toLowerCase().includes(val)
  );
  const textEl = document.getElementById(textId);
  if (book) {
    prev.style.display = '';
    prev.className = book.available > 0 ? 'alert alert-success' : 'alert alert-danger';
    if (textEl) textEl.innerHTML = book.available > 0
      ? `<strong>${book.title}</strong> by ${book.author} — <span style="color:var(--green)">${book.available} cop${book.available !== 1 ? 'ies' : 'y'} available</span>`
      : `<strong>${book.title}</strong> by ${book.author} — <span style="color:var(--red)">All copies currently borrowed</span>`;
    const iconEl = prev.querySelector('.alert-icon');
    if (iconEl) iconEl.innerHTML = book.available > 0 ? bi('check-circle-fill') : bi('x-circle-fill');
  } else {
    prev.style.display = val.length >= 3 ? '' : 'none';
    prev.className = 'alert alert-danger';
    const iconEl = prev.querySelector('.alert-icon');
    if (iconEl) iconEl.innerHTML = bi('search');
    if (textEl) textEl.textContent = 'Book not found in catalog.';
  }
}

// ── User: Submit Issue ─────────────────────────────────────
function submitIssue() {
  const id = document.getElementById('issue-book-id')?.value;
  if (!id) { showToast('warn', 'Please enter a Book ID or ISBN'); return; }
  showToast('success', 'Borrow request submitted! Check your dashboard for status.');
}

// ── User: Submit Return ────────────────────────────────────
function submitReturn() {
  const sel = document.getElementById('return-select');
  if (!sel?.value) { showToast('warn', 'Please select a book to return'); return; }
  showToast('success', 'Book returned successfully! Thank you.');
  setTimeout(() => typeof switchView === 'function' && switchView('u-home'), 400);
}

// ── Admin: Books Table ─────────────────────────────────────
function renderAdminBooks() {
  const q = (document.getElementById('admin-book-search')?.value || '').toLowerCase();
  const genre = document.getElementById('admin-genre-filter')?.value || '';
  const filtered = BOOKS.filter(b => {
    const mq = !q || b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q) || b.id.toLowerCase().includes(q);
    const mg = !genre || b.genre === genre;
    return mq && mg;
  });
  const tbody = document.getElementById('admin-books-tbody');
  if (!tbody) return;
  tbody.innerHTML = filtered.map(b => `
    <tr>
      <td class="td-id">${b.id}</td>
      <td><div class="td-title">${b.title}</div><div class="td-sub">${b.isbn}</div></td>
      <td>${b.author}</td>
      <td><span class="badge badge-gold">${b.genre}</span></td>
      <td class="td-count-bold">${b.copies}</td>
      <td class="td-center">
        <span class="${b.available > 0 ? 'td-available-ok' : 'td-available-none'}">${b.available}</span>
      </td>
      <td>${b.available > 0 ? '<span class="badge badge-green">Available</span>' : '<span class="badge badge-red">All Out</span>'}</td>
      <td class="td-actions">
        <button class="btn btn-outline btn-xs" onclick="showToast('success','Book details updated!')">Edit</button>
        <button class="btn btn-danger btn-xs" onclick="showToast('warn','Book removed from catalog!')">Remove</button>
      </td>
    </tr>`).join('');
}

// ── Admin: Members Table ───────────────────────────────────
function renderStudents(q) {
  const tbody = document.getElementById('students-tbody');
  if (!tbody) return;
  const filtered = q
    ? STUDENTS.filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.id.toLowerCase().includes(q))
    : STUDENTS;
  tbody.innerHTML = filtered.map(s => `
    <tr>
      <td class="td-id">${s.id}</td>
      <td><div class="td-title">${s.name}</div></td>
      <td><span class="badge badge-blue">${s.type}</span></td>
      <td class="td-sm">${s.dept}</td>
      <td class="td-count-bold">${s.borrowed}</td>
      <td>${s.fine > 0 ? `<span class="td-fine">KES ${s.fine}</span>` : '<span class="td-clear">—</span>'}</td>
      <td>${s.status === 'active' ? '<span class="badge badge-green">Active</span>' : '<span class="badge badge-red">Suspended</span>'}</td>
      <td class="td-actions">
        <button class="btn btn-outline btn-xs" onclick="showToast('success','Member updated!')">Edit</button>
        <button class="btn btn-danger btn-xs" onclick="showToast('warn','Member suspended!')">Suspend</button>
      </td>
    </tr>`).join('');
}

// ── Admin: Issued Books Table ──────────────────────────────
function renderIssuedBooks() {
  const q = (document.getElementById('issued-search')?.value || '').toLowerCase();
  const status = document.getElementById('issued-status-filter')?.value || '';
  const filtered = ISSUED.filter(i => {
    const mq = !q || i.member.toLowerCase().includes(q) || i.book.toLowerCase().includes(q) || i.memberId.toLowerCase().includes(q);
    const ms = !status || i.status === status;
    return mq && ms;
  });
  const tbody = document.getElementById('issued-tbody');
  if (!tbody) return;
  tbody.innerHTML = filtered.map(i => {
    const badgeCls = i.status === 'active' ? 'badge-blue' : i.status === 'overdue' ? 'badge-red' : 'badge-green';
    const badgeLabel = i.status === 'active' ? 'Active' : i.status === 'overdue' ? 'Overdue' : 'Returned';
    return `<tr>
      <td class="td-num">#${i.id}</td>
      <td><div class="td-title">${i.member}</div><div class="td-sub">${i.memberId}</div></td>
      <td><div class="td-title td-title-sm">${i.book}</div></td>
      <td class="td-normal">${i.issued}</td>
      <td class="${i.status === 'overdue' ? 'td-overdue' : 'td-normal'}">${i.due}</td>
      <td><span class="badge ${badgeCls}">${badgeLabel}</span></td>
      <td>${i.fine > 0 ? `<span class="td-fine">KES ${i.fine}</span>` : '—'}</td>
      <td>${i.status !== 'returned'
        ? `<button class="btn btn-success btn-xs" onclick="showToast('success','Return recorded!')">Mark Returned</button>`
        : `<span class="td-done">Done</span>`}</td>
    </tr>`;
  }).join('');
}

// ── Admin: Defaulters Table ────────────────────────────────
function renderDefaulters() {
  const tbody = document.getElementById('defaulters-tbody');
  if (!tbody) return;
  const defaulters = ISSUED.filter(i => i.status === 'overdue');
  tbody.innerHTML = defaulters.map(d => {
    const due = new Date(d.due);
    const days = Math.floor((new Date() - due) / 86400000);
    const student = STUDENTS.find(s => s.id === d.memberId);
    return `<tr>
      <td><div class="td-title">${d.member}</div><div class="td-sub">${d.memberId}</div></td>
      <td class="td-sm">${student?.dept || '—'}</td>
      <td><div class="td-title td-title-sm">${d.book}</div></td>
      <td class="td-sm">${d.issued}</td>
      <td class="td-overdue">${d.due}</td>
      <td><span class="badge badge-red">${days} days</span></td>
      <td><span class="fine-amount">KES ${d.fine}</span></td>
      <td class="td-actions">
        <button class="btn btn-outline btn-xs"
          onclick="showToast('warn','Reminder sent to ${d.member}!')">${bi('envelope-fill')} Remind</button>
        <button class="btn btn-success btn-xs"
          onclick="showToast('success','Return & fine cleared!')">${bi('check-lg')} Clear</button>
      </td>
    </tr>`;
  }).join('');
}

// ── Admin: Activities Table ────────────────────────────────
function renderActivities() {
  const tbody = document.getElementById('activities-tbody');
  if (!tbody) return;
  tbody.innerHTML = ACTIVITIES.map(a => {
    const badge = a.type.includes('Issued') ? 'badge-gold' :
                  a.type.includes('Returned') ? 'badge-green' :
                  a.type.includes('Fine') ? 'badge-red' : 'badge-blue';
    return `<tr>
      <td class="td-num">#${a.id}</td>
      <td class="td-muted">${a.time}</td>
      <td><span class="badge ${badge}">${a.type}</span></td>
      <td>${a.member}</td>
      <td class="td-muted">${a.book}</td>
      <td class="td-sm">${a.librarian}</td>
    </tr>`;
  }).join('');
}

// ── Admin: Record Activity ─────────────────────────────────
function recordActivity() {
  const type = document.getElementById('act-type')?.value;
  const member = document.getElementById('act-member')?.value;
  const book = document.getElementById('act-book')?.value;
  if (!member || !book) { showToast('warn', 'Please fill in all required fields'); return; }
  const newAct = {
    id: 1000 + ACTIVITIES.length + 1,
    time: new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}),
    type, member, book, librarian: 'Admin User'
  };
  ACTIVITIES.unshift(newAct);
  renderActivities();
  document.getElementById('act-member').value = '';
  document.getElementById('act-book').value = '';
  document.getElementById('act-notes').value = '';
  showToast('success', 'Activity recorded successfully!');
}

// ── Admin: Issue Dates ─────────────────────────────────────
function setAdminIssueDates() {
  const today = new Date();
  const due = new Date(today); due.setDate(due.getDate() + 14);
  const fmt = d => d.toISOString().split('T')[0];
  const id = document.getElementById('ai-issue-date');
  const dd = document.getElementById('ai-due-date');
  if (id) id.value = fmt(today);
  if (dd) dd.value = fmt(due);
}

// ── Admin: Issue Book ──────────────────────────────────────
function adminIssueBook() {
  const member = document.getElementById('ai-member')?.value;
  const book = document.getElementById('ai-book')?.value;
  if (!member || !book) { showToast('warn', 'Please fill in Member ID and Book ID'); return; }
  showToast('success', 'Book issued successfully! Transaction recorded.');
  const prev = document.getElementById('ai-member-preview');
  const prevText = document.getElementById('ai-member-preview-text');
  if (prev && prevText) { prev.style.display = ''; prevText.textContent = 'Issue recorded for ' + member; }
}

// ── Admin: Member Lookup ───────────────────────────────────
function previewMember(val) {
  const result = document.getElementById('member-lookup-result');
  if (!result) return;
  if (!val || val.length < 3) {
    result.innerHTML = `<div class="empty-state empty-state-sm">
      <div class="e-icon">${bi('person')}</div>
      <div class="e-sub">Enter a Member ID to view details</div>
    </div>`;
    return;
  }
  const m = STUDENTS.find(s =>
    s.id.toLowerCase().includes(val.toLowerCase()) || s.name.toLowerCase().includes(val.toLowerCase())
  );
  if (m) {
    const canBorrow = m.fine === 0 && m.borrowed < 3 && m.status === 'active';
    result.innerHTML = `
      <div class="member-lookup-card">
        <div class="member-lookup-avatar">${m.name[0]}</div>
        <div>
          <div class="member-lookup-name">${m.name}</div>
          <div class="member-lookup-sub">${m.id} · ${m.type}</div>
        </div>
        <div class="member-lookup-badge">${m.status === 'active'
          ? '<span class="badge badge-green">Active</span>'
          : '<span class="badge badge-red">Suspended</span>'}</div>
      </div>
      <div class="member-lookup-grid">
        <div class="member-stat-box">
          <div class="member-stat-label">Department</div>
          <div class="member-stat-value">${m.dept}</div>
        </div>
        <div class="member-stat-box">
          <div class="member-stat-label">Active Borrows</div>
          <div class="member-stat-value">${m.borrowed} / 3</div>
        </div>
        <div class="member-stat-box ${m.fine > 0 ? 'member-stat-box-danger' : ''}">
          <div class="member-stat-label">Outstanding Fine</div>
          <div class="member-stat-value ${m.fine > 0 ? 'member-stat-value-bad' : 'member-stat-value-ok'}">
            ${m.fine > 0 ? 'KES ' + m.fine : 'Clear'}
          </div>
        </div>
        <div class="member-stat-box">
          <div class="member-stat-label">Can Borrow</div>
          <div class="member-stat-value ${canBorrow ? 'member-stat-value-ok' : 'member-stat-value-bad'}">
            ${canBorrow ? 'Yes' : 'No'}
          </div>
        </div>
      </div>`;
  } else {
    result.innerHTML = `<div class="alert alert-danger">
      <span class="alert-icon">${bi('x-circle-fill')}</span>
      <div>No member found for "<strong>${val}</strong>"</div>
    </div>`;
  }
}

// ── Toast ──────────────────────────────────────────────────
function showToast(type, msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  const icons = {
    success: bi('check-circle-fill'),
    warn: bi('exclamation-triangle-fill'),
    danger: bi('x-octagon-fill')
  };
  t.innerHTML = `<span class="toast-icon">${icons[type] || bi('info-circle-fill')}</span><span>${msg}</span>`;
  t.style.borderColor = type === 'success' ? 'rgba(30,125,90,.5)' :
                        type === 'warn'    ? 'rgba(201,168,76,.5)' :
                                             'rgba(192,57,43,.5)';
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}