% Displays an image
%
%   imdisplay( x )
%
% Input:
%   x = matrix of integers
% Output:
%   image representing x

function imdisplay( x , str )
   [ r , c ] = size( x ) ;
   if r == 1 || c == 1
      error( 'image array must be two-dimensional' ) ;
   end
   mmx = abs( max( max( x ) ) ) ;
   levels = ( 0 : mmx ) / mmx ;
   levels = repmat( levels , 1 , 3 ) ;
   figure
   map =( reshape( levels , mmx + 1 , 3 ) ) ;
   map = flipud( map ) ;
   x = x + 1 ;
   colormap( map ) ;
   image( x ) ;
   axis equal
   axis square
   axis off 
   title( str )
end