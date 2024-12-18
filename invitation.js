// Function to replace content dynamically
function replaceContent() {
    // Declare variables to store input field values
    var myRecipientName = document.getElementById("recipientNameInput").value;
    var myHostName = document.getElementById("hostNameInput").value;

    // Update placeholders in the article
    document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
    document.getElementById("hostNamePlaceholder").innerHTML = myHostName;
}
