//Object Employee

// Step1
function Employee(email, fname, lname, dob) {
	this.email = email;
	this.fname = fname;
	this.lname = lname;
	this.dob = dob;
}

// ************************* End Of Step 1 *******************************

// Step2

//new object for designing our outputs

function EmplStyle() {}

EmplStyle.prototype.addEmployee = function (emp) {
	var tbody = document.querySelector("#tbody");
	var trow = document.createElement("tr");

	trow.innerHTML = `
      
    <td>${emp.email}</td>
        <td>${emp.fname}</td>
        <td>${emp.lname}</td>
        <td>${emp.dob}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
	tbody.appendChild(trow);
};

EmplStyle.prototype.showAlerts = function (message, className) {
	var newDiv = document.createElement("div");
	newDiv.className = `warning ${className}`;
	// newDiv.innerText = `${message}`
	newDiv.appendChild(document.createTextNode(message));

	containers = document.querySelector(".container");
	form_selector = document.querySelector("#form-name");

	containers.insertBefore(newDiv, form_selector);

	setTimeout(function () {
		document.querySelector(".warning").remove();
	}, 1000);
};

EmplStyle.prototype.deleteRow = function (target) {
	// var tbody = document.querySelector("#tbody");
	// console.log('clicked')
	if (target.className == "delete") {
		target.parentElement.parentElement.remove();
	}
};

EmplStyle.prototype.clearInputs = function () {
	document.querySelector("#email").value = "";
	document.querySelector("#fname").value = "";
	document.querySelector("#lname").value = "";
	document.querySelector("#dob").value = "";
};

// ************************* End Of Step 2 *******************************

// Step 3

//event Listener

document
	.querySelector("#form-name")
	.addEventListener("submit", function (events) {
		const email = document.querySelector("#email").value,
			fname = document.querySelector("#fname").value,
			lname = document.querySelector("#lname").value,
			dob = document.querySelector("#dob").value;

		localStorage.setItem("email", email);

        var localStorage_email = localStorage.getItem("email");

        localStorage.setItem("fname", fname);

        var localStorage_fname = localStorage.getItem("fname");

        localStorage.setItem("lname", lname);

        var localStorage_lname = localStorage.getItem("lname");


        localStorage.setItem("dob", dob);

        var localStorage_dob = localStorage.getItem("dob");

		emp1 = new Employee(localStorage_email, localStorage_fname, localStorage_lname, localStorage_dob);
		// console.log(emp1)
		empStyle = new EmplStyle();

		// console.log(empStyle)

		if (email == "" || fname == "" || lname == "" || dob == "") {
			empStyle.showAlerts("Please Fill All Fields", "error");
		} else {
			empStyle.addEmployee(emp1);
			empStyle.showAlerts("Inserted Successfully", "success");
		}

		// empStyle.addEmployee(emp1);
		// empStyle.clearInputs();

		// empStyle.deleteRow();
		empStyle.clearInputs();
		events.preventDefault();
	});

document.querySelector("#tbody").addEventListener("click", function (event) {
	empStyle.deleteRow(event.target);
	empStyle.showAlerts("Deleted Succesfully!", "success");
	event.preventDefault();
});

// ************************* End Of Step 3 *******************************
