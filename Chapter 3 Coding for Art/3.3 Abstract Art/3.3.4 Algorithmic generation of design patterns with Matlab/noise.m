function y = noise( dur , sr )
  y =  2 .* ( rand( 1 , floor( dur * sr ) ) - 0.5 ) ; 
end

