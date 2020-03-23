function xshapes( sym , rule , len , steps )
%
% xshapes is a variation of Langlet's "shapes" function written in Matlab. 
% It uses Wolfram's simple cellular automaton instead of a string-rewriting
% algorithm to generate the contour bit-string. The output can be displayed
% either as a line drawing or as the computed points. Comment out whichever
% option you don't want at the bottom of the program text. Mplot and
% Mpoints are the "standard" display functions. The others are more
% restricted. See the internal documentation for details of usage.
%
% Inputs:
%    sym   = order of rotational symmetry of the figure generated (>=5)
%    rule  = cellular automaton rule (0-255)
%    len   = number of line segments in the contour (16, 64, 256,...)
%    steps = number of steps of evolution of the celluar automaton (>=0)
%
% Generate the contour bit-string
   B = zeros( 1 , len ) ;
   B( floor( len / 2 ) ) = 1 ;
   n = rule ;
   rule = d2b( rule , 8 ) ;
   for i = 1 : steps
       B = CAstep( B , rule ) ;
   end
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
   str = mat2str( [ sym , n , len , steps ] ) ;
% Un-comment ONE of the following statements to select the display type.
   Mplot( T , str ) ;   
%   Mpoints( T , str ) ;
%   Mline2( T , str ) ;
%   Mfill( T , str ) ;
%   Msegment( T , str ) ;
%
% Auditory representation of the contour bit-string
   Tones( B , sym ) ;
end

