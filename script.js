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
    education: "Master of Computer Applications (MCA)",
    university: "University of Mysore",
    jobTitle: "Software Engineer",
    company: "Gtechnohubb Pvt Ltd.",
    workLocation: "Bangalore",
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
    </div>
    <div class="career-block job-block">
      <span class="career-block-icon">💼</span>
      <div class="career-block-label">Professional</div>
      <div class="career-block-title">${data.jobTitle}</div>
      <div class="career-block-sub">${data.company}</div>
      <div class="career-block-sub" style="margin-top:4px;">📍 ${data.workLocation}</div>
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
  document.title = 'Prajwal_KS_Marriage_Biodata';
  window.print();
  document.title = originalTitle;
}

// ============================
// Share via WhatsApp
// ============================
function shareWhatsApp() {
  const data = profileData || getFallbackData();
  const message = encodeURIComponent(
    `✨ Marriage Biodata – ${data.fullName} ✨\n\n` +
    `👤 Name: ${data.fullName}\n` +
    `🎂 Age: ${data.age} Years (${data.dateOfBirth})\n` +
    `🏠 Place: ${data.currentPlace}\n` +
    `🙏 Religion: ${data.religion} · ${data.caste}\n` +
    `✨ Horoscope: ${data.rashi} Rashi, ${data.nakshatra} Nakshatra\n` +
    `⏰ Birth Time: ${data.birthTime}\n` +
    `🎓 Education: ${data.education} – ${data.university}\n` +
    `💼 Profession: ${data.jobTitle} @ ${data.company}, ${data.workLocation}\n\n` +
    `📞 Contact: ${data.phone}\n` +
    `📧 Email: ${data.email}\n\n` +
    `_Shared with blessings from Siddaraju K J & Family_`
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
  const imgUrl = document.getElementById('profilePhoto').src;
  
  // Use a simple lightbox modal or just open in a new window for fast implementation
  // Actually, let's create a temporary modal in the DOM
  const modal = document.createElement('div');
  modal.id = 'photoModal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.backgroundColor = 'rgba(0,0,0,0.9)';
  modal.style.zIndex = '9999';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';
  modal.style.cursor = 'zoom-out';
  
  const fullImg = document.createElement('img');
  fullImg.src = imgUrl;
  fullImg.style.maxWidth = '90%';
  fullImg.style.maxHeight = '90%';
  fullImg.style.borderRadius = '8px';
  fullImg.style.boxShadow = '0 0 30px rgba(0,0,0,0.5)';
  
  modal.appendChild(fullImg);
  document.body.appendChild(modal);
  
  modal.onclick = () => {
    document.body.removeChild(modal);
  };
}

// ============================
// Init
// ============================
loadProfile();
initScrollReveal();
