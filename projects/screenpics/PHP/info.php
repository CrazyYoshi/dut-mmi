<h1>DB TEST</h1>
<?php 
    $db = mysqli_connect('localhost', 'root', '', 'screenpics');
    // Check connection
    if (!$db) {
        die("Connection failed: " . mysqli_connect_error());
    }
    
    $req = "SELECT * FROM `ScreenPics_tags`";
    $query = mysqli_query($db,$req);
    while($results = mysqli_fetch_assoc($query)){
        var_dump($results);
    }
    mysqli_close($db);

?>