// main function to handle the entire workflow
async function Main() {
    // Get the selected year from the buttons
    const CSSdayYear = await getSelectedYear();

    // Fetch data for the selected year
    const data = await getData();

    // Find the data for the selected year
    const CSSdayYearData = findData(data, CSSdayYear);

    // Find the data in this year with the highest views
    let highestViewsTalk = findHigestViewData(CSSdayYearData);

    // Store the selected year data in sessionStorage
    sessionStorage.setItem('selectedYearData', JSON.stringify(highestViewsTalk));

    // Render to the demopage.html
    sendToPage(CSSdayYear, highestViewsTalk);
}


// Get the selected year from the buttons
async function getSelectedYear() {
    return new Promise(resolve => {
        // Get all cursor-trigger-element a
        const cursorTriggers = document.querySelectorAll('.cursor-trigger-element a');

        // Loop through each button to find the selected year
        cursorTriggers.forEach(cursorTrigger => {
            cursorTrigger.addEventListener('click', () => {
                const CSSdayYear = cursorTrigger.getAttribute('data-jaar');
                console.log("Selected year:", CSSdayYear);
                resolve(CSSdayYear);
            });
        });
    });
}

// Fetch data from the API for the selected year
async function getData() {
    try {
        const response = await fetch('https://cssday.nl/data.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}


// Find the data connected with the selected year
function findData(data, CSSdayYear) {
    if (!data) {
        console.log('No data found');
        return;
    } else {
        console.log("Data found:", data[CSSdayYear]);
        return data[CSSdayYear];
    }
}

// Find the data in this year with the highest views
function findHigestViewData(CSSdayYearData) {
    // loop door alle speakers van dat jaar en vind degene met de hoogste views
    const speakers = CSSdayYearData.speakers;

    // Array to store all views from all talks
    const allViews = [];

    // loop door alle speakers en vind de views van de talks
    speakers.forEach((speaker) => {
        // van elke speaker wil ik de talk vinden
        const talk = speaker.talk;
        // console.log("de talk van deze spreker is: ", talk);

        // van elke talk wil ik de views vinden, die in de video zitten
        const video = talk.video;

        if (!video) {
            return;
        } else {
            const views = video.views;
            allViews.push(views);
        }
    });

    // Vind de hoogste views van alle talks
    const highestViews = Math.max(...allViews);

    // zoek de talk met de hoogste views
    const highestViewsTalk = speakers.find((speaker) => {
        const talk = speaker.talk;
        const video = talk.video;
        const views = video.views;

        return views === highestViews;
    });

    return highestViewsTalk;
}

// Render data on demopage.html
function sendToPage(CSSdayYear, highestViewsTalk) {
    // Redirect to demopage.html with query parameters
    window.location.href = `demopage.html?CSSDAY-${CSSdayYear}`;
    localStorage.setItem('selectedYearData', JSON.stringify(CSSdayYear));
}


Main();