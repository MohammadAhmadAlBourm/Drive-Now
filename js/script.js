/* ── Year ─────────────────────────────────── */
document.getElementById('yr').textContent = new Date().getFullYear();

/* ── Set default dates (today + 3 days) ──── */
const today = new Date();
const ret = new Date(today); ret.setDate(today.getDate() + 3);
const fmt = d => d.toISOString().slice(0, 10);
document.getElementById('pickupDate').value = fmt(today);
document.getElementById('returnDate').value = fmt(ret);

/* ── Validate: return >= pickup ────────────  */
document.getElementById('pickupDate').addEventListener('change', function () {
    const rtn = document.getElementById('returnDate');
    if (rtn.value && rtn.value < this.value) rtn.value = this.value;
    rtn.min = this.value;
});

/* ── Swap locations ─────────────────────── */
document.getElementById('swapBtn').addEventListener('click', function () {
    const a = document.getElementById('pickup');
    const b = document.getElementById('dropoff');
    [a.value, b.value] = [b.value, a.value];
    this.querySelector('i').style.transform = 'rotate(180deg)';
    setTimeout(() => this.querySelector('i').style.transform = '', 300);
});

/* ── Navbar scroll state ─────────────────── */
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
    document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
});

/* ── Hamburger menu ──────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMobile() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

/* ── Intersection reveal ─────────────────── */
const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.07 }
);
document.querySelectorAll('.rv').forEach(el => io.observe(el));