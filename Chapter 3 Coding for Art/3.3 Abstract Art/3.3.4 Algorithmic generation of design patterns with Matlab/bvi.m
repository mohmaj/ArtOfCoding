% Boolean vector integral. In APL-family languages this would be done with
% not-equal scan. Langlet's binary vector integral (bvi) is the same as the
% graycode-to-binary conversion of a vector of 1's and 0's.
%
%   y = bvi( x )
%
% Input:
%   x = vector of 1's and 0's
% Output:
%   y = modulo-2 cumulative sum of x

function y = bvi( x )
  y = mod( cumsum( x ) , 2 ) ;
  y = y == 1 ;
end