<?php
  // Message Variables
  $result = '';

  // // Check For Submit
  if(filter_has_var(INPUT_POST, 'submit')) {
  //   // Get Form Data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $ages = $_POST['ages'];
    $begin = $_POST['begin'];
    $days = $_POST['days'];
    $location = $_POST['location'];
    $details = $_POST['details'];

    $recipient = "mgkidconnection@maplegrovekidconnection.com";
    $subject  = "Referral Request from $name";
    $body = "<h4>Name:</h4><p>'$name'</p>
             <h4>Email:</h4><p>'$email'</p>
             <h4>Phone Number:</h4><p>'$phone'</p>
             <h4>Ages of Children:</h4><p>'$ages'</p>
             <h4>Begin Care:</h4><p>'$begin'</p>
             <h4>Days/Hours Needed:</h4><p>'$days'</p>
             <h4>Location Preferred:</h4><p>'$location'</p>
             <h4>Additional Details:</h4><p>'$details'</p>
          ";

    $headers = "MIME-Version: 1.0" ."\r\n";
    $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: " .$name. "<".$email.">". "\r\n";

    if(mail($recipient, $subject, $body, $headers)) {
      $result = 'success';
    }
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <!-- Fonts & Icons -->
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700|Quicksand:400,500,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.lineicons.com/1.0.1/LineIcons.min.css">

  <!-- CSS -->
  <link rel="stylesheet" href="css/style.css">

  <title>Maple Grove Kid Connection</title>
</head>
<body>
  <header class="home">
    <div class="container">
      <div class="home__header">
        <p class="home__title">Maple Grove <br class="home__title-break">Kid Connection</p>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item nav__item--contact">Contact Us <i class="lni-chevron-down"></i>
              <div class="nav__contact-box">
                <div class="nav__contact-email">
                  <h3>Email</h3>
                  <p>mgkidconnection@gmail.com</p>
                </div>
                <div class="nav__contact-phone">
                  <h3>Phone (available 9am-3pm, M-F)</h3>
                  <p>(763) 494-4851</p>
                </div>
              </div>
            </li>
            <li class="nav__item"><a href="#" class="nav__cta btn modal-trigger">Free Referral</a></li>
          </ul>
        </nav>
      </div>

      <div class="home__content-box">
        <h1 class="home__heading">Affordable <br class="home__heading-break">in-home daycare</h1>
        <p class="home__paragraph mb-md">There's no need to call dozens of providers as you look for an opening. We will connect you with a licensed daycare provider.</p>
        <a href="#" class="home__cta btn btn--lg modal-trigger">Get my free referral</a>
      </div>
    </div>

    <div class="modal">
      <div class="modal__content-box">
        <div class="modal__close"><i class="lni-cross-circle"></i></div>

        <form class="form" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
          <div class="form__content-box">

            <div class="form__section form__section--1">
              <label for="name" class="form__label">Name:</label>
              <input type="text" id="name" name="name" class="form__name form__text-input">
              <label for="email" class="form__label">Email:</label>
              <input type="email" id="email" name="email" class="form__email form__text-input">
              <label for="phone" class="form__label">Phone Number:</label>
              <input type="text" id="phone" name="phone" class="form__phone form__text-input">
            </div>

            <div class="form__section form__section--2">
              <label for="ages" class="form__label">Ages of children (at the time you wish to begin care):</label>
              <input type="text" id="ages" name="ages" class="form__ages form__text-input" placeholder="ex: newborn, 5 year old">
              <label for="begin" class="form__label">Begin care date (estimate):</label>
              <input type="text" id="begin" name="begin" class="form__begin form__text-input" placeholder="ex: September, 2019">
              <label for="days" class="form__label">Days & hours you need care:</label>
              <input type="text" id="days" name="days" class="form__days form__text-input" placeholder="ex: Mon-Fri, 7:30am - 5:00pm">
            </div>

            <div class="form__section form__section--3">
              <label for="location" class="form__label">Preferred location in Maple Grove:</label>
              <input type="text" id="location" name="location" class="form__location form__text-input" placeholder="ex: near Rice Lake Elementary, etc.">
              <label for="details" class="form__label">Additional Details:</label>
              <textarea type="text" id="details" name="details" class="form__details form__text-input"></textarea>
            </div>

            <div class="form__error">
              <p class="form__error-message">Please fill out all fields</p>
            </div>
          </div>

          <div class="form__prev"><i class="lni-arrow-left-circle"></i></div>
          <div class="form__next"><i class="lni-arrow-right-circle"></i></div>
          <div class="form__progress">
            <div class="form__dot form__dot--1"></div>
            <div class="form__dot form__dot--2"></div>
            <div class="form__dot form__dot--3"></div>
          </div>
          <button type="submit" name="submit" class="form__submit">Submit</button>
        </form>

      </div>
    </div>

    <?php if($result == 'success'): ?>
      <div class="form__confirmation">
        <div class="form__confirmation-close"><i class="lni-cross-circle"></i></div>
        <p class="form__confirmation-message">Thank you!<br>We will contact you shortly.</p>
      </div>
    <?php endif; ?>
  </header>

  <script src="js/main.js"></script>
</body>
</html>