% Boolean inner product
%
%   y = bmp( a , b )
%
% Inputs:
%   a , b = conformable square boolean matrices
% Output:
%   y = boolean inner product of a and b

function y = bmp( a , b )
  y = mod( abs( a ) * abs( b ) , 2 ) ;
  y = y == 1 ;
end