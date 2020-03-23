% Creates Langlet's G matrix
%
%   y = G( n )
%
% Input:
%   n = order of G (a square matrix)
% Output:
%   y = G matrix of the specified order

function y = G( n )
  y = zeros( n , n ) ;
  y( 1 , : ) = ones( 1 , n ) ;
  for i = 2:n
    y( i , : ) = mod( cumsum( y( i - 1 ,  : ) ) , 2 ) ;
  end
  y = y == 1 ;
end