document.addEventListener('DOMContentLoaded', function () {
    // Get the selected year data from sessionStorage
    const selectedYearDataStorage = sessionStorage.getItem('selectedYearData');

    if (selectedYearDataStorage) {
        // Parse the JSON string back to JavaScript object
        const selectedYearData = JSON.parse(selectedYearDataStorage);
        renderDataOnPage(selectedYearData);
    } else if (selectedYearDataStorage.includes('Mark')) {
        // als het jaar 2017 is voeg additional data toe
        const SelectedYearDataAD = getAdditionalData();
        console.log("Selected year data AD:", SelectedYearDataAD);
        renderDataOnPageCorrect(selectedYearData, SelectedYearDataAD);
    } else {
        console.error('No selected year data found in sessionStorage.');
    }
});

// get data from api
async function getAdditionalData() {
    try {
        const response = await fetch('additionalinfo.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Render the data on the demopage.html
function renderDataOnPage(selectedYearData) {
    console.log("Selected year data:", selectedYearData);
    const speakerContainer = document.querySelector('.speakerinfo');

    // get the speaker name and talk title
    const speakerName = selectedYearData.name;
    let talkTitle = selectedYearData.talk.title;
    let talkDescription = selectedYearData.talk.description;
    const DataYTLink = selectedYearData.talk.video['youtube-link'];

    console.log("Talk title:", talkTitle);
    console.log("Speaker:", speakerName);

    // Replace < and > with their HTML entity equivalents
    if (talkTitle.includes('<') || talkTitle.includes('>')) {
        console.log("Talk title includes < or >");
        talkTitle = talkTitle.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    } else {
        console.log("Talk title does not include < or >");
    }

    //  if there
    if (talkDescription === false) {
        talkDescription = "";
        const htmlStructure = `
        <h2 class="speaker-name">${talkTitle} by ${speakerName}</h2>
    `

        console.log("HTML structure:", htmlStructure);
        speakerContainer.innerHTML = htmlStructure;
    } else {
        const htmlStructure = `
        <h2 class="speaker-name">${talkTitle} by ${speakerName}</h2>
        <p class="talk-description">${talkDescription}</p>
    `
        speakerContainer.innerHTML = htmlStructure;
    }

    const profileCard = `
    <div>
    <div><img src="images/face.png"></img></div>
    <div>
      <h3>${speakerName}</h3>
      <p>Job title here</p>
    </div>
  </div>
  <p>
  Lorem ipsum dolor sit amet. Est expedita necessitatibus qui odio beatae et nemo animi ab adipisci galisum aut iste vero. Eos tenetur animi eum perferendis blanditiis ea consectetur ratione.
  </p>
  <a class="yt-link" href="${DataYTLink}">
    <svg width="86" height="60" viewBox="0 0 86 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M83.3814 9.26467C82.8934 7.48175 81.9624 5.85734 80.6785 4.54844C79.3947 3.23955 77.8013 2.29044 76.0525 1.79286C69.4887 5.14035e-05 43.0721 5.07625e-05 43.0721 5.07625e-05C43.0721 5.07625e-05 16.7221 -0.0357331 10.0917 1.79286C8.34283 2.29044 6.74947 3.23955 5.4656 4.54844C4.18173 5.85734 3.25076 7.48175 2.76269 9.26467C1.51845 16.1157 0.905035 23.0702 0.930446 30.0376C0.909839 36.9787 1.52323 43.9067 2.76269 50.7318C3.25076 52.5147 4.18173 54.1391 5.4656 55.448C6.74947 56.7569 8.34283 57.706 10.0917 58.2036C16.6484 60 43.0721 60 43.0721 60C43.0721 60 69.4185 60 76.0525 58.2036C77.8013 57.706 79.3947 56.7569 80.6785 55.448C81.9624 54.1391 82.8934 52.5147 83.3814 50.7318C84.595 43.9042 85.1825 36.9762 85.1365 30.0376C85.1874 23.0727 84.5998 16.1181 83.3814 9.26467ZM34.6409 42.8878V17.148L56.6279 30.0376L34.6409 42.8878Z"
        fill="black" />
    </svg>
    <p class="yt-title">${talkTitle}</p>
  </a>`

    const profileCardContainer = document.querySelector('.profile-card');
    profileCardContainer.innerHTML = profileCard;
}

//  render addiontal data on the demopage.html
function renderDataOnPageCorrect(selectedYearData, SelectedYearDataAD) {
    console.log("Selected year data:", selectedYearData);
    const speakerContainer = document.querySelector('.speakerinfo');

    // get the speaker name and talk title
    const speakerName = selectedYearData.name;
    let talkTitle = selectedYearData.talk.title;
    let talkDescription = selectedYearData.talk.description;
    const DataYTLink = selectedYearData.talk.video['youtube-link'];

    console.log("Talk title:", talkTitle);
    console.log("Speaker:", speakerName);

    // Replace < and > with their HTML entity equivalents
    if (talkTitle.includes('<') || talkTitle.includes('>')) {
        console.log("Talk title includes < or >");
        talkTitle = talkTitle.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    } else {
        console.log("Talk title does not include < or >");
    }

    //  if there
    if (talkDescription === false) {
        talkDescription = "";
        const htmlStructure = `
        <h2 class="speaker-name">${talkTitle} by ${speakerName}</h2>
    `

        console.log("HTML structure:", htmlStructure);
        speakerContainer.innerHTML = htmlStructure;
    } else {
        const htmlStructure = `
        <h2 class="speaker-name">${talkTitle} by ${speakerName}</h2>
        <p class="talk-description">${talkDescription}</p>
    `
        speakerContainer.innerHTML = htmlStructure;
    }

    const profileCard = `
    <div>
    <div><img src="images/face.png"></img></div>
    <div>
      <h3>${speakerName}</h3>
      <p>Job title here</p>
    </div>
  </div>
  <p>
  Lorem ipsum dolor sit amet. Est expedita necessitatibus qui odio beatae et nemo animi ab adipisci galisum aut iste vero. Eos tenetur animi eum perferendis blanditiis ea consectetur ratione.
  </p>
  <a class="yt-link" href="${DataYTLink}">
    <svg width="86" height="60" viewBox="0 0 86 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M83.3814 9.26467C82.8934 7.48175 81.9624 5.85734 80.6785 4.54844C79.3947 3.23955 77.8013 2.29044 76.0525 1.79286C69.4887 5.14035e-05 43.0721 5.07625e-05 43.0721 5.07625e-05C43.0721 5.07625e-05 16.7221 -0.0357331 10.0917 1.79286C8.34283 2.29044 6.74947 3.23955 5.4656 4.54844C4.18173 5.85734 3.25076 7.48175 2.76269 9.26467C1.51845 16.1157 0.905035 23.0702 0.930446 30.0376C0.909839 36.9787 1.52323 43.9067 2.76269 50.7318C3.25076 52.5147 4.18173 54.1391 5.4656 55.448C6.74947 56.7569 8.34283 57.706 10.0917 58.2036C16.6484 60 43.0721 60 43.0721 60C43.0721 60 69.4185 60 76.0525 58.2036C77.8013 57.706 79.3947 56.7569 80.6785 55.448C81.9624 54.1391 82.8934 52.5147 83.3814 50.7318C84.595 43.9042 85.1825 36.9762 85.1365 30.0376C85.1874 23.0727 84.5998 16.1181 83.3814 9.26467ZM34.6409 42.8878V17.148L56.6279 30.0376L34.6409 42.8878Z"
        fill="black" />
    </svg>
    <p class="yt-title">${talkTitle}</p>
  </a>`

    const profileCardContainer = document.querySelector('.profile-card');
    profileCardContainer.innerHTML = profileCard;
}