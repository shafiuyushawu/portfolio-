const body = document.querySelector(
  'body .body__section main .project__section .cardSection',
);

// data object

const data = [
  {
    title: "Space Traveler's Hub",
    techButton: {
      tech1: 'React',
      tech2: 'Boostrap & Tailwind CSS',
      tech3: 'Daisy UI',
    },

    projImg: './images/space.png',
    description:
      'A single page web application that provides a platform for scientists to get booked for reservations and join missions to space travel.',
    descButton: {
      seeLive: {
        seeLiveTxt: 'See Live',
        seeLiveIcon: './icons_copy/seeLive.svg',
      },

      seeSource: {
        seeSourceTxt: 'See Source',
        seeSourceIcon: './icons_copy/seeSource.svg',
      },
    },
  },

  {
    projectTitile: {
      title: 'My Recent Works',
      titleBar: './icons_copy/Vectortitle.svg',
    },

    story: {
      storyImg: './images/space.png',
    },

    storyProjectBtn: 'See Project',
  },

  {
    cardTitle: 'Profetional Art <br> Printing Data',
    cardDescription:
      "A daily selection of privatelys <br> personalized reads; no accounts or <br> sign-ups required. has been the <br> industry's standard",
    cardBtn: {
      cardBtn1: 'HTML',
      cardBtn2: 'Boostrap',
      cardBtn3: 'Ruby',
    },

    cardProjectBtn: 'Seen Project',
    cardId: 'projectCard1',
  },

  {
    cardTitle: 'Bookstore',
    cardDescription:
      "A daily selection of privatelys <br> personalized reads; no accounts or <br> sign-ups required. has been the <br> industry's standard",
    cardBtn: {
      cardBtn1: 'HTML',
      cardBtn2: 'Boostrap',
      cardBtn3: 'Ruby',
    },

    cardProjectBtn: 'Seen Project',
    cardId: 'projectCard2',
  },

  {
    cardTitle: '',
    cardDescription:
      "A daily selection of privatelys <br> personalized reads; no accounts or <br> sign-ups required. has been the <br> industry's standard",
    cardBtn: {
      cardBtn1: 'HTML',
      cardBtn2: 'Boostrap',
      cardBtn3: 'Ruby',
    },

    cardProjectBtn: 'Seen Project',
    cardId: 'projectCard3',
  },

  {
    cardTitle: '',
    cardDescription:
      "A daily selection of privatelys <br> personalized reads; no accounts or <br> sign-ups required. has been the <br> industry's standard",
    cardBtn: {
      cardBtn1: 'HTML',
      cardBtn2: 'Boostrap',
      cardBtn3: 'Ruby',
    },

    cardProjectBtn: 'Seen Project',
    cardId: 'projectCard4',
  },

  {
    cardTitle: '',
    cardDescription:
      "A daily selection of privatelys <br> personalized reads; no accounts or <br> sign-ups required. has been the <br> industry's standard",
    cardBtn: {
      cardBtn1: 'HTML',
      cardBtn2: 'Boostrap',
      cardBtn3: 'Ruby',
    },

    cardProjectBtn: 'Seen Project',
    cardId: 'projectCard5',
  },

  {
    cardTitle: '',
    cardDescription:
      "A daily selection of privatelys <br> personalized reads; no accounts or <br> sign-ups required. has been the <br> industry's standard",
    cardBtn: {
      cardBtn1: 'HTML',
      cardBtn2: 'Boostrap',
      cardBtn3: 'Ruby',
    },

    cardProjectBtn: 'Seen Project',
    cardId: 'projectCard6',
  },
];

const projectiSection = document.querySelector(
  'body .body__section main .card ',
);

// recent project section

const titleDiv = document.createElement('div');
titleDiv.className = 'titleDiv';

const projectTitile = document.createElement('h2');
projectTitile.className = 'projectTitle';
projectTitile.innerHTML = data[1].projectTitile.title;
const titleBar = document.createElement('img');
titleBar.className = 'titleBar';
titleBar.setAttribute('src', data[1].projectTitile.titleBar);

const storyDiv = document.createElement('div');
storyDiv.className = 'storyDiv';
const storyImg = document.createElement('img');
storyImg.className = 'storyImg';
storyImg.setAttribute('src', data[1].story.storyImg);

const multiStoryDiv = document.createElement('div');
multiStoryDiv.className = 'multiStoryDiv';
const multiStoryTitle = document.createElement('h3');
multiStoryTitle.className = 'multiStoryTitle';
multiStoryTitle.innerHTML = data[0].title;
const multiStoryPara = document.createElement('p');
multiStoryPara.className = 'multiStoryPara';
multiStoryPara.innerHTML = data[0].description;

const storyBtnDiv = document.createElement('div');
storyBtnDiv.classList = 'storyBtnDiv';

const storyBtn1 = document.createElement('button');
storyBtn1.className = 'storyBtn';
storyBtn1.innerHTML = data[0].techButton.tech1;

const storyBtn2 = document.createElement('button');
storyBtn2.className = 'storyBtn';
storyBtn2.innerHTML = data[0].techButton.tech2;

const storyBtn3 = document.createElement('button');
storyBtn3.className = 'storyBtn';
storyBtn3.innerHTML = data[0].techButton.tech3;

const storyProjectBtn = document.createElement('button');
storyProjectBtn.className = 'storyProjectBtn';
storyProjectBtn.id = 'see__project1';
storyProjectBtn.innerHTML = data[1].storyProjectBtn;

titleDiv.appendChild(projectTitile);
titleDiv.appendChild(titleBar);
projectiSection.appendChild(titleDiv);
projectiSection.appendChild(storyDiv);
storyDiv.appendChild(storyImg);
storyDiv.appendChild(multiStoryDiv);
multiStoryDiv.appendChild(multiStoryTitle);
multiStoryDiv.appendChild(multiStoryPara);
multiStoryDiv.appendChild(storyBtnDiv);
multiStoryDiv.appendChild(storyBtnDiv);
storyBtnDiv.appendChild(storyBtn1);
storyBtnDiv.appendChild(storyBtn2);
storyBtnDiv.appendChild(storyBtn3);
multiStoryDiv.appendChild(storyProjectBtn);

// Project cards

const projectCard1 = document.getElementById('projectCard1');
const projectCard2 = document.getElementById('projectCard2');
const projectCard3 = document.getElementById('projectCard3');
const projectCard4 = document.getElementById('projectCard4');
const projectCard5 = document.getElementById('projectCard5');
const projectCard6 = document.getElementById('projectCard6');

const projectCard = [
  projectCard1,
  projectCard2,
  projectCard3,
  projectCard4,
  projectCard5,
  projectCard6,
];

for (let i = 0; i < projectCard.length; i += 1) {
  const cardSection = projectCard[i];

  const card = document.createElement('div');
  card.className = 'card';
  card.id = 'project__grid';

  const projectContainer = document.createElement('div');
  projectContainer.className = 'project__container';
  projectContainer.id = 'project_1';

  const contentContainer = document.createElement('div');
  contentContainer.className = 'content__container';

  const projectContent = document.createElement('div');
  projectContent.className = 'project__content';

  const h3 = document.createElement('h3');
  h3.innerHTML = data[2].cardTitle;

  const paraDiv = document.createElement('div');
  paraDiv.classList = 'paragraph_div';

  const p = document.createElement('p');
  p.innerHTML = data[2].cardDescription;

  const professionProject = document.createElement('div');
  professionProject.className = 'profession__project-butons';

  const cardBtn1 = document.createElement('button');
  cardBtn1.innerHTML = data[2].cardBtn.cardBtn1;

  const cardBtn2 = document.createElement('button');
  cardBtn2.innerHTML = data[2].cardBtn.cardBtn2;

  const cardBtn3 = document.createElement('button');
  cardBtn3.innerHTML = data[2].cardBtn.cardBtn3;

  const cardProjectBtn = document.createElement('button');
  cardProjectBtn.className = 'see__project2';
  cardProjectBtn.innerHTML = data[2].cardProjectBtn;

  cardSection.appendChild(card);
  card.appendChild(projectContainer);
  projectContainer.appendChild(contentContainer);
  contentContainer.appendChild(projectContent);
  projectContent.appendChild(h3);
  projectContent.appendChild(paraDiv);
  paraDiv.appendChild(p);
  projectContent.appendChild(professionProject);
  professionProject.appendChild(cardBtn1);
  professionProject.appendChild(cardBtn2);
  professionProject.appendChild(cardBtn3);
  projectContainer.appendChild(cardProjectBtn);
}

// popup window
const openPopups = document.querySelectorAll('.project__section button');

for (let popup = 0; popup < openPopups.length; popup += 1) {
  openPopups[popup].addEventListener('click', () => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'section';
    const popup = document.createElement('div');
    popup.className = 'popup__section';

    const topContainer = document.createElement('div');
    topContainer.className = 'topContainer';

    const close = document.createElement('div');
    close.className = 'close';
    const bar1 = document.createElement('div');
    bar1.className = 'bar';
    const bar2 = document.createElement('div');
    bar2.className = 'bar';
    const bar3 = document.createElement('div');
    bar3.className = 'bar';

    const tittle = document.createElement('h1');
    tittle.className = 'tittle';
    tittle.innerHTML = data[0].title;

    const techBtn = document.createElement('div');
    techBtn.className = 'technologyButtons';
    const btn1 = document.createElement('button');
    btn1.className = 'btn';
    btn1.innerHTML = data[0].techButton.tech1;
    const btn2 = document.createElement('button');
    btn2.className = 'btn';
    btn2.innerHTML = data[0].techButton.tech2;
    btn1.innerHTML = data[0].techButton.tech1;
    const btn3 = document.createElement('button');
    btn3.className = 'btn';
    btn3.innerHTML = data[0].techButton.tech3;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const popImg = document.createElement('img');
    popImg.className = 'popImg';
    popImg.setAttribute('src', data[0].projImg);
    imageContainer.appendChild(popImg);

    const descContainer = document.createElement('div');
    descContainer.className = 'descContainer';

    const description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = data[0].description;

    const descBtnContainer = document.createElement('div');
    descBtnContainer.className = 'descBtnContainer';

    const descButton = document.createElement('div');
    descButton.className = 'descButton';

    const seeLiveLink = document.createElement('a');
    seeLiveLink.className = 'see__me_link';
    seeLiveLink.setAttribute(
      'href',
      'https://space-travelers-hub-kcp2.onrender.com',
    );

    const seeLive = document.createElement('button');
    seeLive.className = 'seeLive';
    seeLive.innerHTML = data[0].descButton.seeLive.seeLiveTxt;
    const seeLiveIcon = document.createElement('img');
    seeLiveIcon.classList = 'seeLiveIcon';
    seeLiveIcon.setAttribute('src', data[0].descButton.seeLive.seeLiveIcon);
    seeLiveIcon.setAttribute('alt', 'no internet');

    const seeSourceLink = document.createElement('a');
    seeSourceLink.className = 'see__me_link';
    seeSourceLink.setAttribute(
      'href',
      'https://github.com/shafiuyushawu/space-travelers',
    );

    const seeSource = document.createElement('button');
    seeSource.className = 'seeSource';
    seeSource.innerHTML = data[0].descButton.seeSource.seeSourceTxt;
    const seeSourceIcon = document.createElement('img');
    seeSourceIcon.classList = 'seeSourceIcon';
    seeSourceIcon.setAttribute(
      'src',
      data[0].descButton.seeSource.seeSourceIcon,
    );
    seeSourceIcon.setAttribute('alt', 'no internet');

    topContainer.appendChild(tittle);
    topContainer.appendChild(close);
    close.appendChild(bar1);
    close.appendChild(bar2);
    close.appendChild(bar3);
    popup.appendChild(topContainer);
    popup.appendChild(techBtn);
    techBtn.appendChild(btn1);
    techBtn.appendChild(btn2);
    techBtn.appendChild(btn3);
    popup.appendChild(descContainer);
    descContainer.appendChild(imageContainer);
    descContainer.appendChild(descBtnContainer);
    descBtnContainer.appendChild(description);
    descBtnContainer.appendChild(descButton);
    descButton.appendChild(seeLiveLink);
    seeLiveLink.appendChild(seeLive);
    seeLive.appendChild(seeLiveIcon);
    descButton.appendChild(seeSourceLink);
    seeSourceLink.appendChild(seeSource);
    seeSource.appendChild(seeSourceIcon);
    mainDiv.appendChild(popup);
    body.appendChild(mainDiv);

    close.addEventListener('click', () => {
      mainDiv.remove();
    });
  });
}
