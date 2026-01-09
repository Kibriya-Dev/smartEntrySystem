// wesy to chal rha hai agr koi mistake lgy to changes krdena bhai 

let checkBtn = document.getElementById("Checkbtn");

checkBtn.addEventListener("click", function() {
    
    let ageInput = document.getElementById("age");
    let lateInput = document.getElementById("late");
    let warningsInput = document.getElementById("warnings");

    let admitInput = document.querySelector('input[name="admit"]:checked');
    let feeInput = document.querySelector('input[name="fee"]:checked');

    let age = Number(ageInput.value);
    let lateMinutes = Number(lateInput.value);
    let warningsCount = Number(warningsInput.value);
    let hasAdmitCard = admitInput ? admitInput.value : null;
    let feePaid = feeInput ? feeInput.value : null;

    let resultMsg = document.querySelector(".result-msg");

    if (!age || !hasAdmitCard || !feePaid || lateMinutes < 0 || warningsCount < 0) {
        resultMsg.innerText = "Please fill all fields correctly!";
        resultMsg.className = "result-msg not-allowed";
        return;
    }

    if (age >= 18 && hasAdmitCard === "yes" && feePaid === "yes") {

        
        if (lateMinutes > 10) {
            if (warningsCount >= 2) {
                ++warningsCount; 
                resultMsg.innerText = "Entry Denied due to late arrival";
                resultMsg.className = "result-msg not-allowed";
            } else {
                warningsCount++; 
                resultMsg.innerText = "Entry Allowed with Warning";
                resultMsg.className = "result-msg allowed";
            }
        } else {
            
            resultMsg.innerText = "Entry Allowed";
            resultMsg.className = "result-msg allowed";
        }

    } else {
        
        ++warningsCount; 
        resultMsg.innerText = "Entry Denied due to missing requirements";
        resultMsg.className = "result-msg not-allowed";
    }

   
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });

});
