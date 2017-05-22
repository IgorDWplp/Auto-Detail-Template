

<?php



	if (isset($_POST["submit"])) {
   $crlf = "\r\n";
    //Get Data
    $name = strip_tags($_POST['name']);
    $email = strip_tags($_POST['email']);
    $phone = strip_tags($_POST['tel']);
 
    $subject = strip_tags($_POST['subject']);
    $message = strip_tags($_POST['message']);

    // Parse/Format/Verify Data
   $from = 'Detailing kontakt forma'; 
   $to = 'info@detailing-star.hr'; 
   $subject = 'Poruka s detailing Autostakala > zaštita farova od oštećenja';
                

	
	
	
	 $message = ' 
<html><head></head>
 
    <body>
	<br/>
              <img src="http://detailing-star.hr/assets/template/images/logo.png" alt=""/>
        <div>
          <table style="width: 400px;" border="1">
              
              <tr>
                  <th colspan="2"><h3>Obrazac s zaštita farova od oštećenja</h3></th>
              </tr>
              
              <tr>
                  <td colspan="2"><p><strong>Subjekt : '.$subject.'</strong></p> </td>
                
              </tr>
              
              
              

               <tr>
                  <td>Ime :</td>
                 <td> <p>'.$name.'</p></td>
              </tr>
              
            
              
              <tr>
                  <td>tel :</td>
                  <td> <p>'.$phone.'</p></td>
              </tr>
              
                <tr>
                  <td>E-mail :</td>
                  <td>  <p>'.$email.'</p></td>
              </tr>
              
              
            
              <tr>
                  
                  
               <tr><td colspan="2" style="background-color:#F1F1F1; ">
                       
              <table>
                  <tr><td>
                          <p>'.$message.'</p>
                  </td></tr>
               
                      
                 
              </table> 
               </td></tr>
                     
                     
                     
             
             </table>
        </div>
        
    </body>
</html>
';
	 
	 
	 
	


    $headers = 'From: ' . $from  . $crlf .
               'Reply-To: ' . $from  . $crlf .
               'Content-Type: text/html; charset=UTF-8';
	
   
   
   
   
    if (!$_POST['name']) 
   {
   $errName = 'Molimo unesite svoje ime';
     $warning ='<div class="thankyou">Obrazac nije potvrđen, provjerite polja</div>';
   }
   
     if (!$_POST['tel']) 
   {
    $errTel = 'Molimo unesite svoje kontakt broj';
       $warning ='<div class="thankyou">Obrazac nije potvrđen, provjerite polja</div>';
    
   }
   
   
   if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) 
           {$errEmail = 'Molimo unjeti valjanu, ispravnu e-mail adresu';
             $warning ='<div class="thankyou">Obrazac nije potvrđen, provjerite polja</div>';
   }
   

           
           
           
      if (!$errName && !$errEmail && !$errMessage) {

	if (  mail($to, $subject, $message, $headers)) {

		$result='<div class="thankyou">Hvala što ste nas kontakirali!</div>';
              
                 echo "<script>alert('Hvala što ste nas kontakirali!');</script>";

	} else {

		$result='<div class="thankyou">Problem s slanjem poruke, pokušajte kasnije!</div>';
                               

}

}     
}

?>



<!DOCTYPE html>
<!--[if lte IE 7 ]> <html class='ie ie7 lt-ie8' lang='en'> <![endif]-->
<!--[if IE 8 ]> <html class='ie ie8 lt-ie8' lang='en'> <![endif]-->
<!--[if IE 9 ]> <html class='ie ie9' lang='en'> <![endif]-->
<!--[if gt IE 9]> <!--><html lang='en'><!-- <![endif]-->
<head><meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="zaštita farova, folija za auta, SunTek, poliranje farova, zaštita stakla, popravak stakla, poliranje auta , carglass, ogrebotina laka, uklanjanje ogrebotina, ogrebotina ključem, auto detailing, detailing, njega vozila, zaštita vozila, poliranje vozila" />
  <meta name="description" content="Zaštitite svoj automobil pomoču najmoderne nanotehnologije. Zaštita farova od oštećenja folijom SunTec. Poliranje, nano premazi, priprema auta za prodaju…">
  <meta name="robots" content="all ">
  <title>Detailing Star | Profesionalna Njega Vozila | Zaštita farova od oštećenja</title>

  <link rel="shortcut icon" href="../assets/template/images/favicon.ico">
  <link href="../assets/template/css/style.css?v=128" media="all" rel="stylesheet">
  <link href="../assets/template/css/mobile.css?v=1" media="all" rel="stylesheet">
  <link href="../assets/template/css/my.css" media="all" rel="stylesheet">
  <link rel="stylesheet" href="../backformer/core/themes/default/bf.css" type="text/css">
  <!--[if lte IE 8]>
  <link href="../assets/template/css/old-ie.css" media="all" rel="stylesheet">
  <script src="../assets/template/js/css3-mediaqueries.js"></script>
  <![endif]--><!--[if lt IE 9]>
  <script src="../assets/template/js/ie9.js"></script>
  <![endif]-->

  <script src="//code.jquery.com/jquery-1.9.1.min.js"></script>
  <script type="text/javascript">
    window.jQuery || document.write("<script src='js/jquery.min.js'>\x3C/script>")
  </script>
  <script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
  <script src="../assets/template/js/jcarousellite.min.js"></script>
  <script src="../assets/template/js/jquery.kwicks.min.js"></script>
  <script src="../assets/template/js/banner.js"></script>
  <script src="../assets/template/js/jquery.fancybox.pack.js"></script>
  <script src="../assets/template/js/pin.js"></script>
  <script src="../assets/template/js/script.js?rand=125"></script>
  <script src="../assets/template/js/lib.js"></script>
  <script src="../assets/template/js/settings.js"></script>
<script type="text/javascript" src="../assets/components/shopkeeper/js/web/lang/ru.js?v=2.3.4"></script>
<script type="text/javascript" src="../assets/template/js/shop.js?v=2.3.4"></script>

<script src="../assets/template/js/jquery.popup.js" type="text/javascript"></script>
<link href="../assets/template/css/jquery.popup.css" rel="stylesheet" type="text/css"/>



</head>

<body>
  <div id="wrapper">
      
       <header>

               <div class="inner">

                  <a class="logo" href="../index.html"><img src="../assets/template/images/logo.png" alt="Detailing Star, centar za njegu vozila"></a>	

                  <div id="callback-form-container">

                     <div id="callback-overlay"></div>

                     <div id="callback-popup">        	<a href="javascript:void(0);" class="close-callback-popup">&times;</a>                        </div>

                  </div>

                  <div class="b-header-contacts">

                     <div class="callback">          	<a href="javascript:void(0);" class="open_callback_form">Webshop</a>         </div>

                     <div class="contact-item">		<span class="phone">01 4852 449</span>	  </div>

                     <div class="contact-item">			  </div>

                  </div>

                  <nav class="b-header-nav">

                     <ul>

                        <li  class="nav-item">	<a href="../index.html">Naslovna</a></li>

                        <li  class="nav-item">	<a href="../Onama.html">O nama</a></li>

                        <li  class="nav-item active">	<a href="../Usluge.html">Usluge</a></li>

                       <li  class="nav-item"><a class="js__p_start" href="#" >Webshop</a></li>

                        <li  class="nav-item last"><a href="../Galerija/gallery.html">Galerija radova</a></li>

                        <li  class="nav-item" style="display: none;">	<a href="../Obuka.html">Obuka</a></li>

                        <li  class="nav-item" style="display: none;">	<a href="../Partneri.html">Partneri</a></li>

                        <li  class="nav-item">	<a href="../Cijene.html">Cjenik</a></li>

                        <li  class="nav-item last">	<a href="../Kontakt/Kontakt.php">Kontakt</a></li>

                     </ul>

                     <div class="mobile-nav-close mobile-only"></div>

                  </nav>

                  <nav class="b-header-mobile-menu" style="display:none">

                     <div class="mobile-menu">

                        <a href="../Kontakt/Kontakt.php" title="Kontakt">

                           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">

                              <g>

                                 <path fill="#141515" d="M10,10.953c-2.239,0-4.061-1.821-4.061-4.06S7.761,2.833,10,2.833s4.061,1.821,4.061,4.06 S12.239,10.953,10,10.953z M10,4.233c-1.467,0-2.66,1.193-2.66,2.66s1.193,2.66,2.66,2.66s2.66-1.193,2.66-2.66	S11.467,4.233,10,4.233z"/>

                                 <path fill="#141515" d="M10,19.801l-0.545-0.675c-2.669-3.306-6.218-8.17-6.218-12.233C3.237,3.164,6.271,0.13,10,0.13	s6.763,3.034,6.763,6.763c0,4.069-3.549,8.93-6.218,12.234L10,19.801z M10,1.531c-2.957,0-5.362,2.405-5.362,5.362 c0,3.366,2.915,7.574,5.362,10.672c2.448-3.096,5.362-7.302,5.362-10.672C15.362,3.936,12.957,1.531,10,1.531z"/>

                              </g>

                           </svg>

                        </a>

                        <a href="tel:+1 4852 449" title="Telefon">

                           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">

                              <g>

                                 <path fill="#141515" d="M14.746,19.933c-3.122,0-6.896-2.61-9.481-5.197c-3.101-3.1-6.235-7.908-4.866-11.252l0.053-0.13 L3.732,0.07l5.569,5.57l-2.373,2.37c0.907,1.958,3.104,4.155,5.062,5.062l2.37-2.37l5.57,5.566l-3.283,3.281l-0.13,0.053 C15.963,19.829,15.367,19.933,14.746,19.933z M1.646,4.137c-0.767,2.187,1.105,6.106,4.607,9.609 c3.503,3.503,7.425,5.372,9.609,4.607l2.087-2.086l-3.59-3.587l-2.03,2.031l-0.423-0.158c-2.591-0.972-5.489-3.87-6.461-6.462 L5.288,7.669l2.033-2.031L3.732,2.05L1.646,4.137z"/>

                              </g>

                           </svg>

                        </a>

                        <a href="/cart/" title="webshop">

                           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">

                              <g>

                                 <polygon fill="#141515" points="17.502,15.164 5.871,15.164 2.39,2.175 0.285,2.175 0.285,0.774 3.464,0.774 6.945,13.764 17.502,13.764"/>

                                 <path fill="#141515" d="M17.503,12.552H7.852L5.478,3.687h14.399L17.503,12.552z M8.926,11.151h7.503l1.624-6.064H7.302 L8.926,11.151z"/>

                                 <path fill="#141515" d="M7.885,19.226c-0.919,0-1.666-0.746-1.666-1.663s0.747-1.664,1.666-1.664c0.917,0,1.664,0.747,1.664,1.664 S8.802,19.226,7.885,19.226z M7.885,17.299c-0.146,0-0.266,0.118-0.266,0.264c-0.001,0.287,0.528,0.29,0.529,0 C8.148,17.417,8.03,17.299,7.885,17.299z"/>

                                 <path fill="#141515" d="M16.004,19.226c-0.917,0-1.664-0.746-1.664-1.663s0.747-1.664,1.664-1.664s1.663,0.747,1.663,1.664 S16.921,19.226,16.004,19.226z M16.004,17.299c-0.146,0-0.264,0.118-0.264,0.264c0,0.286,0.526,0.287,0.526,0 C16.267,17.417,16.148,17.299,16.004,17.299z"/>

                              </g>

                           </svg>

                        </a>

                        <a title="Meni" class="mobile-menu-toggle">

                           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve">

                              <g>

                                 <rect y="2.305" width="20" height="1.4"/>

                                 <rect y="9.3" width="20" height="1.4"/>

                                 <rect y="16.295" width="20" height="1.4"/>

                              </g>

                           </svg>

                        </a>

                     </div>

                  </nav>

               </div>

            </header>   
      
      
 	<div class="b-top-banners banners-inner">
            
          <ul class="kwicks kwicks-horizontal">
              
              
              	<li>
	<a style="background-image: url(../assets/template/images/tmp/tmp_slider/newslider/interjer.jpg)" rel="Кузов"></a>
        </li>
              
      
        <li> 
           <a style="background-image: url(../assets/template/images/tmp/tmp_slider/newslider/eksterjer1.jpg)" rel="Кузов"></a>
        </li>
        
        
        
                    <li>
          <a style="background-image: url(../assets/template/images/tmp/tmp_slider/newslider/stakla.jpg)" rel="Салон"></a>
        </li>
      
        <li>
          <a style="background-image: url(../assets/template/images/tmp/tmp_slider/newslider/eksterjer_felga.jpg)" rel="Диски"></a>
        </li>
      </ul> 

    </div>

    <div class="main">
      <div class="inner">
        <div class="to-top">
          <a>na vrh</a>
        </div>
        
        
               <aside class="leftside">



                        <div class="leftside-sticky">

                            <div class="b-main-nav clr"><div class="main-nav-col">



                                    <a class="main-nav-title"><span>Eksterijer</span></a>

                                    <ul class="main-nav-list">





                                        <li class="main-nav-item">



                                            <a href="../Eksterijer/nano-titanska-zastita.php">Nano Titanska zaštita KRYTEX</a>



                                        </li>       





                                        <li class="main-nav-item">

                                            <a href="../Eksterijer/kompozitna-zastita.php">Kompozitna zaštita KRYTEX</a>



                                        </li>











                                        <li class="main-nav-item">

                                            <a href="../Eksterijer/nano-keramicka-zastita.php">Nano keramička zaštita KRYTEX</a>



                                        </li>











                                        <li class="main-nav-item">

                                            <a href="../Eksterijer/zastita-tekuce-staklo.php">Zaštita "Tekuće Staklo" KRYTEX</a>   

                                        </li>











                                        <li class="main-nav-item">

                                            <a href="../Eksterijer/polimerna-zastita-mega-quick.php">Polimerna zaštita Mega Quick</a>   

                                        </li>







                                        <li class="main-nav-item">

                                            <a href="../Eksterijer/poliranje-vozila.php">Poliranje vozila</a>



                                        </li>







                                        <li class="main-nav-item" style="display:none;">

                                            <a href="../Eksterijer/zastita-folijom-SunTek.php">Zaštita folijom SunTek</a>       

                                        </li>







                                        <li class="main-nav-item" style="display:none;">

                                            <a href="../Eksterijer/uklanjanje-ogrebotina.php">Uklanjanje ogrebotina</a>

                                        </li>







                                        <li class="main-nav-item" style="display:none;">

                                            <a href="../Eksterijer/lakiranje-auta.php">Lakiranje auta</a>

                                        </li>



                                    </ul>



                                </div>



                                <div class="main-nav-col">



                                    <a class="main-nav-title"><span>Interijer</span></a>



                                    <ul class="main-nav-list">





                                        <li class="main-nav-item">

                                            <a href="../Interijer/kemijsko-ciscenje-interjera.php">Kemijsko čišćenje interjera</a>

                                        </li>



                                        <li class="main-nav-item">

                                            <a href="../Interijer/nano-zastita-krytex.php">Nano zaštita KRYTEX</a>

                                        </li>



                                        <li class="main-nav-item">

                                            <a href="../Interijer/antibakterijska-obrada.php">Antibakterijska obrada klime i ventilacije</a>

                                        </li>



                                        <li class="main-nav-item">

                                            <a href="../Interijer/unistavanje-losih-mirisa-ozonom.php">Uništavanje loših mirisa ozonom</a>

                                        </li>





                                        <li class="main-nav-item" style="display:none;">

                                            <a href="../Interijer/aromatizacija-interijera-auta.php">Aromatizacija interijera auta</a>

                                        </li>



                                    </ul>



                                </div>



                                <div class="main-nav-col">



                                    <a class="main-nav-title"><span>Autostakla</span></a>



                                    <ul class="main-nav-list">



                                        <li class="main-nav-item">

                                            <a href="../Autostakla/nano-zastita-stakala.php">Nano zaštita stakala</a>

                                        </li>







                                        <li class="main-nav-item">

                                            <a href="../Autostakla/poliranje-farova.php">Poliranje farova</a>

                                        </li>







                                        <li class="main-nav-item">

                                            <a href="../Autostakla/zastita-farova-od-ostecenja.php">Zaštita farova od oštećenja</a>

                                        </li>









                                        <li class="main-nav-item">

                                            <a href="../Autostakla/toniranje-stakala.php">Toniranje stakala</a>

                                        </li>



                                        <li class="main-nav-item" style="display:none;">

                                            <a href="../Autostakla/anti-termalna-zastita-stakla-folijom-SunTek.php">Anti termalna zaštita stakla folijom SunTek</a>

                                        </li>



                                    </ul>



                                </div>



                                <div class="main-nav-col">



                                    <a class="main-nav-title"><span>Felge</span></a>



                                    <ul class="main-nav-list">





                                        <li class="main-nav-item">

                                            <a href="../Felge/kemijsko-ciscenje-felga.php">Kemijsko čišćenje felga</a>

                                        </li>





                                        <li class="main-nav-item">

                                            <a href="../Felge/nano-zastita-felga.php">Nano zaštita felga</a>

                                        </li>





                                        <li class="main-nav-item">

                                            <a href="../Felge/nano-zastita-guma.php">Nano zaštita guma</a>

                                        </li>





                                    </ul>



                                </div>



                            </div>



 <div class="b-main-recommends">
<div class="main-recommends-col">
<a class="main-recommends-title" href="../IspravnoPranje.html">Ispravno pranje</a><div class="main-recommends-description">Kako oprati automobil, a da ga ne oštetite!</div>
</div>
<div class="main-recommends-col">
<a class="main-recommends-title" href="../Detailing-brodova.html">Detailing brodova</a><div class="main-recommends-description">Paket usluga na Vašoj lokaciji!</div>
</div>
<div class="main-recommends-col">
<p class=" main-recommends-title">
    <span><a class="js__p_start" href="#">Oprema za detailing</a>
    </span></p>
<div class="main-recommends-description">Profesionalna sredstva za njegu vozila!</div>


</div>
 </div>
    
    
    
    <div class="p_body js__p_body js__fadeout"></div>
<div class="popup js__popup js__slide_top">
    <a href="#" class="p_close js__p_close" title="Close" ></a>
    <div class="p_content">
        <h2>Uskoro....</h2>
        <br/>
        <button class="p_close_btn js__p_close">OK</button>
    </div>
</div>
                       
                        </div>
                    </aside> 
          
          
        <div class="content">
            
            
 <ul class="B_crumbBox">
     <li class="B_firstCrumb" itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb">
         <a class="B_homeCrumb" itemprop="url" rel="Home" href="../index.html"><span itemprop="title">Naslovna</span></a>
     </li>
     
     
  <li itemscope="itemscope" class="B_crumb" itemtype="http://data-vocabulary.org/Breadcrumb">
      <a class="B_crumb" itemprop="url" rel="Услуги" href="../Usluge.html"><span itemprop="title">Usluge</span></a>
  </li>
  
  
  
 
  
  
    <li itemscope="itemscope" class="B_lastCrumb B_crumb" itemtype="http://data-vocabulary.org/Breadcrumb" >
      <a class="B_crumb" itemprop="url" rel="Салон" href="/services/salon/"><span itemprop="title">Zaštita farova od oštećenja</span></a>
  </li>
 
    <li class="B_lastCrumb" itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb">
    <li itemscope="itemscope" class="B_currentCrumb" itemtype="http://data-vocabulary.org/Breadcrumb"><p style="visibility: hidden;">Ремонт и восстановление кожи Advance Leather</p></li>

  
 
 

 
 
</ul>
            
            
            
            
<div class="wrap-h1">
 <div class="inner">
        <h1>
          <span>Zaštita farova od oštećenja</span>
        </h1>
 </div>
</div>
            
<div style="text-align: center; width: 50%; padding-bottom: 10px;">
<?php echo "<h1 class='errorForm'>$warning</h1>"; ?>
</div>        
                         
                         
<article>



<p>Zaštitna folija za farove, sa najvećom fizičko-mhaničkom zaštitom i optičkim performansama, sprječava pojavu ogrebotina
 i sitnih oštećenja na farovima uz maksimalnu učinkovitost rasvjete.</p>
 
 
 <p><strong><span style="color: #3C75B3;">
 Korištenje zaštitne folije, čuva izgled vaših farova, tako da će izgledati kao novi dugo vrijeme i bez poliranja. 
 </span></strong></p>

 
 
 
 
        <table class="pricelist-tbl">
                              <thead>
                                 <tr>
                                    <th rowspan="2">Zaštita farova od oštećenja zaštitnom folijom</th>
                                    <th>Golf  Class </th>
                                    <th>C Class </th>
                                    <th>E Class </th>
                                    <th>S class i terenci</th>
                                 </tr>
								 
								       <tr>
                                   
                                  <th>(Golf, Audi A3, BMW 1, Mercedes A…)</th>
                                    <th>(Mercedes C, Audi A4, BMW3…)</th>
                                    <th>(Mercedes E, BMW 5, Audi A6…</th>
                                    <th>(Mercedes S class, Audi A8, BMW 7, Range Rover…)</th>
                                 </tr>
								 
								 
                              </thead>
                              <tbody>
                                 <tr>
                                    <td style="text-align: center;">Cijena bez PDV</td>
                                    <td>od 320 kn</td>
                                    <td>od 360 kn</td>
                                    <td>od 360 kn</td>
                                    <td>od 400 kn</td>
                                 </tr>
                                 
                                  <tr>
                                    <td style="text-align: center;">Cijena sa PDV</td>
                                    <td>od 400 kn</td>
                                     <td>od 450 kn</td>
                                     <td>od 450 kn</td>
                                     <td>od 500 kn</td>
                                 </tr>
                                 
                                 
                              </tbody>
                           </table>










<a name="anchor_link"></a>

 <div class="open_order_form">

    <a class="btn"><span>Kontaktirajte nas</span></a>

	<div class="thankyou"><br/>Hvala!</div>

</div>



<div class="contact-form order-form">

    <form action="zastita-farova-od-ostecenja.php" method="post" id="zakazForm" role="form">

		<input type="hidden" name="nospam:blank" value="" />

          
<h2>
                                        Kontaktirajte nas
                                    </h2>
                                    <div class="form-item">
                                        <label class="form-label">Ime :</label>
                                        <div class="controls">
                                            <input class="form-text" type="text" name="name" placeholder="Ime" value="<?php echo htmlspecialchars($_POST['name']); ?>" oninvalid="this.setCustomValidity('Molimo Vas uneste svoje ime');">
<?php echo "<p class='errorForm'>$errName</p>"; ?>
                                        </div>
                                    </div>






                                    <div class="form-item">
                                        <label class="form-label">Tel:</label>
                                        <div class="controls">
                                            <input class="form-text" type="tel" name="tel" placeholder="Tel" value="<?php echo htmlspecialchars($_POST['tel']); ?>" oninvalid="this.setCustomValidity('Molimo Vas uneste svoj kontakt mobitel ili telefon')">
<?php echo "<p class='errorForm'> $errTel</p>"; ?>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <label class="form-label">E-mail:</label>
                                        <div class="controls">
                                            <input class="form-text" type="email" name="email"  placeholder="E-Mail" value="<?php echo htmlspecialchars($_POST['email']); ?>" oninvalid="this.setCustomValidity('Molimo Vas uneste svoj e-mail')">
<?php echo "<p class='errorForm'>$errEmail</p>"; ?>
                                        </div>
                                    </div>
                                    <div class="form-item">
                                        <label class="form-label">Poruka:</label>
                                        <div class="controls">
                                            <textarea class="form-textarea" name="message" placeholder="Poruka"><?php echo htmlspecialchars($_POST['message']); ?></textarea>
<?php echo "<p class='errorForm'>$errMessage</p>"; ?>
                                        </div>
                                    </div>


                                    <div class="form-item">
                                        <label class="form-label"></label>
                                        <div class="controls">
                                            <button class="btn"  id="submit" name="submit" type="submit" value="Send" onClick="clearform();"><span>Pošalji!</span></button>
                                        </div>
                                    </div>

<?php echo $result; ?>

                                </form>
</div>

<script src="../assets/template/js/myForm.js"></script>                       
 <br/>   
		




<div class="mob-frm" style="visibility: hidden;">

	<span class="form-zag-m"><span> -<br /> <i></i></span></span>

	<span class="phn"></span>

</div>
       
        
      </article>
 </div>
</div>
</div>
</div>
    
    
    
 
              
  <!--footer-->  

   <footer> <div class="inner">

      <div class="footer-top">

        <div class="b-footer-socials" style="visibility: hidden;">

 <a class="social-link facebook" href="#"></a><a class="social-link youtube" href="#"></a><a class="social-link instagram" href="#"></a>

        </div>

        <nav class="b-footer-nav">

 <ul>

                

                <li  class="nav-item first">

                    <a href="../Onama.html">O nama</a>



</li>

<li  class="nav-item">

    <a href="../Usluge.html">Usluge</a>

</li>

<li  class="nav-item">

	<a href="">Webshop</a>

</li>

<li  class="nav-item">

	<a href="../Galerija/gallery.html">Galerija radova</a>

</li>

<li  class="nav-item" style="display: none;">

    <a href="../Obuka.html">Obuka</a>

</li>

<li  class="nav-item" style="display: none;">

    <a href="../Partneri.html">Partneri</a>

</li>

<li  class="nav-item">

    <a href="../Cijene.html">Cjenik</a>

</li>

<li  class="nav-item">

	<a href="../Kontakt/Kontakt.php">Kontakt</a>

</li>



</ul>

        

        </nav>

      </div>

      <div class="footer-bottom">

	  	<div class="b-footer-contacts">

	  		<div style="width: 50%; display: inline-block;">

					<div class="b-footer-contacts-row">Zagreb, Samoborska 226</div>

					<div class="b-footer-contacts-row"><span>Теl.:</span> +385 1 4852 449 <span>|</span> <a href="mailto: info@detailing-star.hr">info@detailing-star.hr</a></div>

					<div class="b-footer-contacts-row">© 2017 «Detailing Star» <span></span> 

			</div>



		</div>

      </div>

    </div>



<div style="visibility: hidden;"><a href="http://sfera-adria.com" >Sfera-Adria.com</a></div>

      </div>

  </footer>  
       
       
       
       

<script type="text/javascript">
    $(function() {
      $(".js__p_start, .js__p_another_start").simplePopup();
    
    });
</script>
             
                
            
            
  
         </body>
      </html>