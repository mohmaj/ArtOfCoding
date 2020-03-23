function [ a , b ] = trim2( x , y )
%
% Trims the lengths of two vectors to the length of the shorter
% vector
%
%   [ a , b ] = trim2( x , y )
%
% Inputs:
%   x , y = any vectors
%
% Outputs:
%   a , b = row vectors trimmed to common length

  x = rowvec( x ) ;
  y = rowvec( y ) ;
  
  lenx = length(x) ;
  leny = length(y) ;
  if lenx == leny
    a = x ;
    b = y ;
  elseif lenx < leny
    diff = leny - lenx ;
    a = x ;
    b = y(1:leny-diff) ;
  else
    diff = lenx - leny ;
    a = x(1:lenx-diff) ;
    b = y ;
  end

end