<?php
$servername = "localhost";
$username = "root";
$password = "gupta@1";
$dbname = "appointments_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $service = $conn->real_escape_string($_POST['service']);
    $appointment_date = $conn->real_escape_string($_POST['date']);

    $appointment_date = date('Y-m-d H:i:s', strtotime($appointment_date));

    $sql = "INSERT INTO appointments (name, email, service, appointment_date) VALUES ('$name', '$email', '$service', '$appointment_date')";

    if ($conn->query($sql) === TRUE) {
        echo "Appointment booked successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
$conn->close();
?>
