function getResolution() {
    let res = `Your screen resolution is: ${window.screen.width * window.devicePixelRatio}  x ${window.screen.height * window.devicePixelRatio}`;
    document.getElementById("resolution").innerHTML = res;
}


function iOS_version() {
    if (navigator.userAgent.match(/ipad|iphone|ipod/i)) { //if the current device is an iDevice
        let ios_info = {};
        ios_info.User_Agent = navigator.userAgent;
        ios_info.As_Reported = (navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0];
        ios_info.Major_Release = (navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0];
        ios_info.Full_Release = (navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].replace(/_/g, ".");
        ios_info.Major_Release_Numeric = +(navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].split('_')[0].replace("OS ", "");
        ios_info.Full_Release_Numeric = +(navigator.userAgent).match(/OS (\d)?\d_\d(_\d)?/i)[0].replace("_", ".").replace("_", "").replace("OS ", ""); //converts versions like 4.3.3 to numeric value 4.33 for ease of numeric comparisons
        // return (ios_info);

        console.log(ios_info);
        document.getElementById("useragent").innerHTML = `Useragent: ${ios_info.User_Agent}`;
        document.getElementById("fullrelease").innerHTML = `iOS Version: ${ios_info.Full_Release}`;
    }
}

function getLocale() {
    const locale = navigator.language;
    console.log(locale);
    document.getElementById("locale").innerHTML = `Locale: ${locale}`;
}