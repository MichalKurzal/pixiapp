let nav = navigator.userAgent;
if (nav.match(/Android/) || nav.match(/iPhone/)) {
  window.location.replace('https://michalkurzal.github.io');
}
let app;
try {
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    resizeTo: window,
    backgroundColor: 0xd9dff2,
  }); //Creating  Pixi App
} catch {
  window.alert(
    'Your browser does not support WebGL. Please turn on gpu hardware acceleration in your browser settings'
  );
}

document.body.appendChild(app.view);

let cont1 = new PIXI.Container();
let cont2 = new PIXI.Container();

cont1.width = window.innerWidth;
cont1.height = window.innerHeight;
cont2.width = window.innerWidth;
cont2.height = window.innerHeight;

app.stage.addChild(cont1);
app.stage.addChild(cont2);

let width = window.innerWidth - 100;
let w = window.innerWidth;

app.stage.interactive = true;
console.log(app.stage.children);
let site = '';

var watercolor = new PIXI.Texture.fromImage('resources/watercolor.jpg'); //Loading texture Images
var watercolor2 = new PIXI.Texture.fromImage('resources/watercolor2.jpg');
var icon1tex = new PIXI.Texture.fromImage('resources/healthcare-and-medical.png');
var icon2tex = new PIXI.Texture.fromImage('resources/house-design.png');
var icon3tex = new PIXI.Texture.fromImage('resources/patent.png');
var back2tex = new PIXI.Texture.fromImage('resources/watercolor3.jpg');
var GTX1 = new PIXI.Texture.fromImage('resources/wind.jpg');
var GR = new PIXI.Texture.fromImage('resources/greece.jpg');
var iarrowtex = new PIXI.Texture.fromImage('resources/down-arrow.png');

var back = new PIXI.Sprite(watercolor); //Creating Sprites
var back2 = new PIXI.Sprite(back2tex);
var back3 = new PIXI.Sprite(watercolor2);
var icon1 = new PIXI.Sprite(icon1tex);
var icon2 = new PIXI.Sprite(icon2tex);
var icon3 = new PIXI.Sprite(icon3tex);
var img1 = new PIXI.Sprite(GTX1);
var img2 = new PIXI.Sprite(GR);
var iarrow = new PIXI.Sprite(iarrowtex);
var iarrow2 = new PIXI.Sprite(iarrowtex);
var iarrow3 = new PIXI.Sprite(iarrowtex);

const style = new PIXI.TextStyle({
  //Different Text Styles
  fontFamily: 'Tahoma',
  fontSize: 32,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fill: ['#000000'],
  stroke: '#000000',
  strokeThickness: 2,
  dropShadow: false,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 250,
});
const style2 = new PIXI.TextStyle({
  fontFamily: 'Tahoma',
  fontSize: 32,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fill: ['#000000'],
  stroke: '#000000',
  strokeThickness: 2,
  dropShadow: false,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 280,
});
const style3 = new PIXI.TextStyle({
  fontFamily: 'Tahoma',
  fontSize: 32,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fill: ['#FDFEFE'],
  stroke: '#FDFEFE',
  strokeThickness: 2,
  dropShadow: false,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 700,
});

const style4 = new PIXI.TextStyle({
  fontFamily: 'Tahoma',
  fontSize: 32,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fill: ['#FDFEFE'],
  stroke: '#FDFEFE',
  strokeThickness: 2,
  dropShadow: false,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: width,
  padding: 20,
});
const style5 = new PIXI.TextStyle({
  fontFamily: 'Tahoma',
  fontSize: 18,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fill: ['#FDFEFE'],
  stroke: '#FDFEFE',
  strokeThickness: 1,
  dropShadow: false,
  dropShadowColor: '#000000',
  dropShadowBlur: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 320,
});

const richText = new PIXI.Text('Michal Kurzal Portfolio', style);
gsap.to(richText, { x: window.innerWidth / 2 - 200, duration: 2 });
richText.y = window.innerHeight / 2;

let textlong =
  'Hi, my name is Michal and I am a Javascript developer. ' +
  'I have solid skills in Javascript, Typscript and many Javascript frameworks like Angular. ' +
  'I have also expiriences in mobile Ionic Apps Development. ' +
  'My Hobbies are OpenGL and WebGL ';

let textlong2 =
  'In my twenties I have been studying Sociolgy and Political Science at the University but I did not finish and I do not have a higher degree. ' +
  'In the recent past  I have been doing a professional apprentceship in the IT filed with focus on software development';

let textlong3 =
  'Michal Kurzal \n' +
  'Schneider Straße 4 \n' +
  '65931 Frankfurt am Main\n \n' +
  'Deutschland/Germany\n \n' +
  'Images : My own Photos and pixabay.com \n' +
  'Icons : flaticon.com \n\n' +
  'JavaScript frameworks - Pixi.js and GSAP Green Sock \n\n' +
  'Privacy Policy \n \nPersonal data (usually referred to just as "data" below) will only be processed by me to the extent necessary and for the purpose of providing a functional and user-friendly website, including its contents, and the services offered there.' +
  'Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter referred to as the "GDPR"), "processing" refers to any operation or set of operations such as collection, recording, organization, structuring, storage, adaptation, alteration, retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available, alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by automated means or not.' +
  'The following privacy policy is intended to inform you in particular about the type, scope, purpose, duration, and legal basis for the processing of such data either under our own control or in conjunction with others. We also inform you below about the third-party components we use to optimize our website and improve the user experience which may result in said third parties also processing data they collect and control.\n \n' +
  'I. The rights of users and data subjects' +
  'With regard to the data processing to be described in more detail below, users and data subjects have the right' +
  'to confirmation of whether data concerning them is being processed, information about the data being processed, further information about the nature of the data processing, and copies of the data (cf. also Art. 15 GDPR)' +
  'to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR)' +
  'to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing per Art. 18 GDPR' +
  'to receive copies of the data concerning them and/or provided by them and to have the same transmitted to other providers/controllers (cf. also Art. 20 GDPR)' +
  'to file complaints with the supervisory authority if they believe that data concerning them is being processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).' +
  'In addition, the controller is obliged to inform all recipients to whom it discloses data of any such corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR. However, this obligation does not apply if such notification is impossible or involves a disproportionate effort. Nevertheless, users have a right to information about these recipients.' +
  'Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the controllers future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In particular, an objection to data processing for the purpose of direct advertising is permissible.\n \n' +
  'II. Information about the data processing \n' +
  'I am a private person and I do not colect any data. Only host of this site - github - colect some data. Please inform yourself abut github privacy policy';
const icontext1 = new PIXI.Text('My Knowledge', style2);
const icontext2 = new PIXI.Text('About', style2);
const icontext3 = new PIXI.Text('Education', style2);

icontext1.x = 55;
icontext1.y = window.innerHeight;

icontext2.x = window.innerWidth - 250;
icontext2.y = window.innerHeight;

icontext3.x = window.innerWidth / 2 - 100;
icontext3.y = window.innerHeight;

var page1text = new PIXI.Text(textlong, style3);
var page1text2 = new PIXI.Text(textlong2, style3);
var page1text3 = new PIXI.Text(textlong3, style4);

let click = async () => {
  console.log('click');
  richText.off('pointerdown', click);
  richText.off('pointerdown', media2);
  cont2.addChild(icon1);
  cont2.addChild(icon2);
  cont2.addChild(icon3);
  cont1.addChild(back2);

  TweenLite.set(back, { height: 0 });
  TweenLite.from(back, 1, { height: window.innerHeight });
  TweenLite.set(back2, { height: window.innerHeight });
  TweenLite.from(back2, 1, { height: 0 });
  TweenLite.to(richText, 2, { x: 50, y: 30 });

  gsap.to([icon1, icon3, icon2], { y: window.innerHeight / 2 - 200, duration: 1, stagger: 0.5 });
  gsap.to([icontext1, icontext3, icontext2], {
    y: window.innerHeight / 2 + 80,
    duration: 1,
    stagger: 0.5,
  });
  gsap.to(back2, { x: 0, y: 0, duration: 0.5 });

  site = 'main';
  return await site;
};
let iclick = async () => {
  let nav = navigator.userAgent;
  console.log('iclick');
  console.log(nav);
  cont2.addChild(iarrow);
  cont2.addChild(page1text);
  cont2.addChild(img1);
  cont1.addChild(back3);

  TweenLite.set(back2, { height: 0 });
  TweenLite.from(back2, 1, { height: window.innerHeight });
  TweenLite.set(back3, { height: window.innerHeight });
  TweenLite.from(back3, 1, { height: 0 });

  gsap.to([icontext1, icontext3, icontext2], { y: window.innerHeight, duration: 1, stagger: 0.5 });
  gsap.to([icon1, icon3, icon2], { y: window.innerHeight, duration: 1, stagger: 0.5 });
  gsap.to(page1text, { x: 50, y: 150, duration: 2 });
  gsap.to(back3, { x: 0, y: 0, duration: 2 });
  if (nav.match(/Windows/) || nav.match(/Linux/)) {
    gsap.to(img1, { x: window.innerWidth / 2, y: 150, duration: 2 });
  }
  gsap.to(iarrow, { x: 100, y: window.innerHeight - 200, duration: 2 });

  site = 'sub1';
  console.log(site);
  return await site;
};
let iclick2 = async () => {
  console.log('iclick2');
  cont2.addChild(page1text3);
  cont1.addChild(back3);
  cont2.addChild(iarrow);
  cont2.addChild(iarrow2);
  cont2.addChild(iarrow3);

  TweenLite.set(back2, { height: 0 });
  TweenLite.from(back2, 1, { height: window.innerHeight });
  TweenLite.set(back3, { height: window.innerHeight });
  TweenLite.from(back3, 1, { height: 0 });

  gsap.to([icontext1, icontext3, icontext2], { y: window.innerHeight, duration: 1, stagger: 0.5 });
  gsap.to([icon1, icon3, icon2], { y: window.innerHeight, duration: 1, stagger: 0.5 });
  gsap.to(page1text3, { x: 50, y: 150, duration: 2 });
  gsap.to(back3, { x: 0, y: 0, duration: 2 });
  gsap.to(iarrow, { x: window.innerWidth / 2, y: 100, duration: 1 });
  gsap.to(iarrow2, { x: window.innerWidth / 2, y: 220, duration: 1 });
  gsap.to(iarrow3, { x: window.innerWidth / 2, y: 300, duration: 1 });

  site = 'sub2';
  return await site;
};
let iclick3 = async () => {
  console.log('iclick3');
  cont1.addChild(back3);
  cont2.addChild(page1text2);
  cont2.addChild(img2);
  cont2.addChild(iarrow);

  TweenLite.set(back2, { height: 0 });
  TweenLite.from(back2, 1, { height: window.innerHeight });
  TweenLite.set(back3, { height: window.innerHeight });
  TweenLite.from(back3, 1, { height: 0 });

  gsap.to([icon1, icon3, icon2], { y: window.innerHeight, duration: 1, stagger: 0.5 });
  gsap.to([icontext1, icontext3, icontext2], { y: window.innerHeight, duration: 1, stagger: 0.5 });
  gsap.to(page1text2, { x: 50, y: 150, duration: 2 });
  gsap.to(back3, { x: 0, y: 0, duration: 2 });
  gsap.to(img2, { x: window.innerWidth / 2, y: 100, duration: 2 });
  gsap.to(iarrow, { x: 100, y: window.innerHeight - 200, duration: 2 });

  site = 'sub3';
  return await site;
};
let arrowback = async () => {
  console.log('arrow-back');
  TweenLite.set(back3, { height: 0 });
  TweenLite.from(back3, 1, { height: window.innerHeight });
  TweenLite.set(back2, { height: window.innerHeight });
  TweenLite.from(back2, 1, { height: 0 });

  gsap.to(img1, { y: window.innerHeight, duration: 2 });
  gsap.to(img2, { y: window.innerHeight, duration: 2 });
  gsap.to(page1text, { y: window.innerHeight, duration: 2 });
  gsap.to(page1text2, { y: window.innerHeight, duration: 2 });
  gsap.to(page1text3, { y: window.innerHeight, duration: 2 });
  gsap.to([icon1, icon3, icon2], { y: window.innerHeight / 2 - 200, duration: 1, stagger: 0.5 });
  gsap.to([icontext1, icontext3, icontext2], {
    y: window.innerHeight / 2 + 80,
    duration: 1,
    stagger: 0.5,
  });
  gsap.to(iarrow, { x: 0, y: window.innerHeight, duration: 2 });
  gsap.to(iarrow2, { x: 0, y: window.innerHeight, duration: 2 });
  gsap.to(iarrow3, { x: 0, y: window.innerHeight, duration: 2 });
  site = 'main';

  return await site;
};
let ihover = () => {
  console.log('ihover');
  icon1.scale.x = 0.55;
  icon1.scale.y = 0.55;
  blurFilter1.blur = 10;
};
let ihoverout = () => {
  console.log('ihoverout');
  icon1.scale.x = 0.45;
  icon1.scale.y = 0.45;
  blurFilter1.blur = 0;
};

let ihover2 = () => {
  console.log('ihover');
  icon2.scale.x = 0.55;
  icon2.scale.y = 0.55;
  blurFilter1.blur = 10;
};
let ihoverout2 = () => {
  console.log('ihoverout');
  icon2.scale.x = 0.45;
  icon2.scale.y = 0.45;
  blurFilter1.blur = 0;
};

let ihover3 = () => {
  console.log('ihover');
  icon3.scale.x = 0.55;
  icon3.scale.y = 0.55;
  blurFilter1.blur = 10;
};
let ihoverout3 = () => {
  console.log('ihoverout');
  icon3.scale.x = 0.45;
  icon3.scale.y = 0.45;
  blurFilter1.blur = 0;
};

iarrow.angle = 90;
iarrow3.angle = 180;

iarrow2.alpha = 0.7;
iarrow3.alpha = 0.7;

img1.scale.x = 0.4;
img1.scale.y = 0.4;

img2.scale.x = 0.4;
img2.scale.y = 0.4;

icon1.scale.x = 0.45;
icon1.scale.y = 0.45;
icon1.x = 50;
icon1.y = window.innerHeight;
icon1.interactive = true;

icon2.scale.x = 0.45;
icon2.scale.y = 0.45;
icon2.x = window.innerWidth - 340;
icon2.y = window.innerHeight;
icon2.interactive = true;
//const blurFilter1 = new PIXI.filters.BlurFilter();

icon3.scale.x = 0.45;
icon3.scale.y = 0.45;
icon3.x = window.innerWidth / 2 - 150;
icon3.y = window.innerHeight;
icon3.interactive = true;

iarrow.scale.x = 0.2;
iarrow.scale.y = 0.2;
iarrow.interactive = true;

iarrow2.scale.x = 0.15;
iarrow2.scale.y = 0.15;
iarrow2.interactive = true;

iarrow3.scale.x = 0.15;
iarrow3.scale.y = 0.15;
iarrow3.interactive = true;

page1text3.interactive = true;
richText.interactive = true;

displacementSprite = PIXI.Sprite.fromImage(
  'https://res.cloudinary.com/dvxikybyi/image/upload/v1486634113/2yYayZk_vqsyzx.png'
);
displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

let displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

displacementSprite.position = back.position;
cont1.addChild(back);
cont1.addChild(displacementSprite);
cont1.interactive = true;
cont2.interactive = true;
back.interactive = true;

//cont1.buttonMode = true;
//cont2.buttonMode = true;
icon1.buttonMode = true;
icon2.buttonMode = true;
icon3.buttonMode = true;
icontext1.buttonMode = true;
icontext2.buttonMode = true;
icontext3.buttonMode = true;
iarrow.buttonMode = true;
iarrow2.buttonMode = true;
iarrow3.buttonMode = true;

richText.on('pointerdown', click);
back.on('pointerdown', click);

img1.interactive = true;

cont1.filters = [displacementFilter];

cont2.addChild(richText);
cont2.addChild(icontext1);
cont2.addChild(icontext2);
cont2.addChild(icontext3);

let resload = () => {
  back.width = window.innerWidth;
  back.height = window.innerHeight;
  back.x = 0;
  back.y = 0;
  back2.x = 0;
  back2.y = window.innerHeight;
};
getsite = async () => {
  let s = site;
  console.log('site ' + site);
  return await s;
};
function res() {
  console.log('resize');
  console.log('this site ' + site);

  console.log('this site ' + site);
  console.log(back.width, back.height);
  console.log(window.innerWidth, window.innerHeight);
  back.width = window.innerWidth;
  back.height = window.innerHeight;

  if (site == 'main' && window.innerWidth > 800) {
    console.log('Main');
    click();
    gsap.to(icon1, { x: 50, duration: 2 });
    gsap.to(icon2, { x: window.innerWidth - 250, duration: 2, duration: 2 });
    gsap.to(icon3, { x: window.innerWidth / 2 - 50, duration: 2 });
    gsap.to(icontext1, { x: 50, duration: 2 });
    gsap.to(icontext2, { x: window.innerWidth - 250, duration: 2 });
    gsap.to(icontext3, { x: window.innerWidth / 2 - 50, duration: 2 });
  }
  if (site == 'sub1') {
    console.log('sub1');
  }
}

let scroll = (event) => {
  console.log('scroll');
  if (site == 'sub2') {
    console.log(event);
  }
};

let clickV = () => {
  console.log(page1text3.y);
  let y = page1text3.y;
  if (y > -1200) {
    gsap.to(page1text3, { y: y - 150, duration: 0.5 });
  }
};

let textup = () => {
  console.log(page1text3.y);
  let y = page1text3.y;
  if (y < 400) {
    gsap.to(page1text3, { y: y + 150, duration: 0.5 });
  }
};
let media2 = () => {
  if (window.innerWidth < 800 && site == 'main') {
    console.log(' not > 800');

    console.log('Main');

    icon1.scale.x = 0.25;
    icon1.scale.y = 0.25;

    icon2.scale.x = 0.25;
    icon2.scale.y = 0.25;

    icon3.scale.x = 0.25;
    icon3.scale.y = 0.25;

    icon1.off('pointerover', ihover);
    icon1.off('pointerout', ihoverout);

    icon2.off('pointerover', ihover2);
    icon2.off('pointerout', ihoverout2);

    icon3.off('pointerover', ihover3);
    icon3.off('pointerout', ihoverout3);

    gsap.to(icon1, { y: 100, x: 50, duration: 2 });
    gsap.to(icon2, { y: 500, x: 50, duration: 2 });
    gsap.to(icon3, { y: 300, x: 50, duration: 2 });
    gsap.to(icontext1, { y: 210, x: 50, duration: 2 });
    gsap.to(icontext2, { y: 610, x: 50, duration: 2 });
    gsap.to(icontext3, { y: 410, x: 50, duration: 2 });
  }
};

let media3 = () => {
  if (window.innerWidth < 800 && site == 'sub1') {
    gsap.to(img1, { x: 50, y: 450, duration: 2 });
    page1text.style = style5;
    img1.scale.x = 0.2;
    img1.scale.y = 0.2;
  } else if (window.innerWidth > 800 && site == 'sub1') {
    gsap.to(img1, { x: window.innerWidth / 2, y: 150, duration: 2 });
    page1text.style = style3;
    img1.scale.x = 0.4;
    img1.scale.y = 0.4;
  }
};
let media4 = () => {
  if (window.innerWidth < 800 && site == 'sub3') {
    gsap.to(img2, { x: 50, y: 450, duration: 2 });
    page1text2.style = style5;
    img2.scale.x = 0.2;
    img2.scale.y = 0.2;
  } else if (window.innerWidth > 800 && site == 'sub3') {
    gsap.to(img2, { x: window.innerWidth / 2, y: 150, duration: 2 });
    page1text2.style = style3;
    img2.scale.x = 0.4;
    img2.scale.y = 0.4;
  }
};

let media5 = () => {
  if (window.innerWidth < 800 && site == 'sub2') {
    page1text3.style = style5;
  } else if (window.innerWidth > 800 && site == 'sub2') {
    page1text3.style = style4;
  }
};
back.zIndex = 0;
richText.zIndex = 1;
icon1.on('pointerdown', iclick);
icon2.on('pointerdown', iclick2);
icon3.on('pointerdown', iclick3);
icon1.on('pointerover', ihover);
icon1.on('pointerout', ihoverout);

back.on('pointerdown', media2);
richText.on('pointerdown', media2);

icon1.on('pointerdown', media3);
icon3.on('pointerdown', media4);
icon2.on('pointerdown', media5);

icon2.on('pointerover', ihover2);
icon2.on('pointerout', ihoverout2);
img1.on('pointerdown', getsite);

icon3.on('pointerover', ihover3);
icon3.on('pointerout', ihoverout3);

iarrow2.on('pointerdown', clickV);
iarrow3.on('pointerdown', textup);
iarrow.on('pointerdown', arrowback);
iarrow.on('pointerdown', media2);
window.addEventListener('load', resload);
window.addEventListener('resize', res);
app.stage.on('resize', getsite);
window.addEventListener('resize', Media);

window.addEventListener('scroll', scroll);

let count = 0;

displacementFilter.scale.x = 30;
displacementFilter.scale.y = 60;

function Media() {
  if (window.innerWidth > 800 && site == 'main') {
    // If media query matches
    console.log('> 800');

    console.log('Main');
    click();
    icon1.scale.x = 0.45;
    icon1.scale.y = 0.45;

    icon2.scale.x = 0.45;
    icon2.scale.y = 0.45;

    icon3.scale.x = 0.45;
    icon3.scale.y = 0.45;

    icon1.on('pointerover', ihover);
    icon1.on('pointerout', ihoverout);

    icon2.on('pointerover', ihover2);
    icon2.on('pointerout', ihoverout2);

    icon3.on('pointerover', ihover3);
    icon3.on('pointerout', ihoverout3);
  } else if (window.innerWidth < 800 && site == 'main') {
    console.log(' not > 800');

    console.log('Main');
    click();
    icon1.scale.x = 0.25;
    icon1.scale.y = 0.25;

    icon2.scale.x = 0.25;
    icon2.scale.y = 0.25;

    icon3.scale.x = 0.25;
    icon3.scale.y = 0.25;

    icon1.off('pointerover', ihover);
    icon1.off('pointerout', ihoverout);

    icon2.off('pointerover', ihover2);
    icon2.off('pointerout', ihoverout2);

    icon3.off('pointerover', ihover3);
    icon3.off('pointerout', ihoverout3);

    gsap.to(icon1, { y: 105, x: 70, duration: 2 });
    gsap.to(icon2, { y: 500, x: 70, duration: 2 });
    gsap.to(icon3, { y: 300, x: 70, duration: 2 });
    gsap.to(icontext1, { y: 230, x: 70, duration: 2 });
    gsap.to(icontext2, { y: 630, x: 70, duration: 2 });
    gsap.to(icontext3, { y: 430, x: 70, duration: 2 });
  } else if (window.innerWidth < 800 && site == 'sub1') {
    gsap.to(img1, { x: 50, y: 450, duration: 2 });
    page1text.style = style5;
    img1.scale.x = 0.2;
    img1.scale.y = 0.2;
  } else if (window.innerWidth > 800 && site == 'sub1') {
    gsap.to(img1, { x: window.innerWidth / 2, y: 150, duration: 2 });
    page1text.style = style3;
    img1.scale.x = 0.4;
    img1.scale.y = 0.4;
  } else if (window.innerWidth < 800 && site == 'sub3') {
    gsap.to(img2, { x: 50, y: 450, duration: 2 });
    page1text2.style = style5;
    img2.scale.x = 0.2;
    img2.scale.y = 0.2;
  } else if (window.innerWidth > 800 && site == 'sub3') {
    gsap.to(img2, { x: window.innerWidth / 2, y: 150, duration: 2 });
    page1text2.style = style3;
    img2.scale.x = 0.4;
    img2.scale.y = 0.4;
  } else if (window.innerWidth < 800 && site == 'sub2') {
    page1text3.style = style5;
  } else if (window.innerWidth > 800 && site == 'sub2') {
    page1text3.style = style4;
  }
}

const blurFilter1 = new PIXI.filters.BlurFilter();
back2.filters = [blurFilter1];
blurFilter1.blur = 0;

app.ticker.add((delta) => {
  count += 0.005;

  //const blurAmount = Math.cos(count);
  //blurFilter1.blur = 20 * (blurAmount);
  displacementSprite.position.x += 0.3 * delta;
  displacementSprite.position.y += 0.3 * delta;
  app.renderer.render(cont1);
  app.renderer.render(cont2);
});
