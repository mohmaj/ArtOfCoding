function y = hann( N )
  n = ( 0 : ( N - 1 ) ) / N ;
  y = 0.5 * ( 1 - cos( ( 2 * pi * n ) ) ) ;
  y = y' ;
end