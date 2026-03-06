/* ═══════════════════════════════════════
   CONFIG
═══════════════════════════════════════ */
const ADMIN_USER = 'EdBates';
const ADMIN_PASS = 'J01nery1!';
let isLoggedIn = false;

const catMeta = {
  kitchens:           { label: 'Fitted Kitchens',   icon: '🍳' },
  'loft-conversions': { label: 'Loft Conversions',  icon: '🏗️' },
  bathrooms:          { label: 'Bathrooms',          icon: '🛁' },
  staircases:         { label: 'Staircases',         icon: '🪜' },
  extensions:         { label: 'Extensions',         icon: '🏠' },
  joinery:            { label: 'Joinery',            icon: '🚪' },
  outdoor:            { label: 'Outdoor / Decking',  icon: '🌿' },
};

/* ═══════════════════════════════════════
   CLOUDINARY IMAGE POOLS
═══════════════════════════════════════ */
const imagePools = {
  kitchens: [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657462/473543467_1775541593199303_6408288811264688599_n_yvgu8e.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657461/473421992_1775541536532642_3137829702208707218_n_xplshr.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657447/471402948_1763736897713106_5932331483031696297_n_rmhblh.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657444/76999029_570511310369010_8075333128379432960_n_iabduk.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657435/72277850_536253063794835_5522861457668046848_n_plyjhd.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657429/52360970_400296947390448_3990449514803625984_n_c7tfac.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657424/52141223_400296944057115_3790389366925295616_n_i6wcwy.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657420/51895283_393318818088261_6268790658715090944_n_id8i3z.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657411/51685646_393318828088260_8310427307311366144_n_ei0fhz.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657406/51535766_393321731421303_842863185533861888_n_lzmitg.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657405/51459389_393338531419623_5847514543764275200_n_xxlcwj.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657402/51443382_393337471419729_3143031005351247872_n_mrgk0q.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657399/51421342_393327404754069_3305062709631909888_n_ul3sgo.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657398/51419458_393331968086946_5177844887944429568_n_mcgyla.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657396/51398931_393318781421598_479173515346444288_n_uznesl.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657385/51351666_393331974753612_1044257350254329856_n_twacqe.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657381/51319384_393334398086703_432353050355564544_n_fjretm.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657365/51206992_393321878087955_7983111972851810304_n_t85tpc.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657363/51202996_393327398087403_8111284293864521728_n_txlpf6.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657360/51135323_393331951420281_9025751752523120640_n_zkxbt1.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657356/50723044_387189022034574_376915961845907456_n_vnxzy0.webp',
  ],
  'loft-conversions': [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657435/72456738_536253213794820_6565817282507833344_n_wblrzn.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657432/52657759_400294480724028_321680453331320832_n_khjjs0.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657426/52165015_400294487390694_1268684071668547584_n_dbw4gj.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657418/51877503_393340118086131_5984234339322298368_n_ekcelr.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657387/51369931_393344591419017_8000208858972684288_n_mbgbdz.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657369/51223914_393325148087628_7594860561519607808_n_zxw8kq.webp',
  ],
  bathrooms: [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657442/76695094_570509973702477_6500467765961293824_n_soetm5.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657415/51713694_393326444754165_1913591639004151808_n_smc2tz.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657383/51335606_393334838086659_2130292444397305856_n_o7bx9z.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657379/51313260_393326418087501_925403235668197376_n_ess3ya.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657361/51166580_393341768085966_7652594237761912832_n_flkkee.webp',
  ],
  staircases: [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657455/473338527_1775541596532636_6108998315939064435_n_e1eetz.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657448/471562724_1763736917713104_6456562297065201791_n_eympel.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657376/51294651_393323381421138_4683686747098316800_n_kvolqe.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657374/51286740_393329841420492_2499513469821255680_n_dzfhji.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657357/51116771_393329858087157_4999818502115164160_n_g2iwro.webp',
  ],
  joinery: [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657457/473387678_1775541639865965_5052939221261178285_n_bl4ecx.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657452/471784506_1763736904379772_1753595621559243269_n_ppelo7.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657440/74272832_545489676204507_3670628159541215232_n_fvhuv7.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657391/51392657_393343424752467_5522727944314683392_n_wwal9n.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657389/51381384_393343418085801_715967260082044928_n_m4myx4.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657371/51227918_393343818085761_6305663133339877376_n_gxosbi.webp',
  ],
  outdoor: [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657417/51870261_393344058085737_442346614619635712_n_m2tige.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657394/51398918_393342051419271_6114159049941450752_n_ddqgdr.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657373/51243236_393342601419216_6636356712980807680_n_zzf8qu.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657410/51675438_393320061421470_1368170258866634752_n_eiefl3.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657367/51217567_393320101421466_3406700538006339584_n_xe5ria.webp',
  ],
  // Extensions — using loft/joinery photos until dedicated shots are available
  extensions: [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657435/72456738_536253213794820_6565817282507833344_n_wblrzn.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657432/52657759_400294480724028_321680453331320832_n_khjjs0.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657426/52165015_400294487390694_1268684071668547584_n_dbw4gj.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657452/471784506_1763736904379772_1753595621559243269_n_ppelo7.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657440/74272832_545489676204507_3670628159541215232_n_fvhuv7.webp',
  ],
  // Alias so data-pool="loft" on services page works
  loft: [
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657435/72456738_536253213794820_6565817282507833344_n_wblrzn.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657432/52657759_400294480724028_321680453331320832_n_khjjs0.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657426/52165015_400294487390694_1268684071668547584_n_dbw4gj.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657418/51877503_393340118086131_5984234339322298368_n_ekcelr.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657387/51369931_393344591419017_8000208858972684288_n_mbgbdz.webp',
    'https://res.cloudinary.com/die5rq3ua/image/upload/v1772657369/51223914_393325148087628_7594860561519607808_n_zxw8kq.webp',
  ],
};

const allImages = Object.values(imagePools).flat();

/* ═══════════════════════════════════════
   HELPERS
═══════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
function initFeaturedHero() {
  const picks = shuffle(allImages).slice(0, 3);
  document.querySelectorAll('.hero-img-cell img').forEach((img, i) => {
    if (picks[i]) img.src = picks[i];
  });
}

/* ═══════════════════════════════════════
   SERVICE CAROUSELS
═══════════════════════════════════════ */
function initServiceCarousels() {
  document.querySelectorAll('.service-carousel[data-pool]').forEach(carousel => {
    const pool = imagePools[carousel.dataset.pool];
    if (!pool || !pool.length) return;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      /* MOBILE — one photo, fills the panel edge to edge via position:absolute */
      const panel = carousel.parentElement;
      if (panel) {
        panel.style.cssText = 'position:relative;min-height:300px;overflow:hidden;padding:0;margin:0;';
      }
      carousel.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;overflow:hidden;display:block;';

      const deck = shuffle([...pool]);
      let deckIdx = 0;

      const imgA = document.createElement('img');
      const imgB = document.createElement('img');
      [imgA, imgB].forEach(img => {
        img.alt = 'EB Joinery work';
        img.loading = 'lazy';
        img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity 0.9s ease;';
      });
      imgA.src = deck[deckIdx++ % deck.length]; imgA.style.opacity = '1';
      imgB.src = deck[deckIdx++ % deck.length]; imgB.style.opacity = '0';
      carousel.appendChild(imgA);
      carousel.appendChild(imgB);

      let showingA = true;
      setInterval(() => {
        const nextSrc = deck[deckIdx++ % deck.length];
        if (showingA) {
          imgB.src = nextSrc; imgB.style.opacity = '1'; imgA.style.opacity = '0';
        } else {
          imgA.src = nextSrc; imgA.style.opacity = '1'; imgB.style.opacity = '0';
        }
        showingA = !showingA;
      }, 3500);

    } else {
      /* DESKTOP — 3 unique photos, no gaps, fills full panel height */
      carousel.style.cssText = 'display:grid;grid-template-columns:repeat(3,1fr);gap:0;width:100%;height:100%;min-height:420px;';

      const deck = shuffle([...pool]);
      carousel.innerHTML = deck.slice(0, 3).map(src =>
        `<img src="${src}" alt="EB Joinery work" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">`
      ).join('');

      let deckIdx = 3;
      let slotIdx = 0;
      setInterval(() => {
        const imgs = carousel.querySelectorAll('img');
        if (!imgs.length) return;
        if (deckIdx >= deck.length) {
          deck.splice(0, deck.length, ...shuffle([...pool]));
          deckIdx = 0;
        }
        const nextSrc = deck[deckIdx++];
        const visible = [...imgs].map(i => i.src);
        if (!visible.some(s => s.includes(nextSrc.split('/').pop()))) {
          imgs[slotIdx % imgs.length].src = nextSrc;
        }
        slotIdx = (slotIdx + 1) % imgs.length;
      }, 3000);
    }
  });
}

/* ═══════════════════════════════════════
   PORTFOLIO ITEMS (built from imagePools)
═══════════════════════════════════════ */
const titleMap = {
  kitchens: 'Kitchen Project',
  'loft-conversions': 'Loft Conversion',
  bathrooms: 'Bathroom Renovation',
  staircases: 'Staircase Installation',
  joinery: 'Bespoke Joinery',
  outdoor: 'Outdoor Project',
  extensions: 'Extension',
};

let portfolioItems = [];
let _pid = 1;
Object.entries(imagePools).forEach(([cat, imgs]) => {
  imgs.forEach((img, i) => {
    portfolioItems.push({ id: _pid++, title: `${titleMap[cat]} ${i + 1}`, category: cat, img, large: i === 0 });
  });
});

/* ═══════════════════════════════════════
   BLOG & TESTIMONIALS
═══════════════════════════════════════ */
let blogPosts = [
  { id: 1, featured: true, title: '5 Ways to Add Value to Your Home', author: 'Ed Bates', date: '12 Nov 2024', tag: 'Tips', excerpt: 'Quality home improvements can transform your property and significantly boost its market value. Here are five upgrades that offer the best return on investment...', img: imagePools.kitchens[0] },
  { id: 2, title: 'How to Choose the Right Wood for Your Joinery', author: 'Ed Bates', date: '28 Oct 2024', tag: 'Guide', img: imagePools.joinery[0] },
  { id: 3, title: 'Our Latest Loft Conversion — Before & After', author: 'Ed Bates', date: '5 Oct 2024', tag: 'Project', img: imagePools['loft-conversions'][0] },
  { id: 4, title: 'Bathroom Trends for 2025', author: 'Ed Bates', date: '18 Sep 2024', tag: 'Tips', img: imagePools.bathrooms[0] },
];

let testimonials = [
  { id: 1, name: 'Sarah M.', location: 'Manchester', stars: 5, text: 'EB fitted our kitchen from scratch and the result is absolutely stunning. Every detail was perfect and the team were so professional throughout.' },
  { id: 2, name: 'James T.', location: 'Salford', stars: 5, text: 'Our loft conversion is incredible — they turned a dusty attic into a proper bedroom and study. Finished on time and exactly to budget.' },
  { id: 3, name: 'Claire W.', location: 'Stockport', stars: 5, text: 'Had our bathroom completely redone. The tiling is immaculate, the joinery is beautiful. Cleaned up perfectly every day. Highly recommend.' },
  { id: 4, name: 'David R.', location: 'Altrincham', stars: 5, text: 'The built-in wardrobes have transformed our bedroom. Great use of space and exactly what we envisioned. Professional from first call to final finish.' },
  { id: 5, name: 'Emma L.', location: 'Didsbury', stars: 5, text: 'The garden room has become our favourite space. Quality materials, beautifully crafted, and they finished on time and on budget.' },
  { id: 6, name: 'Mark & Sue B.', location: 'Wilmslow', stars: 5, text: "Second time we've used EB — won't be the last. Staircase replacement this time. Absolutely beautiful. The whole house feels transformed." },
];

/* ═══════════════════════════════════════
   PAGE NAVIGATION
═══════════════════════════════════════ */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + name);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === name);
  });
  window.scrollTo(0, 0);
  if (name === 'home') renderHomePortfolio();
  if (name === 'portfolio') renderPortfolio();
  if (name === 'testimonials') renderTestimonials();
  if (name === 'blog') renderBlog();
  return false;
}

function toggleMobile() {
  const m = document.getElementById('mobile-menu');
  if (m) m.classList.toggle('open');
}

/* ═══════════════════════════════════════
   PORTFOLIO RENDER
═══════════════════════════════════════ */
let currentFilter = 'all';

function renderPortfolioGrid(containerId, items, limit) {
  const c = document.getElementById(containerId);
  if (!c) return;
  const list = limit ? items.slice(0, limit) : items;
  c.innerHTML = list.map(item => `
    <div class="portfolio-item${item.large ? ' large' : ''}" data-cat="${item.category}">
      <img src="${item.img}" alt="${item.title}" loading="lazy" width="600" height="400">
      <div class="portfolio-overlay">
        <div class="portfolio-cat">${catMeta[item.category]?.label || item.category}</div>
        <div class="portfolio-title">${item.title}</div>
      </div>
    </div>
  `).join('');
}

function renderHomePortfolio() {
  renderPortfolioGrid('home-portfolio-grid', shuffle(portfolioItems), 6);
}
function renderPortfolio() {
  const filtered = currentFilter === 'all' ? portfolioItems : portfolioItems.filter(i => i.category === currentFilter);
  renderPortfolioGrid('main-portfolio-grid', filtered);
}
function filterPortfolio(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderPortfolio();
}

/* ═══════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════ */
function renderTestimonials() {
  const g = document.getElementById('testimonials-grid');
  if (!g) return;
  g.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <div class="testimonial-text">"${t.text}"</div>
      <div class="testimonial-author">
        <div class="author-avatar">👤</div>
        <div><div class="author-name">${t.name}</div><div class="author-location">${t.location}</div></div>
      </div>
    </div>
  `).join('');
}

function addTestimonial() {
  const name = document.getElementById('test-name')?.value.trim();
  const location = document.getElementById('test-location')?.value.trim();
  const text = document.getElementById('test-text')?.value.trim();
  const stars = parseInt(document.getElementById('test-stars')?.value || 5);
  if (!name || !text) { showToast('Please add name and testimonial text'); return; }
  testimonials.unshift({ id: Date.now(), name, location: location || 'Local', stars, text });
  ['test-name', 'test-location', 'test-text'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  renderTestimonials();
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
}

function deleteTestimonial(id) {
  testimonials = testimonials.filter(t => t.id !== id);
  renderTestimonials();
  refreshTestAdmin();
  showToast('Testimonial removed');
}

/* ═══════════════════════════════════════
   BLOG
═══════════════════════════════════════ */
function renderBlog() {
  const c = document.getElementById('blog-main');
  if (!c) return;
  const featured = blogPosts.find(p => p.featured) || blogPosts[0];
  const rest = blogPosts.filter(p => p.id !== featured.id);
  c.innerHTML = `
    <div class="blog-featured">
      <div class="blog-featured-img">
        <img src="${featured.img}" style="width:100%;height:100%;object-fit:cover" alt="${featured.title}" loading="lazy">
      </div>
      <div class="blog-tag">${featured.tag}</div>
      <div class="blog-title-link">${featured.title}</div>
      <div class="blog-meta">${featured.date} · By ${featured.author}</div>
      <p class="blog-excerpt">${featured.excerpt || ''}</p>
    </div>
    <div class="blog-list">
      ${rest.map(p => `
        <div class="blog-mini">
          <div class="blog-mini-img"><img src="${p.img}" alt="${p.title}" width="76" height="68" loading="lazy"></div>
          <div>
            <div class="blog-mini-title">${p.title}</div>
            <div class="blog-mini-meta">${p.date} · ${p.tag}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function addBlogPost() {
  const title = document.getElementById('blog-title')?.value.trim();
  const author = document.getElementById('blog-author')?.value.trim() || 'Ed Bates';
  const dateVal = document.getElementById('blog-date')?.value;
  const tag = document.getElementById('blog-tag')?.value;
  const content = document.getElementById('blog-content')?.value.trim();
  if (!title || !content) { showToast('Please add a title and content'); return; }
  const date = dateVal ? new Date(dateVal).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  blogPosts.unshift({ id: Date.now(), title, author, date, tag, excerpt: content.substring(0, 220) + (content.length > 220 ? '...' : ''), img: allImages[0] });
  ['blog-title', 'blog-content'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  renderBlog();
  refreshBlogAdmin();
  showToast('✓ Blog post published!');
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
  renderBlog();
  refreshBlogAdmin();
  showToast('Post removed');
}

/* ═══════════════════════════════════════
   ADMIN AUTH
═══════════════════════════════════════ */
function openAdmin() {
  if (isLoggedIn) { openAdminPanel(); return; }
  const m = document.getElementById('login-modal');
  if (m) m.classList.add('open');
  const u = document.getElementById('login-user');
  const p = document.getElementById('login-pass');
  const e = document.getElementById('login-error');
  if (u) u.value = '';
  if (p) p.value = '';
  if (e) e.style.display = 'none';
  setTimeout(() => { if (u) u.focus(); }, 100);
}
function closeLogin() {
  const m = document.getElementById('login-modal');
  if (m) m.classList.remove('open');
}
function doLogin() {
  const u = document.getElementById('login-user')?.value.trim();
  const p = document.getElementById('login-pass')?.value;
  const e = document.getElementById('login-error');
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    isLoggedIn = true;
    closeLogin();
    openAdminPanel();
  } else {
    if (e) e.style.display = 'block';
    const pEl = document.getElementById('login-pass');
    if (pEl) { pEl.value = ''; pEl.focus(); }
  }
}
function openAdminPanel() {
  const m = document.getElementById('admin-modal');
  if (m) m.classList.add('open');
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
      batchQueue.push({ id: Date.now() + Math.random(), file, dataUrl: ev.target.result, category: 'kitchens', title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ') });
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
  portfolioItems = [...newItems, ...portfolioItems];
  const count = batchQueue.length;
  clearBatch();
  renderPortfolio();
  renderHomePortfolio();
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
  renderPortfolio();
  renderHomePortfolio();
  showToast('Photo removed');
}

/* ═══════════════════════════════════════
   CONTACT FORM
═══════════════════════════════════════ */
function submitContact(e) {
  e.preventDefault();
  const form = document.getElementById('contact-form');
  if (!form) return;
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(new FormData(form)).toString()
  })
    .then(() => { showToast("✓ Thank you! We'll be in touch within 24 hours."); form.reset(); })
    .catch(() => showToast('Something went wrong. Please try again.'));
}

/* ═══════════════════════════════════════
   TOAST
═══════════════════════════════════════ */
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ═══════════════════════════════════════
   MODAL OVERLAY CLOSE
═══════════════════════════════════════ */
document.addEventListener('click', function(e) {
  if (e.target.id === 'login-modal') closeLogin();
  if (e.target.id === 'admin-modal') closeAdminPanel();
});

/* ═══════════════════════════════════════
   DRAG & DROP
═══════════════════════════════════════ */
function initDropZone() {
  const dropEl = document.getElementById('batch-drop');
  if (!dropEl) return;
  dropEl.addEventListener('dragover', e => { e.preventDefault(); dropEl.classList.add('dragover'); });
  dropEl.addEventListener('dragleave', () => dropEl.classList.remove('dragover'));
  dropEl.addEventListener('drop', e => {
    e.preventDefault();
    dropEl.classList.remove('dragover');
    processBatchFiles(Array.from(e.dataTransfer.files));
  });
}

/* ═══════════════════════════════════════
   HASH ROUTING
═══════════════════════════════════════ */
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.substring(1);
  const valid = ['home','portfolio','services','about','testimonials','blog','contact'];
  if (valid.includes(hash)) showPage(hash);
});

/* ═══════════════════════════════════════
   INIT
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initFeaturedHero();
  initServiceCarousels();
  renderHomePortfolio();
  renderTestimonials();
  renderBlog();
  renderPortfolio();
  initDropZone();

  // Handle direct hash navigation on load
  const hash = window.location.hash.substring(1);
  const valid = ['home','portfolio','services','about','testimonials','blog','contact'];
  if (hash && valid.includes(hash)) showPage(hash);
});
