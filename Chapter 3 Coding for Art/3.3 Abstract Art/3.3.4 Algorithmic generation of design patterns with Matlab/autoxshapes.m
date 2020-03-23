function autoxshapes( n , save )
%
% Automatically generates a series of xshapes figures.
%
% Inputs:
%   n     - the desired number of figures
%   save  - 1 = save figures as they are drawn; 0 = don't save
%
   rng( 'shuffle' ) ;
   pow4 = [ 16 , 64 , 256 ] ;
   bestrules = zeros( 1 , 75 ) ;
   bestrules( 1 : 15 ) = [ 18 , 22 , 26 , 28 , 30 , 45 , 50 , 54 , 57 , 58 , 60 , 62 , 70 , 73 , 75 ] ;
   bestrules( 16 : 30 ) = [ 78 , 82 , 86 , 89 , 90 , 92 , 94 , 99 , 101 , 102 , 105 , 109 , 110 , 114 , 118 ] ;
   bestrules( 31 : 45 ) = [ 122 , 124 , 126 , 129 , 131 , 133 , 135 , 137 , 141 , 145 , 146 , 147 , 149 , 150 , 153 ] ;
   bestrules( 46 : 60 ) = [ 154 , 156 , 157 , 158 , 161 , 163 , 165 , 167 , 169 , 177 , 178 , 179 , 181 , 182 , 186 ] ;
   bestrules( 61 : 75 ) = [ 188 , 190 , 193 , 195 , 197 , 198 , 199 , 210 , 214 , 218 , 225 , 230 , 242 , 246 , 250 ] ;
   for i = 1 : n
       sym = floor( 26 * rand( 1 , 1 ) ) + 5 ;
       rule = bestrules( floor( 75 * rand( 1 , 1 ) + 1 ) ) ;
       len = pow4( ceil( 3 * rand( 1 , 1 ) ) ) ;
       steps = floor( 32 * rand( 1 , 1 ) ) ;
       if save == 1
          figure
       end
       xshapes( sym , rule , len , steps ) ;
       pause( 2 )
   end
end
