function y = unidelay( x , BL , FB , FF , dly , sr )

% Universal (fir and iir) comb filter with a single delay
%
%   y = unidelay( x , BL , FB , FF , dly , sr )
%
% Inputs:
%   x   = input signal
%   BL  = blend control for feedforward of input sample [0,1]
%   FB  = gain for feedback (iir) [0,1]
%   FF  = gain for feedforward (fir) [0,1]
%   dly = length of delay in seconds
%   sr  = sample rate in seconds
%
% Output:
%   y   = vector of samples of filtered input signal

  x = rowvec( x ) ;
  
  lenx = length(x) ;
  y = zeros( 1 , lenx ) ;
  dlen = ceil( dly * sr ) ;
  Delayline = zeros( dlen , 1 ) ;
  ptr = 1 ;

  for n = 1:lenx
%
    xh = x(n) + FB * Delayline(ptr) ;
    y(n) = FF * Delayline(ptr) + BL * xh ; 
    Delayline(ptr) = xh ;
%
    ptr = ptr + 1 ;
    if ( ptr > dlen )
      ptr = 1 ;
    end
%
  end
  
end

% Adapted from:
% Udo Zoelzer, ed. "DAFX: Digital Audio Effects". Wiley, 2002, pp. 65-66. 
% ISBN-10: 9780471490784 
% ISBN-13: 978-0471490784 
% ASIN: 0471490784