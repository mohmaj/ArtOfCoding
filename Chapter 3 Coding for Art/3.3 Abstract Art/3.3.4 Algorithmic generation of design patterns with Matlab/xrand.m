function xrand( sym , len , p )
%
% This version of the SHAPES algorithm generates a random contour
% bit-string, which is used without modification.
%
% Inputs:
%    sym   = order of rotational symmetry of the figure generated (>=5)
%    len   = number of line segments in the contour (16, 64, 256,...))
%    p     = approximate fraction of 1's in contour bit-string (0<p<1)
%
% Generate a random contour bit-string
   B = xrandv( len , p ) ;
% Generate the rotation matrix   
   M = rotmat( sym ) ;
% Generate the first powers of M
   T = matpow( M , sym ) ;
% Make sure the parity of B is even
   K = sym * length( B ) ;
   I = mod( sum( B ) , 2 ) ;
   K = K * ( I + 1 ) ;
% Matrix indexing
   M = mindex( T , K , sym ) ;
% Relative coordinates
   T = rcoord( B , M , K , sym ) ;
% Absolute coordinates
   T = acoord( T ) ;
% Scale adjustment
   T = scaleadj( T ) ;
% Display the result
   T = REDUTN( T ) ;
   str = mat2str( [ sym , len , p ] ) ;
% Un-comment ONE of the following statements to select the display type.
   Mplot( T , str ) ;   
%   Mpoints( T , str ) ;
%   Mline2( T , str ) ;
%   Mfill( T , str ) ;
%   Msegment( T , str ) ;
%
% Un-comment to enable auditory representation of the contour bit-string
   Tones( B , sym ) ;
end