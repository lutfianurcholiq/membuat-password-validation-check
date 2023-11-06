const passwordInput = document.getElementById("password");
const iconEye = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

// aturan requirement password
const requirements = [
    {
        regex: /.{8,}/,
         index: 0
    },
    {
        regex: /[0-9]/,
        index: 1
    },
    {
        regex: /[a-z]/,
        index: 2
    },
    {
        regex: /[^A-Za-z0-9]/,
        index: 4
    },
    {
        regex: /[A-Z]/,
        index: 3
    }
]

passwordInput.addEventListener("keyup", (e) => {
    requirements.forEach(item => {
        // mengecek password validation sesuai requirement
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // melakukan update class dan icon sesuai dengan kondisi validasi
        if (isValid) {
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check";
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
        });
});

    iconEye.addEventListener("click", () => {
        // toggle password input between "password" and "text"
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        // update eye icon
        iconEye.className = `fa-solid fa-eye${passwordInput.type === "password" ? "" : "-slash"}`;
    });