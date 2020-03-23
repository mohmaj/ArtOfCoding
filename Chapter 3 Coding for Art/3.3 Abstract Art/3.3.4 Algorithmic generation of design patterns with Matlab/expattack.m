function y = expattack( dur , k , sr )

% Creates an exponential attack. The amplitude of the output rises from 0
% to 1 over dur seconds.
%
%   y = expattack( dur , k , sr )
%
% Inputs:
%   dur = duration of attack in seconds
%   k   = attack constant (k=8 typical)
%   sr  = sample rate in samples per second
%
% Output:
%   y   = vector of attack samples rising exponentially from 0 to 1

  n = floor( dur * sr ) ;
  t = ( 0 : n - 1 ) / n ; 
  y = ( 2 .^ ( k * t ) - 1 ) / 2^k ;

end