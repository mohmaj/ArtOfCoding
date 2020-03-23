function y = artrvb( x , predelay , wet , IRdur , k , sr )

% Artificial (purely digital) reverb.
%
%   y = artrvb( x , predelay , wet , IRdur , k , sr )
%
% Inputs:
%   x        = input signal
%   predelay = time in seconds for the arrival of the first reflection
%   wet      = percentage of wet sound in output (0-100)
%   IRdur    = duration of the impulse response of the virtual space (sec)
%   k        = decay constant (k=8 typical)
%   sr       = sample rate in samples per second
%
% Output:
%   y        = signal with artificial reverb

  x = rowvec( x ) ;
  
  xlen = length( x ) ;
  x2 = [ zeros( 1 , ceil( predelay * sr ) ) x ] ;
  x2len = length( x2 ) ;
  x1 = [ x zeros( 1 , x2len - xlen ) ] ;
  H = noise( IRdur ,  sr ) .* expdecay( IRdur , k , sr ) ;
  coeff = wet / 100 ;
  x2 = coeff * fastconv( H , x2 ) ;
  x1 = ( 1 - coeff ) * x1 ;
  diff = length( x2 ) - length( x1 ) ;
  x1 = [ x1 zeros( 1 , diff ) ] ;
  y = x1 + x2 ;
  
end