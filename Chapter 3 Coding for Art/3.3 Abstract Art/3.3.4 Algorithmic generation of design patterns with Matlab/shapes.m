function shapes( sym , xform , reps , ID , irreg )
%
% shapes is a version of Langlet's "shapes" function written in Matlab. It
% has all the features of the original function. The output can be
% displayed either as a line drawing or as the computed points. Comment out
% whichever option you don't want at the bottom of the program text. Mplot
% and Mpoints are the "standard" display functions. The others are more
% restricted. See the internal documentation for details of usage.  
%
% Inputs:
%    sym   = order of rotational symmetry of the figure generated (>=5)
%    xform = optional transform (1 = cognitive, -1 = helical, 0 = none)
%    reps  = 4^reps = the number of line segments in the contour
%    ID    = number of times the contour string is integrated (>=0)
%    irreg = 0 = no irregularity; 1 = irregularity
%
% Generate the contour bit-string
   B = contour( reps ) ;
% Optional transform
   if xform == 1
       B = rcog( B ) ;
   elseif xform == -1
       B = rhel( B ) ;
   end
% Generate the rotation matrix   
   M = rotmat( sym ) ;
% Generate the first powers of M
   T = matpow( M , sym ) ;
% Optional binary integration
   if ID > 0
       for i = 1 : ID
           B = bvi( B ) ;
       end
   end
% Parity of B must be even
   K = sym * length( B ) ;
   I = mod( sum( B ) , 2 ) ;
   K = K * ( I + 1 ) ;
% Matrix indexing
   M = mindex( T , K , sym ) ;
% Relative coordinates
   T = rcoord( B , M , K , sym ) ;
% Optional irregularity
   if irreg == 1
      z = repmat( [ 1 , 10 , 100 , 1000 ] , 1 , floor( K / 4 ) ) ;
      z = transpose( vertcat( z , z ) ) ;
      T = T .* z ;
   end
% Absolute coordinates
   T = acoord( T ) ;
% Scale adjustment
   T = scaleadj( T ) ;
% Display points or full figure
   T = REDUTN( T ) ;
   str = mat2str( [ sym , xform , reps , ID , irreg ] ) ;
% Un-comment ONE of the following statements to select the display type.
   Mplot( T , str ) ;   
%   Mpoints( T , str ) ;
%   Mline2( T , str ) ;
%   Mfill( T , str ) ;
%   Msegment( T , str ) ;
%
   Tones( B , sym ) ;
end 

