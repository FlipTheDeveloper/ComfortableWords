<?php
/* 
Some Validation To Ensure Everything will be hunky-dory

*/
if (!isset($title)) {
    $title = "Gabriel Pierce";
} else {
    $title .= " | Gabriel Pierce";
}

if (!isset($index)) {
    $index = -1;
}

if (!isset($file_type)) {
    $file_type = "html";
}
?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="css/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
    <title><?php echo $title ?></title>
    <link rel="shortcut icon" type="svg" href="images/drawing.svg" />
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-215052267-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'UA-215052267-1');
    </script>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="images/drawing.svg" alt="Gabriel Pierce's Business Solutions Icon" height="30">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <?php
                    $cur = 0;
                    $text = "Home";
                    $file_name = "index";
                    $display = ".";
                    ?>
                    <li class="nav-item <?php echo ($display == "." || $display == $file_type ? "" : "d-none") ?>">
                        <a class="nav-link <?php echo ($index == $cur ? "active" : "") ?>" <?php echo ($index == $cur ? 'aria-current="page"' : "") ?> href="<?php echo ($index == $cur ? "#" : "$file_name.$file_type") ?>"><?php echo $text ?></a>
                    </li>

                    <?php
                    $cur = 1;
                    $text = "Resume";
                    $file_name = "resume";
                    $display = ".";
                    ?>
                    <li class="nav-item <?php echo ($display == "." || $display == $file_type ? "" : "d-none") ?>">
                        <a class="nav-link <?php echo ($index == $cur ? "active" : "") ?>" <?php echo ($index == $cur ? 'aria-current="page"' : "") ?> href="<?php echo ($index == $cur ? "#" : "$file_name.$file_type") ?>"><?php echo $text ?></a>
                    </li>

                    <?php
                    $cur = 2;
                    $text = "Schedule";
                    $file_name = "schedule";
                    $display = "php";
                    ?>
                    <li class="nav-item <?php echo ($display == "." || $display == $file_type ? "" : "d-none") ?>">
                        <a class="nav-link <?php echo ($index == $cur ? "active" : "") ?>" <?php echo ($index == $cur ? 'aria-current="page"' : "") ?> href="<?php echo ($index == $cur ? "#" : "$file_name.$file_type") ?>"><?php echo $text ?></a>
                    </li>

                    <?php
                    $cur = 3;
                    $text = "Contact";
                    $file_name = "contact";
                    $display = "html";
                    ?>
                    <li class="nav-item <?php echo ($display == "." || $display == $file_type ? "" : "d-none") ?>">
                        <a class="nav-link <?php echo ($index == $cur ? "active" : "") ?>" <?php echo ($index == $cur ? 'aria-current="page"' : "") ?> href="<?php echo ($index == $cur ? "#" : "$file_name.$file_type") ?>"><?php echo $text ?></a>
                    </li>

                </ul>
                <form class="d-flex">
                    <a class="nav-link" href="https://www.livingwaters.com/are-you-a-good-person/?" target=”_blank”><img src="images/cross.svg"></a>
                </form>
            </div>
        </div>
    </nav>
    <main>