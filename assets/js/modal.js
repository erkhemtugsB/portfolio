const workData = [
  {
    projectNumber: 1,
    title: 'ConnectMNG Online Donation',
    projectDetail: 'An online donation feature that allows customers to submit secure payments and donations with their credit/debit card or their paypal account.',
    Img: 'ProjectImages/connect-donate.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: ['React.js', 'Node.js', 'Paypal SDK', 'Regex', 'REST API', 'Git'],
    sourceLink: '',
    liveLink: 'http://connectmng.org/get-involved/donate',
  },
  {
    projectNumber: 2,
    title: 'Anna\'s Nail Salon',
    projectDetail: 'Mobile responsive website for Anna\'s nail salon based in Denver Colorado. The website is designed to provide information about the salon, services, contact information and booking.',
    Img: 'ProjectImages/annasnail.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: [
      'HTML',
      'JavaScript',
      'CSS',
      'Netlify',
      'Bootsrap',
      'Git',
    ],
    sourceLink: 'https://github.com/erkhemtugsB/nailsalon.github.io',
    liveLink: 'https://annasnail.com/',
  },
  {
    projectNumber: 3,
    title: 'Pet Start Grooming in NY',
    projectDetail: `Mobile responsive website for pet grooming business in New York city. The website allows customers to book an appointment online and notify with email confirmation. The website is designed to provide information about the salon, services, contact information and booking.
      `,
    Img: 'ProjectImages/petzstar.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: ['HTML', 'CSS', 'JavaScript', 'Git', 'Calendly', 'Netlify'],
    sourceLink: 'https://github.com/erkhemtugsB/Petzstar',
    liveLink: 'https://petzstargrooming.com/',
  },
  {
    projectNumber: 4,
    title: 'MNG Auto Club Admin dashboard',
    projectDetail: 'Admin dashboard for MNG Auto Club designed to automate car listings and searchings, making it easier for customers to find their desired vehicle. The dashboard is designed to assist staff to manage active listings and fleet.',
    Img: 'ProjectImages/dealership.png',
    githubIcon: './images/popup-github.svg',
    liveIcon: './images/popup-live.svg',
    Tech: [
      'HTML',
      'JavaScript',
      'CSS',
      'TailwindCSS',
      'REST API',
      'Flask',
      'Git',
      'CI/CD',
    ],
    sourceLink: 'https://github.com/erkhemtugsB/car_rental',
    liveLink: 'https://car-rental-3teo.onrender.com/dashboard.html',
  },
  
];

const popModal = document.getElementById('popup');
// eslint-disable-next-line no-unused-vars
const closeModal = () => {
  popModal.style.transform = 'translateX(-100%)';
  popModal.style.transition = 'all 0.5s ease';
};

window.onclick = function modal(event) {
  if (event.target === popModal) {
    popModal.style.display = 'none';
  }
};
// eslint-disable-next-line no-unused-vars
function dynamicpro(proidx) {
  const myWork = workData[proidx];
  popModal.innerHTML = `
    <div onclick="closeModal()" class="dclose"><img src="images/desktop-close.svg" alt="close-icon"></div>
    <div class="modal">
      <div onclick="closeModal()" class="close"><img src="images/close.svg" alt="close-icon"></div>
      ${
  myWork.Img.length === 2
    ? `<div class="image">
            ${myWork.Img.map(
    (ele) => `<img src="${ele}" alt="Snapshoot-portfolio">`,
  ).join('')}
          </div>`
    : `<div class="single-image">
            <img src="${myWork.Img}" alt="Snapshoot-portfolio">
          </div>`
}
      <div class="modal-details">
        <h3 class="popup-title">${myWork.title}</h3>
        <ul class="popup-items">
          ${myWork.Tech.map((ele) => `<li>${ele}</li>`).join('')}
        </ul>
        <p class="popup-details">${myWork.projectDetail}</p>
        <div class="popup-action-btn">
          <a href="${myWork.liveLink}" class="resume" target="_blank">
            See Live
            <img src="${myWork.liveIcon}" alt="Go-live">
          </a>
          <a href="${myWork.sourceLink}" class="resume" target="_blank">
            See Source
            <img src="${myWork.githubIcon}" alt="Gitub-file">
          </a>
        </div>
      </div>
    </div>
  `;
  popModal.style.display = 'block';
  popModal.style.transform = 'translate(0, 0)';
  popModal.style.transition = 'all 0.5s ease';
}
