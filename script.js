function calculate() {
    // Fetch values from the input fields
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    
    // Generate a random love score between 0 and 100
    let love = Math.random() * 100;
    
    // Log to console as seen in the background code
    console.log(love);
    
    // Update the result paragraph with the formatted string
    document.getElementById("result").innerText = name1 + "🤎Love " + name2 + "=" + Math.floor(love) + "%";
}