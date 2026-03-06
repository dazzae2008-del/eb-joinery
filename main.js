/* ═══════════════════════════════════════
   CONFIG
═══════════════════════════════════════ */
const catMeta = {
  kitchens: { label: 'Fitted Kitchens', icon: '🍳' },
  'loft-conversions': { label: 'Loft Conversions', icon: '🏗️' },
  bathrooms: { label: 'Bathrooms', icon: '🛁' },
  staircases: { label: 'Staircases', icon: '🪜' },
  extensions: { label: 'Extensions', icon: '🏠' },
  joinery: { label: 'Joinery', icon: '🚪' },
  outdoor: { label: 'Outdoor / Decking', icon: '🌿' },
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

function getOptimizedUrl(url, width = 800) {
  if (!url) return '';
  if (typeof url !== 'string') return '';
  if (!url.includes('cloudinary.com')) return url;
  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;
  return `${parts[0]}/upload/f_auto,q_auto,w_${width}/${parts[1]}`;
}

/* ═══════════════════════════════════════
   HERO
═══════════════════════════════════════ */
function initFeaturedHero() {
  const picks = shuffle(allImages).slice(0, 3);
  document.querySelectorAll('.hero-img-cell img').forEach((img, i) => {
    if (picks[i]) img.src = getOptimizedUrl(picks[i], 1200);
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
      imgA.src = getOptimizedUrl(deck[deckIdx++ % deck.length], 800); imgA.style.opacity = '1';
      imgB.src = getOptimizedUrl(deck[deckIdx++ % deck.length], 800); imgB.style.opacity = '0';
      carousel.appendChild(imgA);
      carousel.appendChild(imgB);

      let showingA = true;
      setInterval(() => {
        const nextSrc = getOptimizedUrl(deck[deckIdx++ % deck.length], 800);
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
        `<img src="${getOptimizedUrl(src, 800)}" alt="EB Joinery work" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;">`
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
        const visibleNames = [...imgs].map(i => i.src.split('/').pop().split('?')[0]);
        if (!visibleNames.some(s => nextSrc.includes(s))) {
          imgs[slotIdx % imgs.length].src = getOptimizedUrl(nextSrc, 800);
        }
        slotIdx = (slotIdx + 1) % imgs.length;
      }, 3000);
    }
  });
}

/* ═══════════════════════════════════════
   DATA INITIALIZATION (Async)
   These are populated from hardcoded defaults,
   then updated by remote JSON if available.
═══════════════════════════════════════ */
let portfolioItems = [];
let blogPosts = [];
let testimonials = [];

const titleMap = {
  kitchens: 'Kitchen Project',
  'loft-conversions': 'Loft Conversion',
  bathrooms: 'Bathroom Renovation',
  staircases: 'Staircase Installation',
  joinery: 'Bespoke Joinery',
  outdoor: 'Outdoor Project',
  extensions: 'Extension',
};

function initDataObjects() {
  // Clear and Rebuild Portfolio
  portfolioItems = [];
  let _pid = 1;
  Object.entries(imagePools).forEach(([cat, imgs]) => {
    imgs.forEach((img, i) => {
      portfolioItems.push({ id: _pid++, title: `${titleMap[cat]} ${i + 1}`, category: cat, img, large: i === 0 });
    });
  });

  // Rebuild Blog (with fetched data if available, else fallback)
  if (!blogPosts || blogPosts.length === 0) {
    blogPosts = [
      { id: 1, featured: true, title: '5 Ways to Add Value to Your Home', author: 'Ed Bates', date: '12 Nov 2024', tag: 'Tips', excerpt: 'Quality home improvements can transform your property and significantly boost its market value. Here are five upgrades that offer the best return on investment...', img: imagePools.kitchens[0] },
      { id: 2, title: 'How to Choose the Right Wood for Your Joinery', author: 'Ed Bates', date: '28 Oct 2024', tag: 'Guide', img: imagePools.joinery[0] },
      { id: 3, title: 'Our Latest Loft Conversion — Before & After', author: 'Ed Bates', date: '5 Oct 2024', tag: 'Project', img: imagePools['loft-conversions'][0] },
      { id: 4, title: 'Bathroom Trends for 2025', author: 'Ed Bates', date: '18 Sep 2024', tag: 'Tips', img: imagePools.bathrooms[0] },
    ];
  }

  // Rebuild Testimonials (with fetched data if available, else fallback)
  if (!testimonials || testimonials.length === 0) {
    testimonials = [
      { id: 1, name: 'Sarah M.', location: 'Manchester', stars: 5, text: 'EB fitted our kitchen from scratch and the result is absolutely stunning. Every detail was perfect and the team were so professional throughout.' },
      { id: 2, name: 'James T.', location: 'Salford', stars: 5, text: 'Our loft conversion is incredible — they turned a dusty attic into a proper bedroom and study. Finished on time and exactly to budget.' },
      { id: 3, name: 'Claire W.', location: 'Stockport', stars: 5, text: 'Had our bathroom completely redone. The tiling is immaculate, the joinery is beautiful. Cleaned up perfectly every day. Highly recommend.' },
      { id: 4, name: 'David R.', location: 'Altrincham', stars: 5, text: 'The built-in wardrobes have transformed our bedroom. Great use of space and exactly what we envisioned. Professional from first call to final finish.' },
      { id: 5, name: 'Emma L.', location: 'Didsbury', stars: 5, text: 'The garden room has become our favourite space. Quality materials, beautifully crafted, and they finished on time and on budget.' },
      { id: 6, name: 'Mark & Sue B.', location: 'Wilmslow', stars: 5, text: "Second time we've used EB — won't be the last. Staircase replacement this time. Absolutely beautiful. The whole house feels transformed." },
    ];
  }
}

// Initial build for immediate rendering of hardcoded items
initDataObjects();



function toggleMobile() {
  const m = document.getElementById('mobile-menu');
  if (m) m.classList.toggle('open');
}

/* ═══════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════ */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => {
    observer.observe(el);
  });
}

/* ═══════════════════════════════════════
   PORTFOLIO RENDER
═══════════════════════════════════════ */
let currentFilter = 'all';

function renderPortfolio() {
  const grid = document.getElementById('main-portfolio-grid');
  if (!grid) return;
  const filtered = currentFilter === 'all' ? portfolioItems : portfolioItems.filter(i => i.category === currentFilter);
  grid.innerHTML = filtered.map(p => `
      <div class="portfolio-card filter-item ${p.category}">
        <img src="${getOptimizedUrl(p.img, 800)}" alt="${p.title}" loading="lazy">
        <div class="portfolio-overlay">
          <div style="font-size:0.7rem; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.4rem;">${catMeta[p.category]?.label || p.category}</div>
          <div style="font-family:var(--font-display); font-size:1.3rem;">${p.title}</div>
        </div>
      </div>
    `).join('');
}

function renderHomePortfolio() {
  const c = document.getElementById('home-portfolio-grid');
  if (!c) return;
  const list = shuffle(portfolioItems).slice(0, 6);
  c.innerHTML = list.map(item => `
    <div class="portfolio-item${item.large ? ' large' : ''}" data-cat="${item.category}">
      <img src="${getOptimizedUrl(item.img, 600)}" alt="${item.title}" loading="lazy" width="600" height="400">
      <div class="portfolio-overlay">
        <div class="portfolio-cat">${catMeta[item.category]?.label || item.category}</div>
        <div class="portfolio-title">${item.title}</div>
      </div>
    </div>
  `).join('');
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
function renderReviews() {
  const grid = document.getElementById('testimonials-grid');
  if (!grid) return;
  grid.innerHTML = testimonials.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-meta">
          <img src="https://api.dicebear.com/7.x/initials/svg?seed=${t.name}" alt="${t.name}">
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-loc">${t.location}</div>
          </div>
        </div>
      </div>
    `).join('');
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
        <a href="blog-post.html?id=${featured.id}">
          <img src="${getOptimizedUrl(featured.img, 1200)}" style="width:100%;height:100%;object-fit:cover" alt="${featured.title}" loading="lazy">
        </a>
      </div>
      <div class="blog-tag">${featured.tag}</div>
      <a href="blog-post.html?id=${featured.id}" class="blog-title-link">${featured.title}</a>
      <div class="blog-meta">${featured.date} · By ${featured.author}</div>
      <p class="blog-excerpt">${featured.excerpt || ''}</p>
    </div>
    <div class="blog-list">
      ${rest.map(p => `
        <div class="blog-mini">
          <div class="blog-mini-img">
            <a href="blog-post.html?id=${p.id}">
              <img src="${getOptimizedUrl(p.img, 76)}" alt="${p.title}" width="76" height="68" loading="lazy">
            </a>
          </div>
          <div>
            <a href="blog-post.html?id=${p.id}" class="blog-mini-title" style="text-decoration:none;color:inherit;">${p.title}</a>
            <div class="blog-mini-meta">${p.date} · ${p.tag}</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
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
   INIT
═══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', async () => {
  const path = window.location.pathname;
  // Netlify serves pages at /services (no .html), but can also be /services.html
  const pageFull = path.split('/').pop() || 'index.html';
  // Strip extension for resilient matching
  const page = pageFull.replace(/\.html$/, '') || 'index';

  // Load dynamic data silently — fallback to hardcoded if unavailable
  try {
    const base = window.location.origin;
    const [revRes, postRes, manifestRes] = await Promise.all([
      fetch(base + '/data/reviews.json').then(r => r.ok ? r.json() : null).catch(() => null),
      fetch(base + '/data/posts.json').then(r => r.ok ? r.json() : null).catch(() => null),
      fetch(base + '/data/image_manifest.json').then(r => r.ok ? r.json() : null).catch(() => null)
    ]);

    if (revRes && revRes.length) testimonials = revRes;
    if (postRes && postRes.length) blogPosts = postRes;

    if (manifestRes) {
      Object.keys(manifestRes).forEach(cat => {
        const manifestUrls = manifestRes[cat].map(img => img.url);
        if (imagePools[cat]) {
          imagePools[cat] = [...new Set([...imagePools[cat], ...manifestUrls])];
        } else {
          imagePools[cat] = manifestUrls;
        }
      });
    }

    initDataObjects();
  } catch (err) {
    // silently use hardcoded fallbacks
  }

  // Always init scroll animations and mobile nav
  initScrollAnimations();

  // Page-specific rendering — only runs what this page actually needs
  if (page === 'index' || page === '' || page === 'index.html') {
    initFeaturedHero();
    initServiceCarousels();
    renderHomePortfolio();
  }

  if (page === 'portfolio') {
    renderPortfolio();
  }

  if (page === 'testimonials') {
    renderReviews();
  }

  if (page === 'blog') {
    renderBlog();
  }

  if (page === 'blog-post') {
    initBlogPost();
  }

  if (page === 'services') {
    initServiceCarousels();
  }
});

function initBlogPost() {
  const c = document.getElementById('blog-post-content');
  if (!c) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const post = blogPosts.find(p => p.id === id) || blogPosts[0];

  if (!post) {
    c.innerHTML = '<h1>Post not found</h1><p><a href="blog.html">Return to blog</a></p>';
    return;
  }

  c.innerHTML = `
    <div class="section-label">${post.tag}</div>
    <h1 class="section-title" style="margin-top:0.5rem">${post.title}</h1>
    <div style="color:rgba(255,255,255,0.4); margin-bottom: 2rem;">${post.date} · By ${post.author}</div>
    
    <img src="${getOptimizedUrl(post.img, 1200)}" style="width:100%; border-radius:12px; margin-bottom:2rem;" alt="${post.title}">
    
    <div class="blog-post-body" style="line-height:1.7; color:rgba(255,255,255,0.8); font-size:1.1rem">
      ${post.content ? post.content.split('\n').map(p => `<p>${p}</p>`).join('') : '<p>' + post.excerpt + '</p>'}
    </div>
    
    <div style="margin-top:4rem; padding-top:2rem; border-top: 1px solid rgba(255,255,255,0.1)">
      <a href="blog.html" class="btn-outline">← Back to Blog</a>
    </div>
  `;
}
