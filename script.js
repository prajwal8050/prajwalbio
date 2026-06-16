// ============================
// Global Profile Data
// ============================
let profileData = null;

// ============================
// Load Profile (Directly use fallback data for static site)
// ============================
function loadProfile() {
  console.log('Loading profile...');
  const data = getFallbackData();
  console.log('Data loaded:', data);
  renderProfile(data);
}

// ============================
// Fallback Data (mirrors ProfileService)
// ============================
function getFallbackData() {
  return {
    fullName: "Prajwal K S",
    dateOfBirth: "18/12/2000",
    age: 25,
    gender: "Male",
    religion: "Hindu",
    caste: "Vokkaliga Gowda",
    motherTongue: "Kannada",
    currentPlace: "Besagarahalli, Maddur",
    nativePlace: "Konasale",
    birthTime: "11:15 PM",
    rashi: "Kanya",
    nakshatra: "Hasta",
    fatherName: "Siddaraju K J (Yogesh)",
    fatherOccupation: "Teaching Professional (Government Sector) ",
    motherName: "Roopa K V",
    motherOccupation: "Homemaker",
    siblings: "1 Younger Brother",
    brotherName: "Appu K S",
    brotherEducation: "B.Tech in Electronics and Communication Engineering",
    familyType: "Nuclear Family",
    education: "Master of Technology (M.Tech) in Computer Engineering",
    university: "PES University, Bangalore",
    education2: "Master of Computer Applications (MCA)",
    university2: "University of Mysore",
    jobTitle: "Technical Engineer",
    company: "Techkshetra Info Solutions Pvt. Ltd.",
    workLocation: "Bangalore",
    pastJobTitle: "Software Engineer",
    pastCompany: "Gtechnohubb Pvt. Ltd.",
    pastWorkLocation: "Bangalore",
    aboutMe: "I am a calm, responsible, and family-oriented individual with strong values and a positive outlook towards life. Professionally, I work as a Software Engineer and am passionate about continuous learning and growth. I believe in maintaining a good balance between personal and professional life. I am respectful, understanding, and value relationships deeply. I am looking for a life partner who is supportive, kind, and shares similar values to build a happy and meaningful life together.",
    phone: "8050070508",
    email: "prajwalgowd88@gmail.com"
  };
}

// ============================
// Render Profile into DOM
// ============================
function renderProfile(data) {
  profileData = data;
  // Header
  document.getElementById('profileName').textContent = data.fullName;
  document.getElementById('badgeAge').textContent = `Age: ${data.age}`;
  document.getElementById('badgeReligion').textContent = `${data.religion} · ${data.caste}`;
  document.getElementById('badgeJob').textContent = data.jobTitle;

  // About Me
  document.getElementById('aboutText').textContent = data.aboutMe;

  // Basic Details Grid
  const basicItems = [
    { label: 'Full Name',      value: data.fullName },
    { label: 'Date of Birth',  value: data.dateOfBirth },
    { label: 'Age',            value: `${data.age} Years` },
    { label: 'Gender',         value: data.gender },
    { label: 'Religion',       value: data.religion },
    { label: 'Caste',          value: data.caste },
    { label: 'Mother Tongue',  value: data.motherTongue },
    { label: 'Current Place',  value: data.currentPlace },
    { label: 'Native Place',   value: data.nativePlace },
    { label: 'Birth Time',     value: data.birthTime },
    { label: 'Rashi',          value: data.rashi },
    { label: 'Nakshatra',      value: data.nakshatra },
  ];
  renderGrid('basicGrid', basicItems);

  // Family Details Grid
  const familyItems = [
    { label: "Father's Name",       value: data.fatherName },
    { label: "Father's Occupation", value: data.fatherOccupation },
    { label: "Mother's Name",       value: data.motherName },
    { label: "Mother's Occupation", value: data.motherOccupation },
    { label: 'Siblings',            value: data.siblings },
    { label: 'Brother Name',        value: data.brotherName },
    { label: 'Brother Education',   value: data.brotherEducation },
    { label: 'Family Type',         value: data.familyType },
  ];
  renderGrid('familyGrid', familyItems);

  // Education & Career Blocks
  const careerHTML = `
    <div class="career-block education-block">
      <span class="career-block-icon">🎓</span>
      <div class="career-block-label">Education</div>
      <div class="career-block-title">${data.education}</div>
      <div class="career-block-sub">${data.university}</div>
      <div class="gold-divider" style="margin: 10px auto; max-width: 150px;">
        <span class="divider-line"></span>
        <span class="divider-diamond" style="font-size: 0.5rem;">◆</span>
        <span class="divider-line"></span>
      </div>
      <div class="career-block-title">${data.education2}</div>
      <div class="career-block-sub">${data.university2}</div>
    </div>
    <div class="career-block job-block">
      <span class="career-block-icon">💼</span>
      <div class="career-block-label">Professional</div>
      <div class="career-block-title">${data.jobTitle} <span style="font-size: 0.7rem; font-weight: 600; color: #25d366; background: rgba(37,211,102,0.1); padding: 2px 6px; border-radius: 4px; margin-left: 4px; vertical-align: middle;">Present</span></div>
      <div class="career-block-sub">${data.company}</div>
      <div class="career-block-sub" style="margin-top:4px;">📍 ${data.workLocation}</div>
      <div class="gold-divider" style="margin: 10px auto; max-width: 150px;">
        <span class="divider-line" style="background: linear-gradient(90deg, transparent, rgba(91,141,217,0.4), transparent);"></span>
        <span class="divider-diamond" style="color: rgba(91,141,217,0.6); font-size: 0.5rem;">◆</span>
        <span class="divider-line" style="background: linear-gradient(90deg, transparent, rgba(91,141,217,0.4), transparent);"></span>
      </div>
      <div class="career-block-title" style="opacity: 0.85;">${data.pastJobTitle} <span style="font-size: 0.7rem; font-weight: 500; color: var(--text-light); background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; margin-left: 4px; vertical-align: middle;">Past</span></div>
      <div class="career-block-sub" style="opacity: 0.85;">${data.pastCompany}</div>
      <div class="career-block-sub" style="margin-top:4px; opacity: 0.85;">📍 ${data.pastWorkLocation}</div>
    </div>
  `;
  document.getElementById('careerBlocks').innerHTML = careerHTML;

  // Contact
  const contactHTML = `
    <a class="contact-item" href="tel:${data.phone}" id="contactPhone">
      <span class="contact-icon">📞</span>
      <div>
        <div class="contact-label">Phone</div>
        <div class="contact-value">${data.phone}</div>
      </div>
    </a>
    <a class="contact-item" href="mailto:${data.email}" id="contactEmail">
      <span class="contact-icon">✉️</span>
      <div>
        <div class="contact-label">Email</div>
        <div class="contact-value">${data.email}</div>
      </div>
    </a>
  `;
  document.getElementById('contactWrap').innerHTML = contactHTML;
}

// ============================
// Helper: Render a Details Grid
// ============================
function renderGrid(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => `
    <div class="detail-item">
      <span class="detail-label">${item.label}</span>
      <span class="detail-value">${item.value}</span>
    </div>
  `).join('');
}

// ============================
// Download PDF
// ============================
function downloadPDF() {
  const originalTitle = document.title;
  document.title = 'Prajwal_KS_Profile';
  window.print();
  document.title = originalTitle;
}

// ============================
// Share via WhatsApp
// ============================
function shareWhatsApp() {
  const data = profileData || getFallbackData();
  const message = encodeURIComponent(
    `✨ Profile – ${data.fullName} ✨\n\n` +
    `👤 Name: ${data.fullName}\n` +
    `🎂 Age: ${data.age} Years (${data.dateOfBirth})\n` +
    `🏠 Place: ${data.currentPlace}\n` +
    `🙏 Religion: ${data.religion} · ${data.caste}\n` +
    `✨ Horoscope: ${data.rashi} Rashi, ${data.nakshatra} Nakshatra\n` +
    `⏰ Birth Time: ${data.birthTime}\n` +
    `🎓 Education:\n` +
    `   • ${data.education} – ${data.university}\n` +
    `   • ${data.education2} – ${data.university2}\n` +
    `💼 Profession:\n` +
    `   • Present: ${data.jobTitle} @ ${data.company}, ${data.workLocation}\n` +
    `   • Past: ${data.pastJobTitle} @ ${data.pastCompany}\n\n` +
    `📞 Contact: ${data.phone}\n` +
    `📧 Email: ${data.email}\n\n`
  );
  window.open(`https://wa.me/?text=${message}`, '_blank');
}

// ============================
// Scroll Reveal Animation
// ============================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, idx) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ============================
// Open Full Photo
// ============================
function openFullPhoto() {
  const images = ['prajwal-profile.jpg', 'prajwal-profile2.jpg'];
  let currentIndex = 0;

  const modal = document.createElement('div');
  modal.id = 'photoModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(15, 12, 8, 0.95);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-family: 'Poppins', sans-serif;
  `;

  // Close Button
  const closeBtn = document.createElement('div');
  closeBtn.innerHTML = '×';
  closeBtn.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    color: #cbba90;
    font-size: 45px;
    font-weight: 300;
    cursor: pointer;
    transition: transform 0.2s, color 0.2s;
    z-index: 10001;
  `;
  closeBtn.onmouseenter = () => closeBtn.style.transform = 'scale(1.1)';
  closeBtn.onmouseleave = () => closeBtn.style.transform = 'scale(1)';
  closeBtn.onclick = (e) => {
    e.stopPropagation();
    document.body.removeChild(modal);
  };
  modal.appendChild(closeBtn);

  // Gallery Container (Image + Navigation)
  const container = document.createElement('div');
  container.style.cssText = `
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    max-height: 80%;
  `;

  // Image Element
  const img = document.createElement('img');
  img.src = images[currentIndex];
  img.style.cssText = `
    max-width: 100%;
    max-height: 80vh;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.6);
    border: 2px solid #cbba90;
    transition: opacity 0.2s ease;
  `;
  img.onclick = (e) => e.stopPropagation();
  container.appendChild(img);

  // Left Arrow
  const prevBtn = document.createElement('div');
  prevBtn.innerHTML = '‹';
  prevBtn.style.cssText = `
    position: absolute;
    left: -60px;
    color: #cbba90;
    font-size: 70px;
    font-weight: 300;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    z-index: 10001;
  `;
  prevBtn.onclick = (e) => {
    e.stopPropagation();
    navigate(-1);
  };
  container.appendChild(prevBtn);

  // Right Arrow
  const nextBtn = document.createElement('div');
  nextBtn.innerHTML = '›';
  nextBtn.style.cssText = `
    position: absolute;
    right: -60px;
    color: #cbba90;
    font-size: 70px;
    font-weight: 300;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    z-index: 10001;
  `;
  nextBtn.onclick = (e) => {
    e.stopPropagation();
    navigate(1);
  };
  container.appendChild(nextBtn);

  modal.appendChild(container);

  // Counter indicator
  const counter = document.createElement('div');
  counter.style.cssText = `
    margin-top: 20px;
    color: #cbba90;
    font-size: 0.9rem;
    letter-spacing: 2px;
    background: rgba(255,255,255,0.05);
    padding: 6px 16px;
    border-radius: 20px;
    border: 1px solid rgba(203, 186, 144, 0.3);
  `;
  updateCounter();
  modal.appendChild(counter);

  function navigate(direction) {
    img.style.opacity = '0';
    setTimeout(() => {
      currentIndex = (currentIndex + direction + images.length) % images.length;
      img.src = images[currentIndex];
      updateCounter();
      img.style.opacity = '1';
    }, 150);
  }

  function updateCounter() {
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  modal.onclick = () => {
    document.body.removeChild(modal);
  };

  const handleKeydown = (e) => {
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'Escape') {
      document.body.removeChild(modal);
    }
  };
  document.addEventListener('keydown', handleKeydown);

  // Clean up key listener on modal remove
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((node) => {
        if (node.id === 'photoModal') {
          document.removeEventListener('keydown', handleKeydown);
          const styleEl = document.getElementById('lightbox-media-queries');
          if (styleEl) styleEl.remove();
          observer.disconnect();
        }
      });
    });
  });
  observer.observe(document.body, { childList: true });

  const styleTag = document.createElement('style');
  styleTag.id = 'lightbox-media-queries';
  styleTag.innerHTML = `
    @media (max-width: 768px) {
      #photoModal div[style*="left: -60px"] {
        left: 10px !important;
        background: rgba(0,0,0,0.5) !important;
        border-radius: 50% !important;
        width: 44px !important;
        height: 44px !important;
        font-size: 40px !important;
      }
      #photoModal div[style*="right: -60px"] {
        right: 10px !important;
        background: rgba(0,0,0,0.5) !important;
        border-radius: 50% !important;
        width: 44px !important;
        height: 44px !important;
        font-size: 40px !important;
      }
    }
  `;
  document.head.appendChild(styleTag);

  document.body.appendChild(modal);
}

// ============================
// Init
// ============================
loadProfile();
initScrollReveal();
