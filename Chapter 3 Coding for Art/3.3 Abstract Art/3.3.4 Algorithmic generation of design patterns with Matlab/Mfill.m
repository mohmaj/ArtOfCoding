function Mfill( T , str )
%
% Mfill attempts to fill a subset of the closed polygons defined by points
% T with a specified color and to make the edges of the polygons a
% different color. Here are the standard colors:
%  'red' or 'r'     Red
%  'green' or 'g'   Green
%  'blue' or 'b'    Blue
%  'yellow' or 'y'  Yellow
%  'magenta' or 'm' Magenta
%  'cyan' or 'c'    Cyan
%  'white' or 'w'   White
%  'black' or 'k'   Black
% For additional colors see the fill help (enter: help fill).
%
% Matlab's "fill" function will fail with some of the more complex figures
% produced by shapes and xshapes. It appears to work properly when the
% "reps" argument to shapes is 2, and the "length" argument to xshapes is
% <= 8.
%
   T = [ T , T( [ 1 , 2 ] ) ] ;
   S = size( T ) ;
   npoints = floor( S / 2 ) ;
   npoints = npoints( 2 ) ;
   T = transpose( reshape( T , 2 , npoints ) ) ;
   X = T( : , 1 ) + 10 ;
   Y = T( : , 2 ) + 10 ;
 % Display the figure with red edge color and blue fill.
   fill( X , Y , 'blue' , 'EdgeColor' , 'red' , 'LineWidth' , 2 ) ;
   axis equal
   axis square
   axis off
   title( str )
end

