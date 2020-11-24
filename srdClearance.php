<?php
    if ($_POST['clearance'] === 'ass'){
        $cookieName = 'SRDClearance';
        $cookieValue = 1;
        setcookie($cookieName, $cookieValue);
    } 
    
    header('Location: ' . $_SERVER['HTTP_REFERER']);
    exit;
?>