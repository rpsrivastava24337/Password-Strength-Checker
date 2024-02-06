var enterPassword = document.querySelector(".pwd")
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    let length = enterPassword.value.length
    let count=0;
    let str = enterPassword.value

    for (i = 0; i < length; i++) {
        for (j = i + 1; j < length; j++) {

            if (str[i] == str[j]) {
                count++
            }

        }
    }

    if (count > 0) {
        document.querySelector("p").innerHTML = "Your Password having Duplicate characters "
        document.querySelector("p").style.color = "red"
    }

    else if (length > 0 && length <= 4) {
        document.querySelector("p").innerHTML = "Your Password is Weak " + " only  having = " + enterPassword.value.length + " charcter"
        document.querySelector("p").style.color = "red"
    }

    else if (length >= 5 && length <= 8) {
        document.querySelector("p").innerHTML = "Your Password is Medium " + " having = " + enterPassword.value.length + " character"
        document.querySelector("p").style.color = "orange"
    }

    else if (length >= 9 && length <= 14) {
        document.querySelector("p").innerHTML = "Your Password is Strong " + " having = " + enterPassword.value.length + " character"
        document.querySelector("p").style.color = "greenyellow"
    }
    else if (length > 15) {
        document.querySelector("p").innerHTML = "Your Password is very Strong " + " having = " + enterPassword.value.length + " character"
        document.querySelector("p").style.color = "green"
    }

   

})
function myFunction() {
      
    if (enterPassword.type === "password") {
      enterPassword.type = "text";
    } else {
      enterPassword.type = "password";
    }
  }