import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero-banner">
      <div class="wrap">
        <img class="logo" src="assets/PupLogoDraft.png" alt="Pupocalypse"/>
        <h1 class="title">Pupocalypse</h1>
        <p class="tag">Premier worldwide dog rescue — powered by community & art.</p>
        <p class="mission">
          Pupocalypse is aiming to be the premier worldwide dog rescue empire, selling art donated by
          artists to help facilitate dog care and rescue worldwide.
        </p>
        <div class="cta">
          <a routerLink="/about" class="btn primary">About</a>
          <a routerLink="/store" class="btn">Store</a>
          <a routerLink="/contact" class="btn">Contact</a>
        </div>
      </div>
    </section>

    <section class="sections wrap">
      <div class="card">
        <h3>Rescue First</h3>
        <p>Every purchase supports vet care, transport, and shelter partners around the globe.</p>
      </div>
      <div class="card">
        <h3>Artist-Backed</h3>
        <p>Limited-run artwork donated by artists who care about dogs as much as we do.</p>
      </div>
      <div class="card">
        <h3>Built To Grow</h3>
        <p>A simple start with room to expand into adoptions, fosters, events, and more.</p>
      </div>
    </section>
  `,
  styles: [`
    :host { display:block; }
    .wrap { max-width: 1040px; margin: 0 auto; padding: 0 16px; }

    /* Hero banner using neon palette */
    .hero-banner {
      background: radial-gradient(1000px 400px at 50% -120px, rgba(176,38,255,.3), transparent 60%),
                  linear-gradient(180deg, #141414, #0d0d0d 60%);
      color: #fff;
      padding: 72px 0 84px;
      text-align: center;
      border-bottom: 4px solid var(--neon-purple);
    }
    .hero-banner .logo { height: 200px; margin-bottom: 22px; filter: drop-shadow(0 12px 26px rgba(176,38,255,.4)); }
    @media (min-width: 768px) {
      .hero-banner .logo { height: 240px; }
    }
    .hero-banner .title { font-size: 44px; margin: 0 0 8px; letter-spacing: 0.6px; color: var(--neon-green); text-shadow: 0 0 8px rgba(57,255,20,.35); }
    .hero-banner .tag { font-size: 18px; margin: 0 0 8px; color: #f7f7f7; }
    .hero-banner .mission { max-width: 840px; margin: 0 auto 22px; color: #e8e8e8; line-height: 1.65; }
    .cta { display:flex; gap: 12px; justify-content:center; margin-top: 8px; flex-wrap: wrap; }
    .btn { display:inline-block; padding: 10px 16px; border-radius: 999px; text-decoration:none; color: var(--blue-900); background:#fff; font-weight:700; }
    .btn.primary { background: var(--yellow-500); color: #1b2842; }
    .btn:hover { opacity: .92; }

    /* Feature cards */
    .sections { display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 18px; padding: 36px 0; }
    .card { background:#0f0f0f; border:1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 20px; box-shadow: 0 10px 26px rgba(0,0,0,0.45); }
    .card h3 { margin: 0 0 6px; color: var(--neon-green); }
    .card p { margin: 0; color: #d6c8ff; }
  `]
})
export class HomeComponent {}


