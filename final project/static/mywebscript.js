function runSentimentAnalysis() {

    // Get text from textarea
    let text = document.getElementById("textToAnalyze").value;

    // Create request
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "/emotionDetector?textToAnalyze=" + encodeURIComponent(text), true);

    // Handle response
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById("system_response").innerHTML = xhr.responseText;
        } else {
            document.getElementById("system_response").innerHTML = "Error processing request.";
        }
    };

    // Send request
    xhr.send();
}