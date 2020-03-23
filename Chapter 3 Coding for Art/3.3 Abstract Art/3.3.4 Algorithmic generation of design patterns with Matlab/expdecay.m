function y = expdecay( dur , k , sr )

% Creates an exponential decay. The amplitude of the output decays from 1
% to 2^(-k) over dur seconds.
%
%   y = expdecay( dur , k , sr )
%
% Inputs:
%   dur = duration of decay in seconds
%   k   = decay constant (k=8 typical)
%   sr  = sample rate in samples per second
%
% Output:
%   y   = vector of decay samples decreasing exponentially from 1 to 2(-k)

  n = ceil( dur * sr ) ;
  t = ( 0 : n - 1 ) / n ; 
  y = 2 .^ ( -k * t ) ;

end