function sfill( sym , rule , len , steps )
%
% sfill is a variant of xshapes using Mfill for display. It is best used
% for simple figures. The "len" argument should be <= 8 for best results,
% and smaller values for "sym" should also be used (e.g., 5-11). See the
% documenation for Mfill concerning line and fill colors.
%
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
% Display points or the complete figure
   T = REDUTN( T ) ;
   str = mat2str( [ sym , n , len , steps ] ) ;
   Mfill( T , str ) ;
end

