function y = stereo( h , sr )
     hsL = artrvb( h , 0.05 , 50 , 2 , 8 , sr ) ;
     hsR = artrvb( h , 0.05 , 50 , 2 , 8 , sr ) ;
     hsL = fadeout( hsL , 1 , sr ) ;
     hsR = fadeout( hsR , 1 , sr ) ;
     hsL = hsL / max( abs( hsL ) ) ;
     hsR = hsR / max( abs( hsR ) ) ;
     hsL = [ zeros( 1 , floor( sr / 10 ) ) , hsL ] ;
     hsR = [ zeros( 1 , floor( sr / 10 ) ) , hsR ] ;
     y = transpose( vertcat( hsL , hsR ) ) ;