function validateForm() {
    // Get form data
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;
    let room = document.getElementById("room").value;
    let requests = document.getElementById("requests").value;
    let payment = document.getElementById("payment").value;

    // Check if all required fields are filled
    if (!name || !email || !phone || !checkin || !checkout || !guests || !room || !payment) {
        alert("Please fill in all required fields.");
    } else {
        alert(`Reservation submitted for ${name} in a ${room} room.`);
    }
}
