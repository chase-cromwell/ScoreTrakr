<?php
$fp = fopen("score.xml", "w");
fwrite($fp, $_GET['data']);
fclose($fp);
?>