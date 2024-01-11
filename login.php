<?php
// Database connection parameters
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'login_db';

// Create a database connection
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve username and password from the form
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Validate
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);
    
    // Query to check if the user exists in the database
    $query = "SELECT * FROM user WHERE username='$username' AND password='$password'";
    $result = $conn->query($query);

    // Auhentication
    if ($result->num_rows > 0) {
        // Authentication successful
        header("Location: index.html");
        exit();
    } else {
        // Authentication failed
        $response = array('status' => 'error', 'message' => 'Incorrect username or password.');
    }

    // JSON response
    header('Content-Type: application/json');
    echo json_encode($response);
    $conn->close();
    exit();
}
?>