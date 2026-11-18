(() => {
  const root = document.documentElement;
  const WHATSAPP = '237652804382';

  /* Thème clair / sombre (choix mémorisé) */
  const themeBtn = document.querySelector('#theme');
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const dark = theme === 'dark';
    themeBtn.setAttribute('aria-label', dark ? 'Activer le thème clair' : 'Activer le thème sombre');
    if (metaTheme) metaTheme.setAttribute('content', dark ? '#080d19' : '#f4f7fb');
  }
  applyTheme(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  themeBtn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try { localStorage.setItem('melkior-theme', next); } catch (e) { /* stockage indisponible */ }
  });

  /* Menu mobile */
  const menu = document.querySelector('#menu');
  const nav = document.querySelector('#navlinks');
  function closeMenu() {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Ouvrir le menu');
    menu.textContent = '☰';
  }
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    menu.textContent = open ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu(); });

  /* Filtres des projets */
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.project');
  filters.forEach(button => button.addEventListener('click', () => {
    const f = button.dataset.filter;
    filters.forEach(b => {
      b.classList.toggle('active', b === button);
      b.setAttribute('aria-pressed', String(b === button));
    });
    cards.forEach(card => { card.hidden = f !== 'all' && card.dataset.category !== f; });
  }));

  /* Apparition douce au défilement */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('in'));
  }

  /* Détails des projets */
  const projects = {
    share: {
      title: 'Mercure Share',
      description: 'Une application Android en Kotlin qui partage la connexion VPN du téléphone avec les autres appareils, sans rien installer sur eux.',
      points: [
        'Création d’un réseau Wi-Fi Direct (DIRECT-MS-Mercure) auquel les appareils se connectent.',
        'Proxy HTTP intégré avec port configurable, ou URL de proxy automatique pour les appareils compatibles.',
        'QR code et guide pas à pas pour connecter un appareil en une minute.',
        'Détection du VPN actif : tout le trafic, DNS compris, passe par le VPN du téléphone.',
        'Partage maintenu en arrière-plan, avec exclusion de l’optimisation de batterie.',
        'Fonctionne avec PC, Mac, iPhone, tablette, Smart TV, PlayStation et Android. Nécessite Android 8 ou plus.'
      ]
    },
    vpn: {
      title: 'Mercure VPN',
      description: 'Une application VPN Android développée en Kotlin, qui s’appuie sur le protocole WireGuard pour chiffrer le trafic du téléphone.',
      points: [
        'Tunnel VPN basé sur WireGuard (bibliothèque wireguard-go).',
        'Intégration au service VPN natif d’Android (VpnService).',
        'Bibliothèques natives pour les architectures ARM et x86, en 32 et 64 bits.',
        'Complémentaire de Mercure Share, qui partage cette connexion avec les autres appareils.'
      ]
    },
    food: {
      title: 'Formulaire restaurant',
      description: 'Un projet de formulaire pour restaurant pour relier une interface web au traitement côté serveur et à une base de données.',
      points: [
        'Création du formulaire et mise en forme de l’interface.',
        'Traitement côté serveur avec PHP.',
        'Connexion à une base de données sur un serveur.'
      ]
    },
    python: {
      title: 'Jeu de hasard Python',
      description: 'Un petit jeu en Python qui se lance dans le terminal et met en pratique la logique de programmation.',
      points: [
        'Choix d’un numéro et d’une couleur.',
        'Gestion du déroulement d’une partie en console.',
        'Simulation d’une mise dans le jeu.'
      ]
    },
    bot: {
      title: 'Bot WhatsApp',
      description: 'Un projet d’automatisation WhatsApp en JavaScript avec la bibliothèque Baileys. Le développement est en cours.',
      points: [
        'Exploration de la bibliothèque Baileys.',
        'Travail sur l’automatisation et la gestion des tâches.',
        'Projet en cours, sans démonstration publique liée au portfolio.'
      ]
    },
    calc: {
      title: 'Calculatrice web',
      description: 'Une calculatrice pour effectuer des opérations simples directement dans une interface web.',
      points: [
        'Addition et soustraction.',
        'Multiplication et division.',
        'Projet accessible en ligne et code disponible sur GitHub.'
      ]
    },
    medical: {
      title: 'MediFlow — Gestion des ressources médicales',
      description: 'Une maquette interactive pour explorer la gestion des ressources d’un hôpital avec des données entièrement fictives.',
      points: [
        'Tableau de bord et alertes sur les ressources.',
        'Suivi des stocks et médicaments, des équipements, des lits et services.',
        'Gestion des demandes internes dans l’environnement de démonstration.',
        'Maquette privée : le bouton Voir la maquette mène à un accès restreint.'
      ]
    }
  };

  const dialog = document.querySelector('#projectdialog');
  document.querySelectorAll('.details').forEach(button => button.addEventListener('click', () => {
    const p = projects[button.dataset.project];
    if (!p) return;
    document.querySelector('#dialogtitle').textContent = p.title;
    document.querySelector('#dialogdescription').textContent = p.description;
    document.querySelector('#dialogpoints').replaceChildren(...p.points.map(text => {
      const li = document.createElement('li');
      li.textContent = text;
      return li;
    }));
    dialog.showModal();
  }));
  dialog.querySelector('.close').addEventListener('click', () => dialog.close());
  document.querySelector('#dialogcontact').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  });

  /* Formulaire : prépare un message WhatsApp */
  document.querySelector('#contactform').addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const message = 'Bonjour Melkior, je suis ' + String(form.get('name')).trim() + '.\n\n' + String(form.get('message')).trim();
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(message), '_blank', 'noopener,noreferrer');
  });
})();
