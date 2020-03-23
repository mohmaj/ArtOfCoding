function y = rotr( x )
  y = circshift( x' , 1 )' ;
end