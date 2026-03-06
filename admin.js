/* EB JOINERY - ADMIN PANEL LOGIC */

let isLoggedIn = false;

// We still keep these for local dev fallback or simple UI checks, 
// but doLogin now calls the Netlify function for real security.
const ADMIN_USER_LOCAL = 'EdBates';
const ADMIN_PASS_LOCAL = 'EBJoinery2025!';

/* ═══════════════════════════════════════
   ADMIN AUTH
═══════════════════════════════════════ */
function openAdmin() {
    if (isLoggedIn) { openAdminPanel(); return; }
    const m = document.getElementById('login-modal');
    if (m) m.classList.add('open');
    const u = document.getElementById('login-user');
    if (u) u.focus();
}

function closeLogin() {
    const m = document.getElementById('login-modal');
    if (m) m.classList.remove('open');
}

async function doLogin() {
    const username = document.getElementById('login-user')?.value.trim();
    const password = document.getElementById('login-pass')?.value;
    const errorEl = document.getElementById('login-error');
    const btn = document.getElementById('login-btn');

    if (!username || !password) return;

    if (btn) btn.textContent = 'Authenticating...';

    try {
        const response = await fetch('/.netlify/functions/admin-auth', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (data.success) {
            isLoggedIn = true;
            closeLogin();
            openAdminPanel();
            showToast('Welcome back, Ed');
        } else {
            if (errorEl) errorEl.style.display = 'block';
            if (btn) btn.textContent = 'Login';
        }
    } catch (err) {
        console.error('Auth error:', err);
        // Fallback for local development if Netlify functions aren't running
        if (username === ADMIN_USER_LOCAL && password === ADMIN_PASS_LOCAL) {
            isLoggedIn = true;
            closeLogin();
            openAdminPanel();
            showToast('Logged in (Local Fallback)');
        } else {
            showToast('Connection error. Try again.');
            if (btn) btn.textContent = 'Login';
        }
    }
}

function openAdminPanel() {
    const m = document.getElementById('admin-modal');
    if (m) m.classList.add('open');

    // Default to photos tab
    const firstTab = document.querySelector('.admin-tab');
    if (firstTab) switchTab('photos', firstTab);

    refreshManageTable();
    refreshBlogAdmin();
    refreshTestAdmin();

    const dateEl = document.getElementById('blog-date');
    if (dateEl) dateEl.value = new Date().toISOString().split('T')[0];
}

function closeAdminPanel() {
    const m = document.getElementById('admin-modal');
    if (m) m.classList.remove('open');
}

/* ═══════════════════════════════════════
   ADMIN TABS
═══════════════════════════════════════ */
function switchTab(name, btn) {
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));

    const tab = document.getElementById('tab-' + name);
    if (tab) tab.classList.add('active');
    if (btn) btn.classList.add('active');

    if (name === 'manage') refreshManageTable();
    if (name === 'blog') refreshBlogAdmin();
    if (name === 'testimonials') refreshTestAdmin();
}

/* ═══════════════════════════════════════
   BATCH PHOTO UPLOAD
═══════════════════════════════════════ */
let batchQueue = [];

function handleBatchSelect(e) {
    processBatchFiles(Array.from(e.target.files));
    e.target.value = '';
}

function processBatchFiles(files) {
    const imgs = files.filter(f => f.type.startsWith('image/'));
    if (!imgs.length) { showToast('Please select image files'); return; }

    imgs.forEach(file => {
        const reader = new FileReader();
        reader.onload = ev => {
            batchQueue.push({
                id: Date.now() + Math.random(),
                file,
                dataUrl: ev.target.result,
                category: 'kitchens',
                title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
            });
            renderBatchQueue();
        };
        reader.readAsDataURL(file);
    });
}

function renderBatchQueue() {
    const qEl = document.getElementById('batch-queue');
    const countEl = document.getElementById('batch-count');
    const actEl = document.getElementById('batch-actions');

    if (!batchQueue.length) {
        if (qEl) qEl.innerHTML = '';
        if (countEl) countEl.textContent = '';
        if (actEl) actEl.style.display = 'none';
        return;
    }

    if (countEl) countEl.textContent = batchQueue.length + ' photo' + (batchQueue.length > 1 ? 's' : '') + ' queued';
    if (actEl) actEl.style.display = 'flex';

    if (qEl) qEl.innerHTML = batchQueue.map((item, i) => `
    <div class="batch-item">
      <img class="batch-thumb" src="${item.dataUrl}" alt="">
      <div class="batch-info">
        <div class="batch-filename">${item.file.name}</div>
        <select class="batch-select" onchange="batchQueue[${i}].category=this.value">
          ${Object.entries(catMeta).map(([k, v]) => `<option value="${k}"${item.category === k ? ' selected' : ''}>${v.icon} ${v.label}</option>`).join('')}
        </select>
      </div>
      <button class="batch-remove" onclick="removeBatchItem(${i})">✕</button>
    </div>
  `).join('');
}

function removeBatchItem(i) { batchQueue.splice(i, 1); renderBatchQueue(); }
function clearBatch() { batchQueue = []; renderBatchQueue(); }

function setAllCategory() {
    const cat = document.getElementById('bulk-cat-select')?.value;
    if (!cat) return;
    batchQueue.forEach(item => item.category = cat);
    renderBatchQueue();
    showToast('All photos set to ' + catMeta[cat].label);
}

function uploadAllPhotos() {
    if (!batchQueue.length) { showToast('No photos in queue'); return; }

    const newItems = batchQueue.map((item, i) => ({
        id: Date.now() + i,
        title: item.title || catMeta[item.category].label + ' Project',
        category: item.category,
        img: item.dataUrl,
        large: i === 0 && batchQueue.length > 2
    }));

    // Update local portfolio (in-memory)
    portfolioItems = [...newItems, ...portfolioItems];

    const count = batchQueue.length;
    clearBatch();

    // Refresh any visible lists (if on same page, but admin is mostly separate)
    // These functions are in main.js
    if (typeof renderPortfolio === 'function') renderPortfolio();
    if (typeof renderHomePortfolio === 'function') renderHomePortfolio();

    refreshManageTable();
    showToast('✓ ' + count + ' photo' + (count > 1 ? 's' : '') + ' added!');
}

/* ═══════════════════════════════════════
   MANAGE TABLE
═══════════════════════════════════════ */
function refreshManageTable() {
    const tbody = document.getElementById('manage-tbody');
    if (!tbody) return;

    tbody.innerHTML = portfolioItems.map(item => `
    <tr>
      <td><img class="manage-thumb" src="${item.img}" alt=""></td>
      <td>${item.title}</td>
      <td>${catMeta[item.category]?.label || item.category}</td>
      <td><button class="del-btn" onclick="deletePortfolioItem(${item.id})">🗑 Delete</button></td>
    </tr>
  `).join('');
}

function deletePortfolioItem(id) {
    portfolioItems = portfolioItems.filter(i => i.id !== id);
    refreshManageTable();
    if (typeof renderPortfolio === 'function') renderPortfolio();
    showToast('Photo removed');
}

/* ═══════════════════════════════════════
   BLOG ADMIN
═══════════════════════════════════════ */
async function addBlogPost() {
    const title = document.getElementById('blog-title')?.value.trim();
    const author = document.getElementById('blog-author')?.value.trim() || 'Ed Bates';
    const tag = document.getElementById('blog-tag')?.value;
    const content = document.getElementById('blog-content')?.value.trim();
    const featured = document.getElementById('blog-featured')?.checked || false;
    // Fallback image if none provided
    const img = 'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657462/473543467_1775541593199303_6408288811264688599_n_yvgu8e.webp';

    if (!title || !content) { showToast('Please add a title and content'); return; }

    const btn = event.target;
    btn.disabled = true;
    btn.textContent = 'Publishing...';

    try {
        const response = await fetch('/.netlify/functions/publish-post', {
            method: 'POST',
            body: JSON.stringify({ title, author, tag, content, featured, img })
        });

        const data = await response.json();

        if (data.success) {
            showToast('✓ Blog post published!');
            ['blog-title', 'blog-content'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });

            // Refresh local list
            const res = await fetch('data/posts.json');
            blogPosts = await res.json();
            if (typeof renderBlog === 'function') renderBlog();
            refreshBlogAdmin();
        } else {
            showToast('Error: ' + data.message);
        }
    } catch (err) {
        console.error('Publish error:', err);
        showToast('Connection failed.');
    } finally {
        btn.disabled = false;
        btn.textContent = 'Publish Post';
    }
}

function refreshBlogAdmin() {
    const el = document.getElementById('blog-list-admin');
    if (!el) return;

    el.innerHTML = blogPosts.map(p => `
    <div style="background:rgba(255,255,255,0.04);padding:0.6rem 0.8rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:0.8rem;color:rgba(255,255,255,0.6)">
      <div><strong style="color:rgba(255,255,255,0.85)">${p.title}</strong><span style="margin-left:0.6rem;color:var(--accent)">${p.tag}</span></div>
      <button class="del-btn" onclick="deleteBlogPost(${p.id})">🗑</button>
    </div>
  `).join('');
}

function deleteBlogPost(id) {
    blogPosts = blogPosts.filter(p => p.id !== id);
    if (typeof renderBlog === 'function') renderBlog();
    refreshBlogAdmin();
    showToast('Post removed');
}

/* ═══════════════════════════════════════
   TESTIMONIALS ADMIN
═══════════════════════════════════════ */
function addTestimonial() {
    const name = document.getElementById('test-name')?.value.trim();
    const location = document.getElementById('test-location')?.value.trim();
    const text = document.getElementById('test-text')?.value.trim();
    const stars = parseInt(document.getElementById('test-stars')?.value || 5);

    if (!name || !text) { showToast('Please add name and testimonial text'); return; }

    testimonials.unshift({ id: Date.now(), name, location: location || 'Local', stars, text });
    ['test-name', 'test-location', 'test-text'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });

    if (typeof renderTestimonials === 'function') renderTestimonials();
    refreshTestAdmin();
    showToast('✓ Testimonial added!');
}

function refreshTestAdmin() {
    const el = document.getElementById('test-list-admin');
    if (!el) return;

    el.innerHTML = testimonials.map(t => `
    <div style="background:rgba(255,255,255,0.04);padding:0.6rem 0.8rem;display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:0.8rem;color:rgba(255,255,255,0.6)">
      <div><strong style="color:rgba(255,255,255,0.85)">${t.name}</strong> — ${'★'.repeat(t.stars)}</div>
      <button class="del-btn" onclick="deleteTestimonial(${t.id})">🗑</button>
    </div>
  `).join('');

    refreshPendingReviews();
}

async function refreshPendingReviews() {
    const el = document.getElementById('pending-reviews-list');
    if (!el) return;

    try {
        const res = await fetch('data/pending_reviews.json');
        const pending = await res.json();

        if (!pending.length) {
            el.innerHTML = '<p style="font-size:0.8rem;color:rgba(255,255,255,0.4)">No pending reviews.</p>';
            return;
        }

        el.innerHTML = pending.map(r => `
      <div style="background:rgba(255,255,255,0.06);border-left:3px solid var(--accent);padding:0.8rem;margin-bottom:0.6rem;font-size:0.85rem;">
        <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;">
          <strong style="color:var(--accent)">${r.name} (${r.stars}★)</strong>
          <div style="display:flex;gap:0.4rem">
            <button class="admin-btn" onclick="handleReviewAction(${r.id}, 'approve')" style="padding:0.2rem 0.5rem;font-size:0.7rem;background:var(--accent)">Approve</button>
            <button class="del-btn" onclick="handleReviewAction(${r.id}, 'reject')" style="padding:0.2rem 0.5rem;font-size:0.7rem;">Reject</button>
          </div>
        </div>
        <p style="color:rgba(255,255,255,0.7);margin:0">${r.text}</p>
      </div>
    `).join('');
    } catch (err) {
        el.innerHTML = '<p style="font-size:0.8rem;color:rgba(255,0,0,0.5)">Failed to load pending reviews.</p>';
    }
}

async function handleReviewAction(id, action) {
    if (action === 'reject' && !confirm('Are you sure you want to delete this pending review?')) return;

    showToast(action === 'approve' ? 'Approving...' : 'Deleting...');

    try {
        const response = await fetch('/.netlify/functions/approve-review', {
            method: 'POST',
            body: JSON.stringify({ id, action })
        });

        const data = await response.json();

        if (data.success) {
            showToast('✓ ' + (action === 'approve' ? 'Published!' : 'Removed.'));
            // Reload everything
            const res = await fetch('data/reviews.json');
            testimonials = await res.json();
            if (typeof renderTestimonials === 'function') renderTestimonials();
            refreshTestAdmin();
        } else {
            showToast('Error: ' + data.message);
        }
    } catch (err) {
        console.error('Approval error:', err);
        showToast('Failed to contact server.');
    }
}

function deleteTestimonial(id) {
    testimonials = testimonials.filter(t => t.id !== id);
    if (typeof renderTestimonials === 'function') renderTestimonials();
    refreshTestAdmin();
    showToast('Testimonial removed');
}

/* ═══════════════════════════════════════
   REVIEW REQUESTS
═══════════════════════════════════════ */
async function sendReviewRequest() {
    const clientName = document.getElementById('req-name')?.value.trim();
    const email = document.getElementById('req-email')?.value.trim();
    const btn = event.target;

    if (!clientName || !email) { showToast('Name and Email required'); return; }

    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    try {
        const response = await fetch('/.netlify/functions/send-review-request', {
            method: 'POST',
            body: JSON.stringify({ email, clientName })
        });

        const data = await response.json();

        if (data.success) {
            showToast('✓ Review request sent to ' + clientName);
            document.getElementById('req-name').value = '';
            document.getElementById('req-email').value = '';
        } else {
            showToast('Error: ' + data.message);
        }
    } catch (err) {
        console.error('Request error:', err);
        showToast('Failed to send request. Check console.');
    } finally {
        btn.textContent = originalText;
        btn.disabled = false;
    }
}

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('batch-drop');
    if (dropZone) {
        dropZone.addEventListener('dragover', e => { e.preventDefault(); dropZone.classList.add('dragover'); });
        dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
        dropZone.addEventListener('drop', e => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            processBatchFiles(Array.from(e.dataTransfer.files));
        });
    }
});

// Close modals on clicking overlay
document.addEventListener('click', function (e) {
    if (e.target.id === 'login-modal') closeLogin();
    if (e.target.id === 'admin-modal') closeAdminPanel();
});
