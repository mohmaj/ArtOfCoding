function autoshapes( n , irreg , save )
%
% Automatically generates a series of SHAPES figures.
%
% Inputs:
%   n     - the desired number of figures
%   irreg - 0 = no irregularity; 1 = irregularity
%   save  - 1 = save figures as they are drawn; 0 = don't save
%
   rng( 'shuffle' ) ;
   for i = 1 : n
       sym = floor( 26 * rand( 1 , 1 ) ) + 5 ;
       xform = floor( 3 * rand( 1 , 1 ) ) - 1 ;
       reps = floor( 4 * rand( 1 , 1 ) ) + 2 ;
       ID = floor( 32 * rand( 1 , 1 ) ) ;
       if save == 1
          figure
       end
       shapes( sym , xform , reps , ID , irreg ) ;
       pause( 2 )
   end
end